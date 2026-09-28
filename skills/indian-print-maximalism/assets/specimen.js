// No network calls or framework dependency. This is a visual study, not an installer.
(() => {
  const root = document.querySelector('.ipm');
  const swatches = [...root.querySelectorAll('[data-palette]')];
  const status = root.querySelector('#palette-status');
  const paletteNames = { mango: 'Mango print', indigo: 'Indigo night', gulabi: 'Gulabi paper' };
  swatches.forEach(button => button.addEventListener('click', () => {
    root.dataset.ipmPalette = button.dataset.palette;
    swatches.forEach(swatch => swatch.setAttribute('aria-pressed', String(swatch === button)));
    status.textContent = `${paletteNames[button.dataset.palette]} selected.`;
  }));

  const motionButton = root.querySelector('.motion-toggle');
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = false;
  let animations = [];
  function stopAnimations() { animations.forEach(animation => { if (animation.playState !== 'finished') animation.cancel(); }); animations = []; }
  function playEntrance() {
    if (media.matches || userPaused || !Element.prototype.animate) return;
    animations = [
      root.querySelector('.pendant').animate([
        { transform: 'rotate(-9deg)' }, { transform: 'rotate(5deg)', offset: 0.42 },
        { transform: 'rotate(-2deg)', offset: 0.72 }, { transform: 'rotate(0)' }
      ], { duration: 1500, easing: 'ease-out' }),
      root.querySelector('.title-block').animate([
        { transform: 'translateY(0.75rem)', opacity: 0.65 }, { transform: 'translateY(0)', opacity: 1 }
      ], { duration: 750, easing: 'cubic-bezier(0.2, 0.75, 0.2, 1)' })
    ];
  }
  function syncMotion() {
    const stopped = media.matches || userPaused;
    root.dataset.ipmMotion = stopped ? 'off' : 'on';
    motionButton.setAttribute('aria-pressed', String(stopped));
    motionButton.textContent = media.matches ? 'Reduced motion' : userPaused ? 'Replay motion' : 'Pause motion';
    motionButton.disabled = media.matches;
    if (stopped) stopAnimations();
  }
  motionButton.addEventListener('click', () => {
    userPaused = !userPaused;
    syncMotion();
    if (!userPaused) playEntrance();
  });
  media.addEventListener('change', syncMotion);
  syncMotion();
  document.fonts.ready.then(playEntrance);

  root.querySelector('.copy-button').addEventListener('click', async () => {
    const text = root.querySelector('#prompt-text');
    const feedback = root.querySelector('.copy-status');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard not available');
      await navigator.clipboard.writeText(text.textContent.trim());
      feedback.textContent = 'Copied. Attach the skill folder with your prompt.';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
      feedback.textContent = 'Prompt selected. Use your browser’s Copy command.';
    }
  });
})();
