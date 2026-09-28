<!-- User-supplied extraction normalized to rem. SKILL.md and color-switching.md take precedence over conflicting single-palette or fixed-size advice. -->
# Good Glyphs — Style Reference
> oversized charity poster on mint paper — type so large it behaves as architecture, not text.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Good Glyphs treats the whole page as a printed charity poster: one mint-green canvas, one black ink, and type so large it functions as architecture rather than text. The system is anti-UI — there are no neutral grays, no semantic colors, no shadows, no gradients. A single soft celadon green (#c7ffcd) carries the entire chromatic load while pure black handles every stroke, border, label, and filled element. The signature move is the 18rem display: the brand name itself becomes a graphic object, set tight with negative tracking so the letterforms lock into a wall of ink. Surfaces alternate between full-bleed mint and full-bleed black bands, producing a poster-strip rhythm rather than card-based hierarchy. Everything is built on a 0.25rem base unit with tight 0.4375rem–0.875rem paddings; the only radii are 0.875rem (soft cards) and a fully pill-shaped 8.75rem for all interactive controls. Components feel stamped rather than designed: borders are always solid 0.0625rem black, text is always 0.8125rem–0.875rem, and the only moment of color contrast is white-on-black glyph artwork inside the dark showcase band.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Pledge Mint | `#c7ffcd` | `--color-pledge-mint` | Page canvas, full-bleed section backgrounds, the site's only color. Washes the entire light theme |
| Ink Black | `#000000` | `--color-ink-black` | All text, all borders, all filled elements, icon strokes, footer background, the black showcase band. The structural dark |
| Carbon | `#101010` | `--color-carbon` | Input field borders and input text — functionally identical to Ink Black, kept as a token for form-state flexibility |

## Tokens — Typography

### Helvetica Neue — Primary typeface for everything readable. Weight 300 carries the massive 18rem display headlines — the light weight at extreme size lets the letters breathe inside the locked -0.03em tracking. Weight 400 handles body copy at 0.8125rem–0.875rem and short uppercase labels. 1.75rem serves as a mid-tier subhead. The 0.80 line-height on the display is critical: it stacks the giant letters tight enough to read as a single graphic block. · `--font-helvetica-neue`
- **Substitute:** Inter, Neue Haas Grotesk, or system-ui sans
- **Weights:** 300, 400
- **Sizes:** 0.8125rem, 0.875rem, 1.75rem, 18rem
- **Line height:** 0.80 (display) / 1.20 (subhead) / 1.50 (body)
- **Letter spacing:** -0.0300em across all sizes; display at 18rem reads as tight poster type rather than display tracking
- **OpenType features:** `none`
- **Role:** Primary typeface for everything readable. Weight 300 carries the massive 18rem display headlines — the light weight at extreme size lets the letters breathe inside the locked -0.03em tracking. Weight 400 handles body copy at 0.8125rem–0.875rem and short uppercase labels. 1.75rem serves as a mid-tier subhead. The 0.80 line-height on the display is critical: it stacks the giant letters tight enough to read as a single graphic block.

### good-glyphs — The actual product — the dingbat glyphs themselves rendered at full display scale. Only ever appears inside the black showcase band as proof that the font works at intended size. Not used for UI text. · `--font-good-glyphs`
- **Substitute:** Custom / project asset — no substitute
- **Weights:** 400
- **Sizes:** 18rem
- **Line height:** 1.00, 1.20
- **Letter spacing:** normal
- **OpenType features:** `none`
- **Role:** The actual product — the dingbat glyphs themselves rendered at full display scale. Only ever appears inside the black showcase band as proof that the font works at intended size. Not used for UI text.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 0.8125rem | 1.5 | -0.024375rem | `--text-caption` |
| subheading | — | — | 1.75rem | 1.2 | -0.0525rem | `--text-subheading` |
| display | — | — | 18rem | 0.8 | -0.54rem | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 0.25rem

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 0.25rem | `--spacing-4` |
| 7 | 0.4375rem | `--spacing-7` |
| 14 | 0.875rem | `--spacing-14` |
| 28 | 1.75rem | `--spacing-28` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 0.875rem |
| buttons | 8.75rem |

### Layout

- **Section gap:** 5.25rem
- **Card padding:** 0.875rem
- **Element gap:** 0.4375rem

## Components

### Display Headline
**Role:** The site's defining typographic moment — the project name rendered as a graphic wall.

Helvetica Neue weight 300 at 18rem, line-height 0.80, letter-spacing -0.0300em (-0.54rem). Pure black on Pledge Mint. Uppercase. The letters are so large the line-height compresses them into a single dense block. Never use weight 700 — the system insists on light-weight display at scale.

### Pill Donation Button
**Role:** Quick-select amount chips for the donation flow.

Fully pill-shaped at 8.75rem border-radius. 0.0625rem black border on transparent background over the mint canvas. Helvetica Neue weight 400, 0.875rem, -0.02625rem tracking. Padding 0.25rem 0.4375rem. On hover/active the chip fills solid black with mint text. The pill geometry is absolute — no squared or rounded-rect variants exist.

### Pill Action Button (Large)
**Role:** The primary DONATE & DOWNLOAD call to action.

Same 8.75rem pill radius as donation chips, scaled up with generous horizontal padding. Black 0.0625rem border on mint background, text is weight 400, ~0.875rem uppercase, tracking -0.02625rem. The button stretches nearly full-width inside its container to read as a poster strip rather than a UI control.

### Contributor Card
**Role:** Grid card showing one designer's name and their submitted glyph.

Mint canvas with 0.0625rem black border and 0.875rem corner radius. Padding 0.875rem. Designer name sits in the top-left at 0.875rem weight 400 black, with a small letter chip (the designer's initial in a tiny black square) to the right. Glyph artwork fills the card body. Cards sit in a 3-column grid with 0.875rem–1.75rem gutters.

### Black Showcase Band
**Role:** Full-width dark section displaying the custom dingbat font at use size.

Pure black (#000000) full-bleed background spanning the viewport width. A horizontal row of glyph characters rendered in the custom good-glyphs font at ~18rem. The glyphs appear in the same Pledge Mint as the rest of the palette — the only color-on-black moment in the system. A small expand/collapse control sits flush-right in the top corner.

### Body Paragraph Block
**Role:** Explanatory copy beneath the headline and donation controls.

Black text on Pledge Mint. Helvetica Neue weight 400, 0.875rem, line-height 1.50, tracking -0.02625rem. Max width not constrained — the text runs naturally across the full canvas width. Links inherit black with a black underline (no blue, no chromatic accent).

### Section Heading (Mid-tier)
**Role:** Sub-section labels like 'CONTRIBUTORS'.

Helvetica Neue weight 300, 1.75rem, line-height 1.20, tracking -0.0525rem. Uppercase. Black on Pledge Mint. Visually the smallest headline tier; the system jumps from 1.75rem straight to 18rem with nothing in between.

### Form Input
**Role:** Custom-amount entry field beside the donation chips.

Transparent background, 0.0625rem Carbon (#101010) border, 0.875rem radius. Padding 0.25rem 0.4375rem. Helvetica Neue weight 400 at 0.8125rem–0.875rem, black text. No focus ring color change — the system has no color to spend on focus states. Functions as a quiet inline form element.

## Do's and Don'ts

### Do
- Set the primary display at 18rem / weight 300 / line-height 0.80 / tracking -0.54rem — the size IS the identity
- Use 0.0625rem black borders with 0.875rem radius for cards and 8.75rem (full pill) for every interactive control
- Alternate full-bleed bands of #c7ffcd and #000000 to produce poster-strip rhythm
- Hold all body and label text at 0.8125rem–0.875rem Helvetica Neue weight 400, tracking -0.0300em
- Use 0.25rem as the base spacing unit; paddings should land on 0.25, 0.4375, 0.875, or 1.75rem
- Render any glyph artwork in Pledge Mint on the black band — it is the only color-on-color moment allowed
- Let the section gap breathe at 5.25rem between major bands — enough space to read each poster as separate

### Don't
- Never introduce a second chromatic color — no semantic reds, greens, blues, or grays
- Never use weight 700 for display — the system insists on light-weight headlines at extreme scale
- Never add drop shadows, gradients, or blurs — flatness is the contract
- Never break the pill geometry on buttons — no rounded-rect, no sharp corners, no 0.5rem radius
- Never use the custom good-glyphs font for UI text — it is product showcase only
- Never set the canvas to white or off-white — Pledge Mint is the only acceptable light surface
- Never add a chromatic focus or hover color — state changes happen by fill inversion (mint→black, black→mint) only

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Pledge Mint Canvas | `#c7ffcd` | Base page background, all light sections, the default surface for cards and buttons |
| 2 | Ink Black Band | `#000000` | Full-bleed dark section for showcasing the glyph font — the only non-mint surface |

## Elevation

The system has no elevation. No drop shadows, no glows, no lifted surfaces. Hierarchy is produced entirely by scale (18rem vs 0.875rem), by band alternation (mint → black → mint), and by border weight (0.0625rem black strokes). Components sit flat on the canvas; depth would dilute the poster-strip reading.

## Imagery

No photography, no illustration beyond the product itself. The 'imagery' IS the custom good-glyphs font rendered at 18rem inside the black showcase band, and the hand-drawn dingbat glyphs in each contributor card. Everything is monochrome line art on flat color — the design system treats the typography as the only visual asset the page needs.

## Layout

Full-bleed sections with no max-width container — the page runs edge-to-edge as printed posters would. The hero is a single massive 18rem headline stacked over a short uppercase descriptor, both flush-left, with no centered alignment. Below the hero sits a black showcase band spanning the full viewport width holding the glyph proof. Donation controls form a horizontal row of pill chips followed by a full-width pill action button. The contributor section is a 3-column card grid with 0.875rem–1.75rem gutters. Navigation is minimal — a single flush-right project credit link in the hero's top-right corner. The overall rhythm is band-driven: mint, black, mint, with each band acting as an independent printed sheet rather than a continuous scroll.

## Agent Prompt Guide

**Quick Color Reference**
- text: #000000 (Ink Black)
- background: #c7ffcd (Pledge Mint)
- border: #000000 (Ink Black, 0.0625rem)
- accent: #c7ffcd (Pledge Mint — used as mint-on-black inside the dark showcase band)
- primary action: #c7ffcd (filled action)

**Example Component Prompts**
1. Build a hero headline: 'GOOD GLYPHS' in Helvetica Neue weight 300, 18rem, line-height 0.80, letter-spacing -0.54rem, uppercase, color #000000, on a #c7ffcd canvas.
2. Build a contributor card: 0.0625rem #000000 border, 0.875rem radius, padding 0.875rem, with the designer's name in 0.875rem weight 400 #000000 top-left and their glyph artwork filling the card body on a #c7ffcd background.
3. Build a donation amount chip: 8.75rem border-radius, 0.0625rem #000000 border on transparent over #c7ffcd, 0.875rem weight 400 black text, padding 0.25rem 0.4375rem, tracking -0.02625rem.
4. Build a full-width action button: 8.75rem radius, 0.0625rem #000000 border, #c7ffcd background, uppercase 0.875rem weight 400 black text, tracking -0.02625rem, padding 0.4375rem 0.875rem, stretching to nearly full container width.
5. Build a black showcase band: full-bleed #000000 background spanning viewport width, with a horizontal row of custom dingbat glyphs at 18rem rendered in #c7ffcd.

## Similar Brands

- **Pinterest Brand Pages** — Same oversized display type on a single soft tinted canvas with full-bleed section bands
- **Field Notes (fieldnotesbrand.com)** — Printed-poster aesthetic: one accent color, flat black ink, tight letter-spacing, pill controls, zero shadows
- **It's Nice That** — Editorial charity-poster treatment — giant display type, tight tracking, two-color palette, no UI chrome
- **Locomotive (locomotive.ca)** — Full-bleed band layouts with no max-width container and type pushed to architectural scale

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-pledge-mint: #c7ffcd;
  --color-ink-black: #000000;
  --color-carbon: #101010;

  /* Typography — Font Families */
  --font-helvetica-neue: 'Helvetica Neue', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-good-glyphs: 'good-glyphs', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 0.8125rem;
  --leading-caption: 1.5;
  --tracking-caption: -0.024375rem;
  --text-subheading: 1.75rem;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.0525rem;
  --text-display: 18rem;
  --leading-display: 0.8;
  --tracking-display: -0.54rem;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;

  /* Spacing */
  --spacing-unit: 0.25rem;
  --spacing-4: 0.25rem;
  --spacing-7: 0.4375rem;
  --spacing-14: 0.875rem;
  --spacing-28: 1.75rem;

  /* Layout */
  --section-gap: 5.25rem;
  --card-padding: 0.875rem;
  --element-gap: 0.4375rem;

  /* Border Radius */
  --radius-xl: 0.875rem;
  --radius-full: 8.75rem;

  /* Named Radii */
  --radius-cards: 0.875rem;
  --radius-buttons: 8.75rem;

  /* Surfaces */
  --surface-pledge-mint-canvas: #c7ffcd;
  --surface-ink-black-band: #000000;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-pledge-mint: #c7ffcd;
  --color-ink-black: #000000;
  --color-carbon: #101010;

  /* Typography */
  --font-helvetica-neue: 'Helvetica Neue', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-good-glyphs: 'good-glyphs', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 0.8125rem;
  --leading-caption: 1.5;
  --tracking-caption: -0.024375rem;
  --text-subheading: 1.75rem;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.0525rem;
  --text-display: 18rem;
  --leading-display: 0.8;
  --tracking-display: -0.54rem;

  /* Spacing */
  --spacing-4: 0.25rem;
  --spacing-7: 0.4375rem;
  --spacing-14: 0.875rem;
  --spacing-28: 1.75rem;

  /* Border Radius */
  --radius-xl: 0.875rem;
  --radius-full: 8.75rem;
}
```
