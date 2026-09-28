// Dependency-free behavior checks using a minimal DOM double, not a browser.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source = readFileSync(new URL('../assets/specimen.js', import.meta.url), 'utf8');
async function setup(reduced = false, clipboard = true) {
  const animations = [];
  class ElementDouble {
    dataset = {}; attributes = {}; handlers = {}; textContent = ''; disabled = false;
    setAttribute(name, value) { this.attributes[name] = value; }
    addEventListener(name, fn) { this.handlers[name] = fn; }
    animate() { const animation = { cancelled: false, cancel() { this.cancelled = true; } }; animations.push(animation); return animation; }
    async click() { if (!this.disabled) await this.handlers.click(); }
  }
  const root = new ElementDouble();
  const swatches = ['mango', 'indigo', 'gulabi'].map(palette => { const button = new ElementDouble(); button.dataset.palette = palette; return button; });
  const nodes = Object.fromEntries(['#palette-status', '.motion-toggle', '.pendant', '.title-block', '.copy-button', '#prompt-text', '.copy-status'].map(key => [key, new ElementDouble()]));
  nodes['#prompt-text'].textContent = '  A test prompt.  ';
  root.querySelectorAll = () => swatches;
  root.querySelector = key => nodes[key];
  const media = { matches: reduced, addEventListener(type, fn) { this.change = fn; } };
  let copied = null, selected = null;
  const context = {
    Element: ElementDouble,
    document: { querySelector: () => root, fonts: { ready: Promise.resolve() }, createRange: () => ({ selectNodeContents(node) { selected = node; } }) },
    window: { matchMedia: () => media, getSelection: () => ({ removeAllRanges() {}, addRange() {} }) },
    navigator: clipboard ? { clipboard: { async writeText(text) { copied = text; } } } : {}
  };
  vm.runInNewContext(source, context);
  await new Promise(resolve => setImmediate(resolve));
  return { root, swatches, nodes, media, animations, copied: () => copied, selected: () => selected };
}
const normal = await setup();
assert.equal(normal.animations.length, 2);
await normal.swatches[1].click();
assert.equal(normal.root.dataset.ipmPalette, 'indigo');
assert.equal(normal.swatches.filter(button => button.attributes['aria-pressed'] === 'true').length, 1);
await normal.nodes['.motion-toggle'].click();
assert.equal(normal.root.dataset.ipmMotion, 'off');
assert(normal.animations.every(animation => animation.cancelled));
await normal.nodes['.motion-toggle'].click();
assert.equal(normal.animations.length, 4);
normal.media.matches = true;
normal.media.change();
assert(normal.nodes['.motion-toggle'].disabled);
assert(normal.animations.every(animation => animation.cancelled));
await normal.nodes['.copy-button'].click();
assert.equal(normal.copied(), 'A test prompt.');
const reduced = await setup(true, false);
assert.equal(reduced.animations.length, 0);
assert.equal(reduced.root.dataset.ipmMotion, 'off');
await reduced.nodes['.motion-toggle'].click();
assert.equal(reduced.animations.length, 0);
await reduced.nodes['.copy-button'].click();
assert.equal(reduced.selected(), reduced.nodes['#prompt-text']);
console.log('PASS: palette selection, animation pause/replay, live reduced-motion change, reduced-motion startup, clipboard success, and manual-copy fallback.');
