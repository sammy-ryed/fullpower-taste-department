// Structural, portability, units, and palette checks; visual QA is still required.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const base = fileURLToPath(new URL('../', import.meta.url));
let checks = 0;
function assert(condition, message) { if (!condition) throw new Error(message); checks++; }
const read = path => readFileSync(resolve(base, path), 'utf8');
const skill = read('SKILL.md');
assert(/^---\r?\nname: indian-print-maximalism\r?\ndescription: [^\r\n]+\r?\n---/.test(skill), 'Required frontmatter');
assert(skill.split('description: ')[1].split('\n')[0].length < 1024, 'Description is too long');
const files = readdirSync(base, { recursive: true, withFileTypes: true }).filter(item => item.isFile()).map(item => resolve(item.parentPath, item.name));
for (const file of files) {
  if (!['.css', '.json', '.md', '.html'].includes(extname(file))) continue;
  const source = readFileSync(file, 'utf8');
  assert(!/-?\d+(?:\.\d+)?px\b/.test(source), `Pixel dimension in ${file}`);
  assert(!/&#x20;|\\--/.test(source), `Escaped paste artifacts in ${file}`);
  if (extname(file) === '.md') {
    for (const match of source.matchAll(/\]\(([^)]+)\)/g)) {
      const target = match[1];
      if (/^(https?:|#)/.test(target)) continue;
      assert(existsSync(resolve(dirname(file), target.split('#')[0])), `Missing Markdown target ${target}`);
    }
  }
  if (extname(file) === '.css' || extname(file) === '.html') {
    const paths = extname(file) === '.css' ? [...source.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)].map(m => m[1]) : [...source.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1]);
    for (const path of paths) {
      if (/^(https?:|data:|#)/.test(path)) continue;
      assert(existsSync(resolve(dirname(file), path)), `Missing asset ${path}`);
    }
  }
}
const tokens = JSON.parse(read('assets/token.json'));
const css = read('assets/variables.css');
for (const [group, entries] of Object.entries(tokens)) {
  if (group.startsWith('$') || group === 'palettes') continue;
  for (const [name, token] of Object.entries(entries)) {
    assert(css.includes(`--ipm-${group}-${name}: ${token.$value};`), `Stale CSS token: ${group}.${name}`);
    if (token.$type === 'dimension') assert(/^-?\d+(?:\.\d+)?rem$/.test(token.$value), `Non-rem token ${group}.${name}`);
  }
}
const color = alias => tokens.color[alias.match(/\{color\.(.+)\}/)[1]].$value;
function luminance(hex) {
  const channels = hex.slice(1).match(/../g).map(s => parseInt(s, 16) / 255).map(n => n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4);
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}
function ratio(a, b) { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
for (const [name, palette] of Object.entries(tokens.palettes)) {
  const body = ratio(color(palette.canvas), color(palette.ink));
  const panel = ratio(color(palette.panel), color(palette['panel-ink']));
  const display = ratio(color(palette.canvas), color(palette.face));
  assert(body >= 4.5 && panel >= 4.5 && display >= 3, `Contrast failure: ${name}`);
  console.log(`${name}: body ${body.toFixed(2)}:1, panel ${panel.toFixed(2)}:1, display ${display.toFixed(2)}:1`);
}
assert(ratio(tokens.color.paper.$value, tokens.color.vermilion.$value) >= 4.5, 'Frontend banner contrast');
for (const file of ['assets/fonts/Teko-Variable.ttf', 'assets/fonts/YatraOne-Regular.ttf']) {
  const bytes = readFileSync(resolve(base, file));
  assert(bytes.readUInt32BE(0) === 0x00010000, `Not a TrueType font: ${file}`);
}
for (const file of ['assets/fonts/Teko-OFL.txt', 'assets/fonts/YatraOne-OFL.txt']) assert(read(file).includes('SIL OPEN FONT LICENSE'), `Missing font license ${file}`);
execFileSync(process.execPath, ['--check', resolve(base, 'assets/specimen.js')]);
console.log(`Passed ${checks} checks across ${files.length} files. Browser/print visual quality is not proved by this script.`);
