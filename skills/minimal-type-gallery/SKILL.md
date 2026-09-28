---
name: minimal-type-gallery
description: Create typography-led frontend interfaces inspired by Fonts Ninja, with a white canvas, near-black text, restrained coral actions, rounded specimen cards, and an oversized warped headline. Use when the user requests this style or a minimal type-gallery aesthetic.
---

# Minimal Type Gallery

Build the user's requested interface using this visual language. Preserve their content, framework, and functionality; adapt the design to the product rather than reproducing the Fonts Ninja brand or font marketplace.

## Read and integrate

1. Read [design guidance](references/design.md) and [headline effect](references/warped-headline.md). The corrections and decisions below take precedence over conflicting extracted examples in the reference.
2. Inspect [tokens](assets/token.json). Use [variables.css](assets/variables.css) for ordinary CSS, or [theme.css](assets/theme.css) for an existing Tailwind v4 project. Do not introduce Tailwind solely for this skill.
3. Keep styles scoped to the target section when used in a multi-style gallery. Replace the `:root` selector with the section's scope when integrating the variables there. Do not leak fonts, tokens, or resets into neighboring showcases.

## Visual decisions

- White canvas, near-black content, generous whitespace, and monumental typography carry the composition. Coral is the only chromatic accent, reserved for actions and the decorative headline echo. Do not turn the page into a coral background.
- Use Aeonik only if supplied and licensed for the project; otherwise use an available sans-serif or the system fallback. No font binaries are bundled. Use regular, medium, and bold weights for body, labels, and emphasis.
- The supplied screenshot overrides the extracted sans-serif-only hero description: the display may use a dramatic high-contrast serif while supporting UI remains sans-serif. Use the user's heading, not the original site's wordmark. Inspect [the supplied screenshot](references/warped-headline.png) for the coral echo and distorted slices.
- Include the warped headline for a new landing page or this skill's workshop showcase. For a small component or an existing page without a hero, do not add an unrelated hero; apply the treatment only where a display heading fits the requested scope.
- Cards use a 2rem radius, 1.5rem padding, and the supplied subtle shadow. Links use 1rem radii where a container needs rounding; fully rounded controls use the named pill radius. Do not force every element to share one radius.
- Use the rem dimensions from the packaged assets, unitless line heights, and a responsive display size. Conversion assumes the browser's usual base of sixteen CSS pixels per rem; leave the root font size at the user's default rather than fixing it. Preserve percentages, viewport-relative fluid sizing, and font-relative measures where they express the intended behavior.
- Numeric spacing token names are legacy labels, not Tailwind's usual spacing multiples: `--spacing-24` is 1.5rem. Use explicit variable references if the host project already relies on the default Tailwind scale.

## Resolved source conflicts

- Canvas means the page/card background. Fog is a separate neutral; the shadow's actual tint is rgba(72,72,74,0.16), not Fog.
- Semantic typography entries in token.json are authoritative. The extracted size aliases had inconsistent leading, unresolved `aeonikFont` names, and mostly zero tracking; those have been replaced with entries matching the supplied CSS scale.
- Coral with small white labels and Slate on white are insufficient for normal-text contrast. Prefer Ink labels on coral; use Ink for essential small text and reserve Slate for decoration or appropriately sized text. Check rendered contrast. Coral text links can instead use Ink text with a coral underline/accent.
- The screenshot's coral text echo is a deliberate exception to the extracted prohibition on decorative coral. It is a second rendered layer, not a blurred text shadow.
- `--radius-full` preserves the supplied 4.3125rem measurement; `--radius-pills` is the actual fully rounded control token.

## Responsive behavior and completion

Keep the hero within its own clipping boundary without horizontal page overflow. Scale or wrap long user headings instead of blindly using a fixed display size. Reflow a suitable card collection from three columns to two to one as space requires; do not invent cards for unrelated content.

Keep prompt panels, copy buttons, download links, and navigation readable and keyboard usable in the workshop showcase. Apply the style to those controls, but do not distort prompt text or controls. Provide visible focus, comfortable hit targets, and reduced-motion behavior.

Before finishing, inspect narrow and wide layouts, verify keyboard access and text contrast, and test the effect with motion reduced. Verify that font or animation failure leaves a readable heading. State any untested behavior.
