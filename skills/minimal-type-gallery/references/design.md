<!-- Normalized user-supplied extraction. SKILL.md resolves conflicts and extends the headline treatment. -->
# Discover — Style Reference
> Type museum on white marble — a near-black wordmark, a whisper of coral, and everything else recedes.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Fonts Ninja is a near-monochrome gallery for letterforms, where the only chromatic note is a single warm coral that punctuates action. The canvas is near-white and stays quiet; type is the protagonist, presented at extreme scale and paired with generous negative space. Cards are soft-cornered white panels floating on a barely-there shadow, and every interactive element earns its color — most UI is ink-on-paper, and the coral appears only when something wants to be clicked. Density is compact but the layout breathes because margins are large and rhythm is measured in 0.625rem and 1.5rem increments rather than tight 0.25–0.5rem stacks.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink | `#121212` | `--color-ink` | Primary text, card borders, icon strokes, hairline dividers. A warm near-black chosen over #000 to soften contrast against white without losing authority |
| Canvas | `#ffffff` | `--color-canvas` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Fog | `#dbdada` | `--color-fog` | Ambient shadow tint, muted background washes, subtle surface elevation. Carries the 0.16-alpha shadow that lifts cards off the canvas |
| Slate | `#8e8e93` | `--color-slate` | Secondary body text, de-emphasized metadata, inactive nav borders, helper copy |
| Obsidian | `#000000` | `--color-obsidian` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Signal Coral | `#ee585a` | `--color-signal-coral` | Filled CTA backgrounds (action buttons, filter pills), inline text links, notification dot, hover/focus glow. The sole chromatic accent — one warm red against matte white creates urgency without aggression |

## Tokens — Typography

### Aeonik — Sole typeface across all UI. 700 for the monumental wordmark and large display headings, 500 for medium-emphasis labels and nav, 400 for body and metadata. Tight -0.011em tracking across all sizes tightens the geometric forms and gives the wordmark its dense, packed look. · `--font-aeonik`
- **Substitute:** Inter, Satoshi, or General Sans
- **Weights:** 400, 500, 700
- **Sizes:** 0.75, 0.875, 1, 1.5, 2, 2.75rem
- **Line height:** 1.00–1.50
- **Letter spacing:** -0.011em (consistent across all sizes, roughly -0.008125rem at 0.75rem through -0.03rem at 2.75rem)
- **Role:** Sole typeface across all UI. 700 for the monumental wordmark and large display headings, 500 for medium-emphasis labels and nav, 400 for body and metadata. Tight -0.011em tracking across all sizes tightens the geometric forms and gives the wordmark its dense, packed look.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 0.75rem | 1.5 | -0.008125rem | `--text-caption` |
| body-sm | — | — | 0.875rem | 1.5 | -0.009375rem | `--text-body-sm` |
| body | — | — | 1rem | 1.5 | -0.01125rem | `--text-body` |
| subheading | — | — | 1.5rem | 1.2 | -0.01625rem | `--text-subheading` |
| heading-sm | — | — | 2rem | 1.14 | -0.021875rem | `--text-heading-sm` |
| heading | — | — | 2.75rem | 1.15 | -0.03rem | `--text-heading` |
| display | — | — | 7.5rem | 1 | -0.0825rem | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 6 | 0.375rem | `--spacing-6` |
| 8 | 0.5rem | `--spacing-8` |
| 10 | 0.625rem | `--spacing-10` |
| 16 | 1rem | `--spacing-16` |
| 24 | 1.5rem | `--spacing-24` |
| 32 | 2rem | `--spacing-32` |
| 48 | 3rem | `--spacing-48` |
| 56 | 3.5rem | `--spacing-56` |
| 66 | 4.125rem | `--spacing-66` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 2rem |
| links | 1rem |
| pills | 624.9375rem |
| buttons | 2rem |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| xl | `rgba(72, 72, 74, 0.16) 0rem 0.125rem 2rem 0rem` | `--shadow-xl` |

### Layout

- **Page max-width:** 82.5rem
- **Section gap:** 3rem
- **Card padding:** 1.5rem
- **Element gap:** 0.625rem

## Components

### Font Preview Card
**Role:** Grid tile displaying a single typeface specimen

