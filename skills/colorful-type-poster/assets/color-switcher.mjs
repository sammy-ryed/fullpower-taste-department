export const palettes = Object.freeze([
  { id: 'mint', name: 'Mint', canvas: '#c7ffcd', ink: '#000000' },
  { id: 'brown', name: 'Brown', canvas: '#806247', ink: '#ffffff' },
  { id: 'mauve-red', name: 'Mauve and red', canvas: '#b39cb1', ink: '#701000' },
  { id: 'yellow', name: 'Yellow', canvas: '#ffeb62', ink: '#000000' },
  { id: 'white', name: 'White', canvas: '#ffffff', ink: '#000000' },
  { id: 'blue', name: 'Blue', canvas: '#e1e1e1', ink: '#1600df' },
  { id: 'red', name: 'Red', canvas: '#d40000', ink: '#ffffff' },
].map(Object.freeze));

export function mountColorSwitcher(root, button, status) {
  if (!root || !button || !status || !root.contains(button) || !root.contains(status)) {
    throw new TypeError('Provide a root containing the color button and status element.');
  }
  let index = Math.max(0, palettes.findIndex(p => p.id === root.dataset.goodGlyphsPalette));
  button.type = 'button';
  status.setAttribute('role', 'status');
  function render() {
    const palette = palettes[index];
    root.dataset.goodGlyphsPalette = palette.id;
    status.textContent = `Colors: ${palette.name}`;
  }
  function cycle() { index = (index + 1) % palettes.length; render(); }
  render();
  button.addEventListener('click', cycle);
  return () => button.removeEventListener('click', cycle);
}
