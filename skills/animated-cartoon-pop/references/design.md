<!-- User-supplied extraction converted to rem. SKILL.md and motion/color guides override fixed-stage, tiny-text, and conflicting CTA rules. -->
# Flying Papers — Style Reference
> Saturday morning cartoon confessional

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Flying Papers operates like a Saturday-morning cartoon printed on thick riso cardstock: a flat muted-violet stage, a small cast of saturated confetti colors, and type so oversized it eats the viewport. The brand voice is loud, cheeky, and unrepentant — it doesn't ask for attention, it takes it. Every screen should feel like a single bold poster: one dominant display headline, one supporting character illustration, one inline action, and generous breathing room. Borders do the heavy lifting instead of shadows; color is used as paint, not data. Surfaces stay flat, edges stay sharp at 0.375rem, and the only soft thing in the system is the 6.25rem pill on the gate button.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Dusk Violet | `#8584bd` | `--color-dusk-violet` | Primary canvas and hero background — the stage that every other color performs on |
| Hi-Vis Yellow | `#f4ed36` | `--color-hi-vis-yellow` | Yellow accent for outlined action borders, linked labels, and lightweight interactive emphasis. Do not promote it to the primary CTA color |
| Buttery Yellow | `#f9cc73` | `--color-buttery-yellow` | Secondary display text and softer borders — a mellower sibling of Hi-Vis for when Hi-Vis would be too much |
| Lilac Shadow | `#61609a` | `--color-lilac-shadow` | Card and block backgrounds — a deeper violet for nested surfaces on the violet stage |
| Bubblegum Pink | `#f8c1ba` | `--color-bubblegum-pink` | Decorative borders and confetti accent — a warm pink used sparingly for pop |
| Matcha Cream | `#b5c995` | `--color-matcha-cream` | Decorative borders and confetti accent — a dusty sage for the secondary cast of cards |
| Magenta Punch | `#ac4f98` | `--color-magenta-punch` | Accent card surface — reserved for standout blocks that need to scream louder than the stage |
| Firecracker Red | `#c94245` | `--color-firecracker-red` | Red wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Bone White | `#f9f5f2` | `--color-bone-white` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Ink Black | `#1a1a1a` | `--color-ink-black` | Body text, primary borders, and outlined button strokes — the near-black that does typographic work on cream surfaces |
| Pure Black | `#000000` | `--color-pure-black` | Hard borders, icons, and text on yellow surfaces — pure black where maximum edge contrast is needed |

## Tokens — Typography

### ObviouslyVariable — Display and large heading family — the only font loud enough for the system. Sizes scale from 1.125rem body uses up to 21.3125rem poster-scale display. Tight 0.80–1.00 leading makes multi-line headlines stack into solid color blocks; calt is disabled so the wide geometric forms stay unornamented. Substitute: Founders Grotesk Condensed, Knockout, or Druk Wide. · `--font-obviouslyvariable`
- **Substitute:** Founders Grotesk Condensed
- **Weights:** 800, 900
- **Sizes:** 1.125rem, 1.25rem, 1.875rem, 6.25rem, 7.0625rem, 8.125rem, 8.3125rem, 9.3125rem, 11.5rem, 15.0625rem, 15.25rem, 21.3125rem
- **Line height:** 0.80–1.00
- **Letter spacing:** 0.02em
- **OpenType features:** `"calt" 0`
- **Role:** Display and large heading family — the only font loud enough for the system. Sizes scale from 1.125rem body uses up to 21.3125rem poster-scale display. Tight 0.80–1.00 leading makes multi-line headlines stack into solid color blocks; calt is disabled so the wide geometric forms stay unornamented. Substitute: Founders Grotesk Condensed, Knockout, or Druk Wide.

### DegularVariable — Ultra-small UI text — nav, footer micro-copy, and inline labels at 0.625rem. The neutral workhorse that disappears next to the display voice. Substitute: Inter, IBM Plex Sans. · `--font-degularvariable`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 0.625rem
- **Line height:** 1.00
- **Letter spacing:** normal
- **Role:** Ultra-small UI text — nav, footer micro-copy, and inline labels at 0.625rem. The neutral workhorse that disappears next to the display voice. Substitute: Inter, IBM Plex Sans.

