---
name: cute-retro-pastels
description: Build cute retro-inspired frontends with warm cream backgrounds, forest-teal text, rounded expressive serif headings, pastel identity cards, circular imagery, pill controls, and gentle interactions. Use when the user requests OLIPOP style, a nostalgic soda-fountain aesthetic, or a soft and playful product or workshop page.
---

# Cute Retro Pastels

Keep this style cute, warm, and approachable. Use round forms, friendly retro lettering, and restrained pastel combinations. Adapt the design to the user's content and existing framework; do not copy OLIPOP branding, product claims, prices, reviews, or ecommerce features into unrelated projects.

## Resources

Read [design.md](references/design.md) and [cute art direction](references/cute-direction.md). Use [variables.css](assets/variables.css) and [token.json](assets/token.json); [theme.css](assets/theme.css) supports existing Tailwind v4 projects. These instructions and the cute-direction reference take precedence over conflicting extracted rules.

The JSON preserves measured typography variants and adds `semanticTypography` matching the supplied CSS scale. Use the semantic roles for new work. The package contains no proprietary font binaries or product imagery.

## Visual identity

- Use warm Cream Paper (#fdf7e7) as the main canvas, Forest Ink (#14433d) for headings and primary controls, and Charcoal (#3a3a3a) for body text. Mint Sage (#d3e8e3) is a soft hero or feature surface.
- Use a plump, expressive retro serif for prominent headings and names. WindsorEF is preferred when available and licensed; the corrected CSS falls back to Cooper Black and Georgia rather than a generic sans-serif. Fallbacks need visual tuning and are not exact matches. Ano or an available friendly sans-serif handles paragraphs, forms, navigation, and button labels.
- Keep rounded shapes purposeful: 1rem cards, 1.5rem hero panels, 3.125rem pill buttons/inputs, and true 50% circles for illustration or product medallions. Circles decorate or frame imagery; paragraphs stay in readable rectangular areas.
- Assign a stable pastel identity to each featured item: banana cream, apple pink, grape lavender, cola peach, or lime. Apply those colors to item surfaces, not every navigation element. For non-product content, map them to the user's categories or ideas without inventing soda flavors.
- Give the hero one charming visual, a short inviting headline, a readable explanation, and a clear primary action. Use generous cream space so the page feels calm and sweet. Center short section headings, but left-align long body or prompt copy.
- Prefer flat surfaces. The supplied subtle 1.5rem-blur shadow is optional on a primary CTA only; avoid applying elevation to every card.

## Cute details and behavior

Use small, original illustrative details such as a pair of cherries, a scalloped badge, a tiny flower, or a restrained sparkle where appropriate. Pick a coherent motif rather than covering the page in unrelated stickers. Follow the art-direction reference for gentle hover and entry motion. CSS transitions are sufficient; GSAP is not required for this style.

Use soft illustration or relevant product imagery with an uncluttered pastel setting. Keep subjects visible when cropped into circles. Do not require an image generator or download reference-site assets to complete the design; use provided images, licensed project assets, or simple original SVG decorations as appropriate.

In the workshop gallery, theme only the OLIPOP section and its controls. Present the starter prompt as a cream or mint rounded note with a small pastel badge and clear copy action. Keep prompt text selectable, readable, and in the sans-serif face. Download and open actions should remain unmistakable buttons.

## Corrections and units

- Forest Ink is the primary CTA fill, with white text. This resolves contradictory source rows describing it as decorative-only. Bright Teal may be a secondary fill with Forest Ink labels; do not use white labels on it without checking contrast.
- The invalid CSS layout ranges are repaired as `--section-gap: clamp(2.5rem, 4vw, 4rem)` and `--element-gap: clamp(0.5rem, 1vw, 1rem)`. The reference prose still describes the ranges; executable CSS uses valid functions.
- All pixel dimensions are converted to rem using the conventional sixteen-pixel base. Keep root font size at the browser default. Preserve percentages for circles, unitless leading, and fluid viewport units where appropriate. Numeric spacing names retain source labels, not Tailwind's usual multiplier meanings.
- Display 5rem and display-sm 4.5rem are desktop references. Use fluid sizes, e.g. `clamp(2.5rem, 6vw, 5rem)`, adjusting for wrapping and actual font metrics. Long copy uses the 1rem body-sm role and 1.67 leading.
- The micro role is supporting metadata, not the default navigation size. Do not force the source's tiny announcement-bar padding onto a wrapped or interactive notice.
- Ratings, reviews, promotional claims, sale badges, subscriptions, and health benefits require actual user-provided content. Omit them from a generic style demo rather than inventing them for visual completeness.
- Hairline Gray can separate decorative surfaces but may be too faint as a form boundary. Use Forest Ink or Fountain Teal for visible input/focus boundaries and verify against the actual background.

## Completion checks

Verify narrow and wide layouts, real font fallback, heading wraps, text zoom, keyboard navigation, contrast on each pastel surface, and reduced motion. If using a carousel, provide native scroll or previous/next controls, support keyboard and touch, and do not auto-advance essential reading content. Ensure all forms/actions function or are clearly labeled demonstrations. The result should feel cute through typography, color, and shape even with animation disabled. Report anything not visually tested.
