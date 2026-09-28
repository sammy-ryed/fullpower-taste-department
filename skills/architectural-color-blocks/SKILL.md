---
name: architectural-color-blocks
description: Build architectural typography-led frontends inspired by The1, with concrete-gray canvases, regular-weight oversized sans-serif type, sharp painted identity blocks, dark pill controls, and scroll-driven stacked numeral panels revealing 1, 2, then 3. Use for this requested style or bold industrial editorial interfaces.
---

# Architectural Color Blocks

Adapt the user's requested content to a flat, architectural visual language. Use giant type, structural rules, and paint-colored blocks; preserve the existing framework and functionality. Do not import the source site's property claims, addresses, availability, or branding into unrelated projects.

## Resources

Read [design.md](references/design.md) and [numbered-panel motion](references/numbered-panels.md). Use [variables.css](assets/variables.css), [token.json](assets/token.json), and, for existing Tailwind v4 projects, [theme.css](assets/theme.css). These instructions and the motion guide resolve conflicts in the extraction. JSON retains original measured typography variants and adds `semanticTypography` matching CSS.

## Visual direction

- Concrete (#d9d9d9) is the default canvas; Iron (#1f1f1f) is the main ink. Large regular-weight KH Teka headlines nearly span the canvas. Use the user's available licensed font or a suitable sans fallback; font binaries are not included.
- Treat green, pink, yellow, and red as distinct section identities, not generic success/error/warning colors. Use solid surfaces without shadows, gradients, or glass effects.
- Use square-edged image and section blocks, contained relevant photography, thin 0.0625rem rules, and 6.25rem-radius dark pill actions. A circular menu trigger is appropriate where navigation needs it. Do not apply the available rounded radius tokens to all cards.
- Build a near-full-width composition, up to the 90rem layout reference, with minimal structural gutters. Reflow a four-column collection to two or one on narrow screens. Zero card padding refers to the paint block's outer geometry, not a ban on readable inner text padding.
- Use caption text only for secondary information. Long paragraphs and workshop prompts use the added 1rem prose role with 1.5 leading. Essential text and controls need visible contrast and comfortable hit areas.

## Typography corrections

All pixel dimensions in the package are converted to rem at the conventional sixteen-pixel base. Leave the root font size at the browser default. Percentages, unitless line heights, and font-relative tracking retain their appropriate units.

The source CSS's tracking values conflict with both its prose and JSON. The assets deliberately use -0.03em for compact text/subheadings and -0.06em for heading/display roles, following the JSON's larger-heading convention. They are not literal conversions of the erroneous tiny pixel tracking values. Ease tracking for fallback fonts or longer copy when needed.

The body-sm name is retained for compatibility although its 1.125rem value is larger than the 0.9375rem body token. Missing tracking for caption/body is made explicit. `System sans-serif` was a descriptive label, not a font name; the utility stack now begins with system-ui.

The 13.4375rem display token is a desktop reference. Use fluid headings, for example `clamp(3rem, 15vw, 13.4375rem)`, adjusted to title length. Compressed 0.7–0.8 leading is for fitted display text only; increase it for wrapped headings, fallback fonts, and zoom. Keep essential text legible instead of reproducing clipping.

## Signature 1–2–3 sequence

For a full page or the workshop showcase, implement the stacked numeral-panel scene described in the motion guide. Vertical scrolling should bring successive large color panels from the right over the previous panels while leaving narrow strips visible at the left. Each panel holds one enormous numeral plus a short editorial feature. This is a layered horizontal reveal, not a counter changing its text.

GSAP with ScrollTrigger is the recommended implementation for controllable pinning and scrubbed overlap; reuse the host's existing animation stack if it can reproduce the same behavior. Keep a normal vertical reading layout for narrow screens and reduced motion. Do not impose a full-page animation on a request for one small component.

In the workshop gallery, bind all styles, selectors, listeners, and triggers to the The1 section. Keep the prompt panel readable and the copy/download/open actions keyboard-accessible. Theme changes and pinning must not affect adjacent skills.

## Surface and accessibility corrections

- The repeated `--surface-paint-block` values are replaced by yellow/pink/red/green-specific names. An alias to green preserves the former effective value. JSON now includes all four named surfaces rather than only the last overwritten green entry.
- Iron on green is too weak for essential small text. Use the added white `--color-on-green` for text on that surface, or place copy on a concrete inset. Other paint surfaces may use Iron after verification. Decorative giant numerals can use an appropriate high-contrast ink as well.
- Identity dots need a contrasting setting or outline if they share their background color, and accompanying labels; they cannot be the sole availability signal.
- Menus require real buttons, expanded state, Escape-to-close, logical focus handling, and no invisible focus. Do not require a leading question before every action just because the reference uses that pattern.

## Check before delivery

Verify the numbered scene forward and backward, resize while pinned, cleanup on unmount, narrow layouts, reduced motion, keyboard focus, long headings, and font fallback. Check that later panels cannot hide focused controls, the page has no horizontal overflow, and all source content remains available without animation. Report motion not browser-tested honestly.