### bergen_monoregular — Monospaced micro-type for nav, tags, and small data labels — provides a typewriter rhythm against the rounded display. The 0.80 leading on monospace is signature: mono stacked tight feels like a receipt. Substitute: JetBrains Mono, IBM Plex Mono. · `--font-bergenmonoregular`
- **Substitute:** JetBrains Mono
- **Weights:** 400, 600
- **Sizes:** 0.75rem, 0.875rem
- **Line height:** 0.80, 1.00
- **Letter spacing:** normal
- **OpenType features:** `"calt" 0`
- **Role:** Monospaced micro-type for nav, tags, and small data labels — provides a typewriter rhythm against the rounded display. The 0.80 leading on monospace is signature: mono stacked tight feels like a receipt. Substitute: JetBrains Mono, IBM Plex Mono.

### DegularDisplay-Bold — Small bold body text for CTAs, button labels, and emphasized micro-copy. The 0.05em tracking opens the letterforms enough to read at 1rem without crowding. Substitute: Degular Bold, Söhne Bold. · `--font-degulardisplay-bold`
- **Substitute:** Söhne Bold
- **Weights:** 700
- **Sizes:** 1rem
- **Line height:** 1.00
- **Letter spacing:** 0.05em
- **Role:** Small bold body text for CTAs, button labels, and emphasized micro-copy. The 0.05em tracking opens the letterforms enough to read at 1rem without crowding. Substitute: Degular Bold, Söhne Bold.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 0.625rem | 1 | 0rem | `--text-caption` |
| body | — | — | 1rem | 1 | 0.05rem | `--text-body` |
| body-lg | — | — | 1.125rem | 0.9 | 0.0225rem | `--text-body-lg` |
| subheading | — | — | 1.875rem | 0.9 | 0.0375rem | `--text-subheading` |
| heading-sm | — | — | 6.25rem | 0.9 | 0.125rem | `--text-heading-sm` |
| heading | — | — | 9.3125rem | 0.85 | 0.18625rem | `--text-heading` |
| heading-lg | — | — | 11.5rem | 0.85 | 0.23rem | `--text-heading-lg` |
| display | — | — | 21.3125rem | 0.8 | 0.42625rem | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 0.25rem

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 16 | 1rem | `--spacing-16` |
| 20 | 1.25rem | `--spacing-20` |
| 40 | 2.5rem | `--spacing-40` |
| 60 | 3.75rem | `--spacing-60` |
| 80 | 5rem | `--spacing-80` |
| 160 | 10rem | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 6.25rem |
| cards | 0.375rem |
| buttons | 6.25rem |

### Layout

- **Section gap:** 2.5rem
- **Card padding:** 1.0625rem
- **Element gap:** 1.0625rem

## Components

### Gate Pill Button
**Role:** Primary age-gate / entry action

The system's only primary action. Cream (#f9f5f2) fill, 6.25rem border-radius, 1.0625rem horizontal padding, DegularDisplay-Bold 1rem / 0.05em tracking in Pure Black (#000000). No drop shadow; the rounded pill shape and high contrast against the violet stage do all the work.

### Outlined Display Button
**Role:** Secondary action placed on hero surfaces

