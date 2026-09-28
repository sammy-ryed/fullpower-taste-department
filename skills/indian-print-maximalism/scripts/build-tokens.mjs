// Rebuild only the two generated token stylesheets beside token.json.
import { readFileSync, writeFileSync } from 'node:fs';
const source = new URL('../assets/token.json', import.meta.url);
const tokens = JSON.parse(readFileSync(source, 'utf8'));
const declarations = [];
const theme = [];
const namespaces = { color: 'color', font: 'font', text: 'text', leading: 'leading', tracking: 'tracking', weight: 'font-weight', spacing: 'spacing', radius: 'radius', shadow: 'shadow' };
for (const [group, entries] of Object.entries(tokens)) {
  if (group.startsWith('$') || group === 'palettes') continue;
  for (const [key, token] of Object.entries(entries)) {
    if (token.$value === undefined) throw new Error(`Missing value: ${group}.${key}`);
    if (token.$type === 'dimension' && !/^-?\d+(?:\.\d+)?rem$/.test(token.$value)) throw new Error(`Non-rem dimension: ${group}.${key}`);
    declarations.push(`  --ipm-${group}-${key}: ${token.$value};`);
    if (namespaces[group]) theme.push(`  --${namespaces[group]}-ipm-${key}: ${token.$value};`);
  }
}
function paletteBody(values) {
  return Object.entries(values).map(([key, reference]) => {
    const parts = /^\{([\w-]+)\.([\w-]+)\}$/.exec(reference);
    if (!parts || !tokens[parts[1]]?.[parts[2]]) throw new Error(`Invalid palette reference: ${reference}`);
    return `  --ipm-${key}: var(--ipm-${parts[1]}-${parts[2]});`;
  }).join('\n');
}
const banner = '/* Generated from token.json by scripts/build-tokens.mjs. */\n';
const base = `${banner}.ipm {\n${declarations.join('\n')}\n${paletteBody(tokens.palettes.mango)}\n}\n`;
const variants = Object.entries(tokens.palettes).map(([name, values]) => `\n.ipm[data-ipm-palette="${name}"] {\n${paletteBody(values)}\n}\n`).join('');
writeFileSync(new URL('../assets/variables.css', import.meta.url), base + variants);
writeFileSync(new URL('../assets/theme.css', import.meta.url), `${banner}/* Tailwind v4 only. Inline preserves element-scoped semantic shadow colors. */\n@theme inline {\n${theme.join('\n')}\n}\n`);
console.log(`Built ${declarations.length} scoped base tokens, ${Object.keys(tokens.palettes).length} palettes, and ${theme.length} Tailwind tokens.`);
