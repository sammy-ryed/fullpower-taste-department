---
name: colorful-type-poster
description: Build bold poster-like frontends inspired by Good Glyphs, with enormous lightweight sans-serif headlines, flat two-color surfaces, outlined circular and pill controls, playful glyph specimens, and a working palette-switch button. Use for this requested style, expressive event pages, creative portfolios, or typographic showcases.
---

# Colorful Type Poster

Adapt this visual language to the user's product, content, and existing stack. Do not copy the reference's charity claims, donation flow, contributors, or branding into unrelated projects.

## Resources and precedence

Read [design.md](references/design.md) and [color switching](references/color-switching.md). Inspect the screenshot paths listed in the latter when visual context is available. These skill instructions and the color-switching reference resolve conflicts in the supplied extraction.

Use [token.json](assets/token.json) and [variables.css](assets/variables.css). For an existing Tailwind v4 project, use [theme.css](assets/theme.css); do not require a framework migration. The optional [palette stylesheet](assets/palettes.css) and [palette controller](assets/color-switcher.mjs) implement the user-requested color switching without dependencies. Adapt them to the host framework's lifecycle.

## Composition

- Create a flush-left typographic poster with narrow outer gutters, enormous uppercase lightweight sans-serif headings, and broad flat sections. Let typography establish hierarchy; avoid gradients, shadows, blur, or elevated dashboard panels.
- Default to mint canvas and black ink. Other coordinated color pairs are a defining feature, not violations of the style. A specimen or prompt panel inverts the current canvas and ink; outlines, labels, glyphs, links, and controls all follow the active pair.
- Use Helvetica Neue if available with the supplied system fallbacks. Display weight is 300, readable copy 400. Display size 18rem is a desktop reference, not a fixed size at every viewport: use fluid sizing, e.g. `clamp(3rem, 15vw, 18rem)`, and adjust for heading length. Start display leading at 0.8 but increase it when glyphs collide or wrap. Use -0.03em tracking for fluid display text rather than keeping a fixed large tracking value on a small heading.
- Keep body text readable; use the added 0.875rem body token or increase to 1rem for long prompts. The 0.8125rem caption token is for compact supporting labels. The extracted JSON's inconsistent zero tracking and display weight have been normalized to semantic roles matching these rules.
- Use 0.0625rem borders, 0.875rem card corners, circular compact choices, and long capsule action buttons. Generous circular choices and actions in the screenshots override the extraction's tiny padding when needed for comfortable hit targets. Do not force every input into a capsule.
- Use the 0.25/0.4375/0.875/1.75rem spacing scale and 5.25rem section rhythm. Legacy numeric token names are labels, not standard Tailwind spacing multipliers.
- Showcase panels may be inset and rounded, as in the screenshots, rather than always full-bleed. Keep body paragraphs to a comfortable measure even where headline bands span the screen. Reflow choice rows and card grids on mobile.
- The `good-glyphs` font is for specimens only. No font binary is included. If it is unavailable, use project-supplied monochrome SVG artwork or clearly identified substitutes; never assume a sans-serif fallback can render dingbats or use random UI text as artwork.

## Color-switch button

Include a working, keyboard-accessible `Change colors` button in new full-page implementations and the workshop showcase. Read the implementation reference and reuse the optional assets. A palette change must recolor the entire relevant page or section, including the inverted panel and all interactive states, while retaining content, user input, focus, and scroll position. Do not use arbitrary random RGB values or reinterpret this solely as a light/dark toggle.

For a multi-style workshop page, place palette state and the stylesheet's data attribute on the Good Glyphs section; do not change the surrounding document or other skills. Style starter prompts in the same system but keep their editable/readable content in a normal text font and comfortable size.

## Integration and checks

All packaged dimensional CSS values use rem with the conventional sixteen-pixel conversion base. Leave the browser root font size at its default. Keep line heights unitless and relative percentages/em/viewport units where appropriate. Replace the variables stylesheet's root scope when integrating within one section.

Provide a visible focus outline in the current ink, not an invisible focus state. Meaningful controls require real labels and adequate hit areas. Do not rely on color alone for selection. Avoid color interpolation through low-contrast intermediate colors; the included palette changes are instantaneous and suitable for reduced motion.

Verify each palette in both normal and inverted surfaces, narrow layouts, text zoom, keyboard activation, missing custom fonts, and repeated mounts/unmounts. Confirm no horizontal page overflow and no interference with neighboring themes. If implementing a specimen size slider or shuffle control, keep it separate from palette state unless the user requests combined behavior. State untested browser behavior accurately.