White surface (#ffffff) on Canvas, 2rem border-radius, ambient shadow rgba(72,72,74,0.16) 0rem 0.125rem 2rem 0rem. Centered specimen at ~7.5rem Aeonik weight 700 in Ink (#121212) dominates the card. Below: font name in 1rem weight 500 Ink, foundry and style count/price in 0.75–0.875rem Slate (#8e8e93). Internal padding 1.5rem, specimen area ~60% of card height.

### Primary CTA Button (Filled)
**Role:** Action trigger — filter, submit, navigate

Signal Coral (#ee585a) background, white (#ffffff) text, Aeonik 500 at 0.875–1rem, 2rem border-radius, 1rem vertical × 1.5rem horizontal padding. No border. Sits at full saturation against the monochrome canvas — the coral is the only chromatic voice in the room.

### Ghost Text Link
**Role:** Inline navigation and secondary affordances

Signal Coral (#ee585a) text in Aeonik 500 at 1rem with an external-arrow glyph (↗). No underline, no background, no border. Inline within body copy or as standalone link. 1rem border-radius on any container.

### Floating Filter Pill
**Role:** Sticky filter trigger for typeface grid

Signal Coral (#ee585a) filled pill, white text reading 'Filter typefaces' with a dropdown caret icon, 624.9375rem border-radius (full pill), 0.625–0.75rem vertical × 1.25rem horizontal padding. Floats over grid content at fixed position.

### Top Navigation Bar
**Role:** Primary site navigation

Transparent/Canvas background, 3.5rem horizontal padding. Left: small ninja mark icon. Right cluster: 'Fonts' (active, weight 500 Ink), 'Bookmarks' (weight 400 Slate), search icon, profile icon, hamburger — all 1.5rem outlined icons in Ink with 1.5–2rem gap between items.

### Hero Wordmark
**Role:** Brand statement and page identity

Full-bleed 'FONTS NINJA' set in Aeonik 700 at ~7.5rem, Ink (#121212), tracking -0.0825rem, line-height 1.0. Near-edge-to-edge horizontal span. A 0.75rem Signal Coral notification dot sits at the top-right of the final 'A' — a single pop of color that says 'new' without a badge or banner.

### Notification Dot
**Role:** Status indicator on wordmark and possibly nav elements

0.75rem diameter circle, Signal Coral (#ee585a), no border, no shadow. Positioned as a superscript overlay.

### Metadata Label
**Role:** Supporting text — foundry name, style count, price

Aeonik 400 at 0.75–0.875rem, Slate (#8e8e93). Two-column layout within cards: left-aligned descriptor, right-aligned price/style count. 0.625rem gap between label and value.

### Body Paragraph
**Role:** Hero subtext and descriptive copy

Aeonik 400 at 1–1.5rem, Ink (#121212), line-height 1.5, max-width constrained to ~50-60ch. Inline links adopt Ghost Text Link styling.

## Do's and Don'ts

### Do
- Use Signal Coral (#ee585a) exclusively for filled CTAs, inline text links, notification dots, and the floating filter pill — never as a background wash, never on large surface areas
- Set all type in Aeonik (or Inter/Satoshi substitute) at -0.011em letter-spacing regardless of size — the consistent tight tracking is part of the brand voice
- Apply 2rem border-radius to all cards, buttons, and containers — this large radius is signature and defines the soft, modern feel
- Use Ink (#121212) for all text and borders instead of pure #000000 — the warmth keeps the near-monochrome palette from feeling harsh
- Limit shadows to the single token rgba(72,72,74,0.16) 0rem 0.125rem 2rem 0rem, applied only to cards and floating elements
- Maintain 0.625rem element gaps and 1.5rem card padding as the base rhythm — jump to 3rem for section separation
- Let the wordmark or display heading carry visual weight; keep supporting UI quiet and monochrome

### Don't
- Don't introduce additional accent colors — the 1% colorfulness is deliberate; Signal Coral is the only chromatic note allowed
- Don't use sharp corners (0–0.25rem radius) on any container — the 2rem radius defines the system
- Don't apply drop shadows to text, nav, or inline elements — shadows are reserved for cards and floating pills only
- Don't use pure #000000 for body text — always use #121212 to maintain the soft contrast ratio (18.7:1)
- Don't set display type at loose or normal letter-spacing — the -0.011em tight tracking is non-negotiable
- Don't fill large background areas with Signal Coral — it loses impact at scale and should remain a small functional accent
- Don't add gradients, textures, or decorative imagery — the system is deliberately flat and typographic

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#ffffff` | Base page background, full-bleed |
| 1 | Card | `#ffffff` | Font preview tiles, content panels — same hex as canvas but separated by shadow |
| 2 | Shadow Tint | `#dbdada` | Ambient gray carried in card shadows at 0.16 alpha |
| 3 | Action Surface | `#ee585a` | Filled CTAs, floating filter button, notification dot |

## Elevation

- **Font Preview Card:** `rgba(72, 72, 74, 0.16) 0rem 0.125rem 2rem 0rem`

## Imagery

No photography, no illustration, no abstract graphics. The only visual content beyond UI chrome is typographic specimens — oversized 'Aa' glyphs rendered directly in the interface as the product itself. Icons are minimal outlined glyphs (search, profile, hamburger, ninja mark) drawn in Ink at 1.5rem with thin consistent stroke weight, monoline style. The wordmark functions as the hero image. Visual density is extremely low — text and specimens dominate, the rest is whitespace.

## Layout

Full-bleed layout with the wordmark stretching nearly edge-to-edge in the hero, establishing maximum typographic impact immediately. Below the hero, a 3-column responsive grid of font preview cards with generous 1.5–2rem gutters. Content max-width approximately 82.5rem centered on the canvas. Section rhythm: the hero is a single expansive band, followed by a tighter grid section. Navigation is a minimal top bar with right-aligned utility cluster. No sidebar, no mega-menu, no sticky elements beyond the floating filter pill. The page reads top-to-bottom as: monumental wordmark → short descriptive paragraph → dense specimen grid. Asymmetric only in the hero's near-full-bleed scale; the grid below is symmetric and evenly spaced.

## Agent Prompt Guide

**Quick Color Reference**
- text: #121212 (Ink)
- background: #ffffff (Canvas)
- border: #121212 (Ink) at 0.0625rem
- accent: #ee585a (Signal Coral)
- primary action: #ee585a (filled action)
- muted: #8e8e93 (Slate)

**3-5 Example Component Prompts**

1. *Hero wordmark section*: Full-bleed white canvas. Set 'FONTS NINJA' in Aeonik weight 700 at 7.5rem, color #121212, letter-spacing -0.0825rem, line-height 1.0, stretching nearly edge-to-edge. Place a 0.75rem diameter #ee585a circle at the top-right corner of the final letter as a notification dot. Below at 3rem gap, add a body paragraph: Aeonik 400 at 1.5rem, #121212, line-height 1.5, max-width 60ch. Inline the phrase 'Browse our library' as #ee585a Aeonik 500 with an external-arrow glyph (↗).

2. *Font preview card*: White (#ffffff) surface, 2rem border-radius, shadow rgba(72,72,74,0.16) 0rem 0.125rem 2rem 0rem. Centered specimen of 'Aa' at 7.5rem Aeonik weight 700 in #121212 occupying the top 60% of the card. Bottom section with 1.5rem internal padding: font name in Aeonik 500 1rem #121212 on the left, style count in Aeonik 400 0.875rem #8e8e93 on the right. Second row: foundry name in Aeonik 400 0.75rem #8e8e93.

3. Create a Primary Action Button: #ee585a background, #000000 text, 624.9375rem radius, compact pill padding. Use this filled treatment for the main CTA.

4. *Top navigation bar*: White transparent background, 3.5rem horizontal padding. Left: 1.5rem outlined ninja mark icon in #121212. Right cluster with 2rem gaps: 'Fonts' (Aeonik 500 1rem #121212), 'Bookmarks' (Aeonik 400 1rem #8e8e93), search icon, profile icon, hamburger icon — all 1.5rem outlined in #121212.

5. *Typography grid section*: 3-column CSS grid with 1.5rem gap, cards as described above. Section padding 3rem top/bottom. Each card 2rem border-radius with the single shadow token.

## Similar Brands

- **Pangram Pangram** — Same near-monochrome gallery treatment for type specimens, oversized 'Aa' previews, and large border-radius on specimen cards
- **Klim Type Foundry** — Editorial type-foundry presentation with white canvas, single-weight typography, and type specimens as the primary visual
- **Are.na** — Near-monochrome minimalist interface with quiet chrome and a single accent color reserved for interactive elements
- **Linear** — Compact dense UI with generous border-radius, near-black text on white, and a single restrained accent palette
- **Velvetyne Type Foundry** — Type-specimen-first layout with specimen cards on white, minimal chrome, and no decorative imagery

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ink: #121212;
  --color-canvas: #ffffff;
  --color-fog: #dbdada;
  --color-slate: #8e8e93;
  --color-obsidian: #000000;
  --color-signal-coral: #ee585a;

  /* Typography — Font Families */
  --font-aeonik: 'Aeonik', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 0.75rem;
  --leading-caption: 1.5;
  --tracking-caption: -0.008125rem;
  --text-body-sm: 0.875rem;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.009375rem;
  --text-body: 1rem;
  --leading-body: 1.5;
  --tracking-body: -0.01125rem;
  --text-subheading: 1.5rem;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.01625rem;
  --text-heading-sm: 2rem;
  --leading-heading-sm: 1.14;
  --tracking-heading-sm: -0.021875rem;
  --text-heading: 2.75rem;
  --leading-heading: 1.15;
  --tracking-heading: -0.03rem;
  --text-display: 7.5rem;
  --leading-display: 1;
  --tracking-display: -0.0825rem;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-6: 0.375rem;
  --spacing-8: 0.5rem;
  --spacing-10: 0.625rem;
  --spacing-16: 1rem;
  --spacing-24: 1.5rem;
  --spacing-32: 2rem;
  --spacing-48: 3rem;
  --spacing-56: 3.5rem;
  --spacing-66: 4.125rem;

  /* Layout */
  --page-max-width: 82.5rem;
  --section-gap: 3rem;
  --card-padding: 1.5rem;
  --element-gap: 0.625rem;

  /* Border Radius */
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-3xl-2: 2rem;
  --radius-full: 4.3125rem;

  /* Named Radii */
  --radius-cards: 2rem;
  --radius-links: 1rem;
  --radius-pills: 624.9375rem;
  --radius-buttons: 2rem;

  /* Shadows */
  --shadow-xl: rgba(72, 72, 74, 0.16) 0rem 0.125rem 2rem 0rem;

  /* Surfaces */
  --surface-canvas: #ffffff;
  --surface-card: #ffffff;
  --surface-shadow-tint: #dbdada;
  --surface-action-surface: #ee585a;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-ink: #121212;
  --color-canvas: #ffffff;
  --color-fog: #dbdada;
  --color-slate: #8e8e93;
  --color-obsidian: #000000;
  --color-signal-coral: #ee585a;

  /* Typography */
  --font-aeonik: 'Aeonik', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 0.75rem;
  --leading-caption: 1.5;
  --tracking-caption: -0.008125rem;
  --text-body-sm: 0.875rem;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.009375rem;
  --text-body: 1rem;
  --leading-body: 1.5;
  --tracking-body: -0.01125rem;
  --text-subheading: 1.5rem;
  --leading-subheading: 1.2;
  --tracking-subheading: -0.01625rem;
  --text-heading-sm: 2rem;
  --leading-heading-sm: 1.14;
  --tracking-heading-sm: -0.021875rem;
  --text-heading: 2.75rem;
  --leading-heading: 1.15;
  --tracking-heading: -0.03rem;
  --text-display: 7.5rem;
  --leading-display: 1;
  --tracking-display: -0.0825rem;

  /* Spacing */
  --spacing-6: 0.375rem;
  --spacing-8: 0.5rem;
  --spacing-10: 0.625rem;
  --spacing-16: 1rem;
  --spacing-24: 1.5rem;
  --spacing-32: 2rem;
  --spacing-48: 3rem;
  --spacing-56: 3.5rem;
  --spacing-66: 4.125rem;

  /* Border Radius */
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-3xl-2: 2rem;
  --radius-full: 4.3125rem;

  /* Shadows */
  --shadow-xl: rgba(72, 72, 74, 0.16) 0rem 0.125rem 2rem 0rem;
}
```