Transparent fill with a 0.125rem–0.1875rem Hi-Vis Yellow (#f4ed36) border. Hi-Vis Yellow text, DegularDisplay-Bold 1rem, 1.0625rem horizontal padding, 6.25rem radius. The border does the job of a fill — this is a chromatic outlined action, not a filled CTA.

### Underline Text Link
**Role:** Tertiary action (e.g. age-decline link)

Bone White (#f9f5f2) on the violet stage, no background, 0.0625rem underline. Bergen Mono 0.75rem / 0.80 leading. Letter-spaced wide enough to feel like a disclaimer, not a button.

### Hero Display Headline
**Role:** Main page statement

ObviouslyVariable 800–900 at 11.5rem–21.3125rem, line-height 0.80–0.85, tracking 0.02em. Color alternates between Hi-Vis Yellow (#f4ed36) and Buttery Yellow (#f9cc73). Sized to fill 60–80% of viewport height. No max-width — type bleeds to the canvas edges.

### Brand Wordmark
**Role:** Site identification in nav

ObviouslyVariable 800 in Hi-Vis Yellow, 1.875rem, centered above the hero. Acts as a single-line logo — the brand name IS the mark, no separate logotype.

### Mascot Illustration
**Role:** Character that accompanies the headline

Cartoon character with thick black outlines, cream fill, and flat color accents (Bone White, Hi-Vis Yellow). Renders behind or peeks through the display headline at viewport scale. No gradients, no shading — flat 2–3 color fills only.

### Confetti Card
**Role:** Decorative content blocks scattered across the page

Square or rectangular cards in one of the accent surface colors (Matcha Cream #b5c995, Bubblegum Pink #f8c1ba, Magenta Punch #ac4f98, Firecracker Red #c94245). 0.375rem radius, 1.0625rem padding, no shadow, no border. Each card is a flat paint swatch — the color IS the content.

### Dark Text Card
**Role:** Text-heavy or information blocks

Bone White (#f9f5f2) fill, 0.375rem radius, 1.0625rem padding, Ink Black (#1a1a1a) text. 0.0625rem Ink Black border optional. Uses DegularVariable or bergen_mono for body.

### Color Swatch Card
**Role:** Brand palette showcase

Solid fill in one of the brand or accent colors, 0.375rem radius, 1.0625rem padding, with the color name and hex set in DegularDisplay-Bold 1rem. Acts as both decoration and legend.

### Top Nav Bar
**Role:** Minimal site navigation

Transparent on the violet stage. Brand wordmark centered, no menu items visible at the hero. 1.0625rem padding top/bottom, 0.0625rem bottom border in Dusk Violet (#8584bd) or transparent.

### Mono Label Tag
**Role:** Category, date, or metadata tag

Bergen Mono 0.75rem / 0.80 leading, no fill, optional 0.0625rem border in current text color. Letter-spaced 0.05em. Reads as a stamped label rather than a pill button.

### Footer Block
**Role:** End-of-page content

Solid block — often a brand or accent color (e.g. #375027 dark green observed). Bergen Mono 0.75rem, Bone White text, 1.0625rem–1.5625rem padding. No decorative borders.

## Do's and Don'ts

### Do
- Set hero display type between 11.5rem and 21.3125rem in ObviouslyVariable 800–900, line-height 0.80–0.85, tracking 0.02em
- Use Hi-Vis Yellow (#f4ed36) as the only outlined action border; pair it with the Outlined Display Button pattern, never a filled button
- Stack one huge headline, one mascot illustration, and one inline action per screen — let the rest breathe
- Keep radii at exactly 0.375rem for cards and 6.25rem for buttons/tags — the contrast between sharp blocks and soft pills is the signature
- Place cards on the violet stage with 1.0625rem padding and no shadows; let the flat color fills do the visual work
- Use the accent palette (Bubblegum Pink, Matcha Cream, Magenta Punch, Firecracker Red) one card at a time, never side by side in the same row
- Set micro-copy in Bergen Mono at 0.75rem with 0.80 leading — the tight mono stack is the receipts-on-cardstock texture

### Don't
- Don't introduce a filled CTA button — the system uses outlined Hi-Vis Yellow actions and pill cream buttons only
- Don't use ObviouslyVariable below 1.125rem or above 21.3125rem — outside that range it loses its poster impact
- Don't add drop shadows, glow effects, or inner shadows — every surface is flat paint
- Don't combine more than two accent colors in a single composition — confetti is scattered, not confetti-confetti
- Don't soften the violet canvas with a white or cream page background — Dusk Violet (#8584bd) is the stage, not a section accent
- Don't round card corners past 0.375rem — anything softer makes the system feel SaaS, not riso
- Don't use ObviouslyVariable's contextual alternates — calt is disabled everywhere to keep the wide geometric forms unornamented

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Dusk Violet Stage | `#8584bd` | Full-bleed page canvas and hero background |
| 1 | Bone White Card | `#f9f5f2` | Light card and button surface on the violet stage |
| 2 | Lilac Shadow Block | `#61609a` | Nested surface for content blocks sitting on the violet stage |
| 3 | Hi-Vis Yellow Surface | `#f4ed36` | Accent surface for the most important element on a given screen |
| 4 | Accent Paint Card | `#f8c1ba` | Decorative confetti card surface (alternates: #b5c995, #ac4f98, #c94245) |

## Elevation

Elevation is intentionally absent. The system is flat risograph: depth comes from color contrast and stacking order, never from shadows. A 0.375rem card on the violet stage reads as a printed swatch, not a floating panel.

## Imagery

Illustration-only — no photography, no 3D renders, no abstract gradients. The visual language is hand-drawn cartoon with thick black outlines (0.125rem–0.1875rem), flat 2–3 color fills, and no shading. Characters are mascots that interact with the type (peeking, leaning, standing on a letter). Icons are line-drawn in Pure Black or Bone White, 0.09375rem–0.125rem stroke. Imagery is decorative atmosphere first, never explanatory — the type carries the message, the character carries the mood.

## Layout

Full-bleed poster layouts with no max-width constraint. Each screen is a single viewport-sized composition: one massive ObviouslyVariable headline centered or left-aligned, one mascot illustration overlapping the type, and a small inline action below. Sections do not alternate light and dark — the entire page sits on the Dusk Violet canvas with flat color cards dropped on top. Navigation is a single centered wordmark, no menu bar. Card grids are loose 2–3 column arrangements with generous 2.5rem gaps; cards are sized by content, not uniform. Density is extreme: one idea per screen, surrounded by violet breathing room.

## Agent Prompt Guide

**Quick Color Reference**
- text on light: #1a1a1a
- text on yellow: #000000
- reverse text on violet: #f9f5f2
- background: #8584bd (Dusk Violet)
- card surface: #f9f5f2 (Bone White)
- accent: #f4ed36 (Hi-Vis Yellow) for the single most important element
- primary action: #f4ed36 (outlined action border)

**3 Example Component Prompts**

1. **Hero screen with mascot**: Full-bleed Dusk Violet (#8584bd) background. Centered brand wordmark 'Flying Papers' in ObviouslyVariable 800 at 1.875rem, #f4ed36, top of viewport. Main headline at 15.25rem ObviouslyVariable 900, line-height 0.82, letter-spacing 0.02em, fill #f4ed36 (alternating with #f9cc73 per word). A cartoon mascot illustration with 0.125rem black outlines and flat fills, positioned to peek through the type near the vertical center. Below the headline, an Outlined Display Button: transparent fill, 0.125rem #f4ed36 border, 6.25rem radius, 1.0625rem horizontal padding, 'I'M OVER 18, LET ME IN' in DegularDisplay-Bold 1rem, #f4ed36. Underneath, an Underline Text Link in #f9f5f2, Bergen Mono 0.75rem, 0.80 leading, 0.0625rem underline.

2. **Confetti card grid section**: Dusk Violet (#8584bd) background continuing from hero. A loose 3-column grid of Confetti Cards with 2.5rem gaps. Each card: solid fill in one of #f8c1ba, #b5c995, #ac4f98, or #c94245; 0.375rem radius; 1.0625rem padding; no border, no shadow. Inside each card, a Mono Label Tag in Bergen Mono 0.75rem / 0.80 leading, 0.05em tracking, in #1a1a1a or #f9f5f2 depending on card brightness, and a short body line in DegularVariable 1rem.

3. **Color swatch legend block**: Bone White (#f9f5f2) card, 0.375rem radius, 1.0625rem padding, sitting on the violet stage. Heading 'PALETTE' in DegularDisplay-Bold 1rem, 0.05em tracking, #1a1a1a. Below it, a 2-row grid of Color Swatch Cards — each a 0.375rem-radius square filled with one brand or accent color, with the hex value set in Bergen Mono 0.75rem / 0.80 leading directly on the swatch in contrasting text.

## Similar Brands

- **Bumble** — Same fearless use of a single saturated yellow against a flat colored stage, with oversized rounded display type and pill-shaped actions
- **Skittles / candy brand microsites** — Confetti-bright accent palette scattered across a dominant canvas color, cartoon character mascots, and poster-scale headline type
- **Kakao Entertainment** — Heavy condensed display type at viewport scale, flat colored surfaces, and characters that break through the type
- **Dazed Magazine** — Riso-print aesthetic with loud display headlines, tight leading, and a limited but confident chromatic palette on a single stage color
- **Telfar** — Anti-corporate flat colored backgrounds, oversized custom display type, and pill buttons with bold black-on-cream contrast

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-dusk-violet: #8584bd;
  --color-hi-vis-yellow: #f4ed36;
  --color-buttery-yellow: #f9cc73;
  --color-lilac-shadow: #61609a;
  --color-bubblegum-pink: #f8c1ba;
  --color-matcha-cream: #b5c995;
  --color-magenta-punch: #ac4f98;
  --color-firecracker-red: #c94245;
  --color-bone-white: #f9f5f2;
  --color-ink-black: #1a1a1a;
  --color-pure-black: #000000;

  /* Typography — Font Families */
  --font-obviouslyvariable: 'ObviouslyVariable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-degularvariable: 'DegularVariable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-bergenmonoregular: 'bergen_monoregular', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-degulardisplay-bold: 'DegularDisplay-Bold', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 0.625rem;
  --leading-caption: 1;
  --tracking-caption: 0rem;
  --text-body: 1rem;
  --leading-body: 1;
  --tracking-body: 0.05rem;
  --text-body-lg: 1.125rem;
  --leading-body-lg: 0.9;
  --tracking-body-lg: 0.0225rem;
  --text-subheading: 1.875rem;
  --leading-subheading: 0.9;
  --tracking-subheading: 0.0375rem;
  --text-heading-sm: 6.25rem;
  --leading-heading-sm: 0.9;
  --tracking-heading-sm: 0.125rem;
  --text-heading: 9.3125rem;
  --leading-heading: 0.85;
  --tracking-heading: 0.18625rem;
  --text-heading-lg: 11.5rem;
  --leading-heading-lg: 0.85;
  --tracking-heading-lg: 0.23rem;
  --text-display: 21.3125rem;
  --leading-display: 0.8;
  --tracking-display: 0.42625rem;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  /* Spacing */
  --spacing-unit: 0.25rem;
  --spacing-16: 1rem;
  --spacing-20: 1.25rem;
  --spacing-40: 2.5rem;
  --spacing-60: 3.75rem;
  --spacing-80: 5rem;
  --spacing-160: 10rem;

  /* Layout */
  --section-gap: 2.5rem;
  --card-padding: 1.0625rem;
  --element-gap: 1.0625rem;

  /* Border Radius */
  --radius-md: 0.375rem;
  --radius-full: 6.25rem;

  /* Named Radii */
  --radius-tags: 6.25rem;
  --radius-cards: 0.375rem;
  --radius-buttons: 6.25rem;

  /* Surfaces */
  --surface-dusk-violet-stage: #8584bd;
  --surface-bone-white-card: #f9f5f2;
  --surface-lilac-shadow-block: #61609a;
  --surface-hi-vis-yellow-surface: #f4ed36;
  --surface-accent-paint-card: #f8c1ba;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-dusk-violet: #8584bd;
  --color-hi-vis-yellow: #f4ed36;
  --color-buttery-yellow: #f9cc73;
  --color-lilac-shadow: #61609a;
  --color-bubblegum-pink: #f8c1ba;
  --color-matcha-cream: #b5c995;
  --color-magenta-punch: #ac4f98;
  --color-firecracker-red: #c94245;
  --color-bone-white: #f9f5f2;
  --color-ink-black: #1a1a1a;
  --color-pure-black: #000000;

  /* Typography */
  --font-obviouslyvariable: 'ObviouslyVariable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-degularvariable: 'DegularVariable', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-bergenmonoregular: 'bergen_monoregular', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-degulardisplay-bold: 'DegularDisplay-Bold', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 0.625rem;
  --leading-caption: 1;
  --tracking-caption: 0rem;
  --text-body: 1rem;
  --leading-body: 1;
  --tracking-body: 0.05rem;
  --text-body-lg: 1.125rem;
  --leading-body-lg: 0.9;
  --tracking-body-lg: 0.0225rem;
  --text-subheading: 1.875rem;
  --leading-subheading: 0.9;
  --tracking-subheading: 0.0375rem;
  --text-heading-sm: 6.25rem;
  --leading-heading-sm: 0.9;
  --tracking-heading-sm: 0.125rem;
  --text-heading: 9.3125rem;
  --leading-heading: 0.85;
  --tracking-heading: 0.18625rem;
  --text-heading-lg: 11.5rem;
  --leading-heading-lg: 0.85;
  --tracking-heading-lg: 0.23rem;
  --text-display: 21.3125rem;
  --leading-display: 0.8;
  --tracking-display: 0.42625rem;

  /* Spacing */
  --spacing-16: 1rem;
  --spacing-20: 1.25rem;
  --spacing-40: 2.5rem;
  --spacing-60: 3.75rem;
  --spacing-80: 5rem;
  --spacing-160: 10rem;

  /* Border Radius */
  --radius-md: 0.375rem;
  --radius-full: 6.25rem;
}
```
