# Hover-driven color scenes

Use coordinated palettes attached to categories, cards, or explicit scene controls. The user explicitly requested hover-driven theme changes. The following palette assignments and interaction rules are authored recommendations, not verified original site values or event behavior.

## Semantic variables

Bind the section's background, essential text, decorative accent, panel background, and panel text to `--fp-stage`, `--fp-ink`, `--fp-accent`, `--fp-panel`, and `--fp-panel-ink`. Keep raw source color tokens unchanged. Icons and borders should inherit currentColor where possible. Essential labels should use the ink pair, not the decorative accent.

| Scene | Stage | Essential ink | Decorative accent |
| --- | --- | --- | --- |
| Violet | #8584bd | #000000 | #f4ed36 |
| Pink | #f8c1ba | #1a1a1a | #ac4f98 |
| Matcha | #b5c995 | #1a1a1a | #61609a |
| Yellow | #f4ed36 | #1a1a1a | #c94245 |
| Lilac | #61609a | #f9f5f2 | #f9cc73 |

Use Bone White with Ink Black for the readable panel in each scene. Yellow on the original violet is an expressive reference pairing but insufficient for many text/control roles. Put essential text in the tested ink color, or use a strong flat backing behind large yellow lettering. Decorative accents do not imply permission to use that pair for small text.

## Preview versus selection

Maintain separate `basePalette`, `hoverPalette`, and `focusPalette` state. Resolve the active palette as focus first, then hover, then base. Focus wins so moving a mouse cannot unexpectedly change the palette surrounding a keyboard user's current control.

- Fine-pointer enter previews that target's palette; leave clears only that target's preview. A late leave from an older target must not clear a newer target.
- Focus entering a target previews its palette. Clear on focusout only when focus leaves the target, not when moving to a nested child.
- Explicit native palette buttons on click/Enter/Space commit a base palette and expose selection with `aria-pressed`. Touch users can use the same buttons without hover.
- Existing links keep navigation semantics. Hover must not navigate; do not consume the first tap on an ordinary link solely to choose a color.
- Leaving all preview targets restores the committed palette or section default. Scroll-driven scene changes may update the base but must not overwrite an active focus preview. Do not move focus or scroll when switching.

For workshop integration, keep state on the Flying Papers section and scope all CSS variables to it. Existing student input, copied prompt state, and selected idea must remain unchanged. Announce deliberate palette selections in a polite status element, not every pointer preview.

## GSAP visual transition

Animate a decorative wipe/paint layer or character reaction over approximately 0.3s. Switch the semantic text/background pair together at a controlled point. Prefer atomic palette changes plus animated decorative movement to interpolating essential text and background through unknown contrast combinations. A wipe must stay behind readable controls or use an opaque neutral content panel. Under reduced motion, swap the palette instantly and skip the wipe.

If tweening decorative custom properties with GSAP, use a dedicated tween with `overwrite: 'auto'` so rapid hovers settle on the current target. Keep display transitions independent of scroll transforms. Use no random color generation, automatic strobing, or full-screen flashing loops.

## Acceptance checks

Verify all five essential stage/text pairs and the readable panel at 4.5:1 or better for normal text. Check outlines and focus indicators against their immediate backgrounds. Test rapid entry/exit, hover while another item is focused, nested focus movement, switching with touch buttons, and reduced motion. Verify restoration and that no other skill section changes colors.
