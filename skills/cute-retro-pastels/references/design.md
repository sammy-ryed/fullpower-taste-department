<!-- User-supplied extraction normalized to rem; invalid layout ranges and display font fallback repaired. SKILL.md resolves CTA conflicts. -->
# OLIPOP — Style Reference
> Retro apothecary cream and forest teal — a soda fountain menu printed on warm paper.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

OLIPOP is a sun-faded apothecary meets soda fountain: warm cream canvases, one authoritative forest-teal that anchors every header, button, and brand mark, and a carousel of pastel-flavored product cards that read like candy shelf labels from a 1950s general store. Typography does most of the storytelling — a high-contrast retro display serif (WindsorEF) at weight 800 shouts from headlines, while a clean modern sans (Ano) handles everything else with workmanlike quietness. The system lives in the gap between vintage warmth and modern e-commerce utility: pill-shaped buttons, soft 1rem-radius cards, and zero shadows except a single faint glow on the primary call-to-action. Color is rationed carefully — most of the page is cream and forest teal, with chromatic energy reserved for product cards, a single wine-red accent, and a bright teal secondary action.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Forest Ink | `#14433d` | `--color-forest-ink` | Teal supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Cream Paper | `#fdf7e7` | `--color-cream-paper` | Page canvas, section backgrounds — the off-white that every surface sits on, slightly warm so type never feels clinical |
| Mint Sage | `#d3e8e3` | `--color-mint-sage` | Hero panel background, soft section washes — a desaturated mint that recedes so forest-teal text can lead |
| Charcoal | `#3a3a3a` | `--color-charcoal` | Body text, link text, secondary icons — softer than pure black to stay in harmony with the warm cream canvas |
| Pure White | `#ffffff` | `--color-pure-white` | Card surfaces on cream sections, button text on forest-teal fills, input fields — the only true white in the system |
| Hairline Gray | `#e3e3e3` | `--color-hairline-gray` | Dividers, subtle borders — barely-there structural lines |
| Wine Press | `#7e0022` | `--color-wine-press` | Red supporting accent for decorative details and low-frequency emphasis. |
| Bright Teal | `#2ad2c9` | `--color-bright-teal` | Teal supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Fountain Teal | `#008b70` | `--color-fountain-teal` | Teal supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Cardinal Red | `#d32737` | `--color-cardinal-red` | Red supporting accent for decorative details and low-frequency emphasis. Use as a supporting accent, not as a status color |
| Banana Cream | `#fdf4b5` | `--color-banana-cream` | Product card background — Banana Cream flavor |
| Watermelon Lime | `#a9df71` | `--color-watermelon-lime` | Product card background — Watermelon Lime flavor |
| Crisp Apple | `#febac4` | `--color-crisp-apple` | Product card background — Crisp Apple flavor |
| Classic Grape | `#e3d2ed` | `--color-classic-grape` | Product card background — Classic Grape flavor |
| Vintage Cola | `#f8d5c0` | `--color-vintage-cola` | Product card background — Vintage Cola flavor |

## Tokens — Typography

### WindsorEF — Display headlines, hero copy, section titles, and product card labels. This high-contrast retro serif is the brand's signature voice — it evokes vintage packaging and apothecary labels. Weight 800–900 at 3rem–5rem for hero/section titles; weight 700 at 1.25rem–2rem for product card names. The extremely tight 1.0 line-height and very large sizes make it command attention without feeling like a typical bold sans-serif. Substitute: Bagel Fat One, Cooper Black, or Playfair Display Black. · `--font-windsoref`
- **Substitute:** Playfair Display Black or Cooper Black
- **Weights:** 700, 800, 900
- **Sizes:** 1.25rem, 2rem, 3rem, 3.25rem, 4.5rem, 5rem
- **Line height:** 1.00
- **Letter spacing:** normal
- **Role:** Display headlines, hero copy, section titles, and product card labels. This high-contrast retro serif is the brand's signature voice — it evokes vintage packaging and apothecary labels. Weight 800–900 at 3rem–5rem for hero/section titles; weight 700 at 1.25rem–2rem for product card names. The extremely tight 1.0 line-height and very large sizes make it command attention without feeling like a typical bold sans-serif. Substitute: Bagel Fat One, Cooper Black, or Playfair Display Black.

### Ano — Body text, navigation, button labels, form inputs, footer text, and all UI chrome. A clean, friendly sans-serif that does the quiet work of the interface while the display serif performs above. Weight 400 for body, 600 for emphasized body or nav, 700 for button text. Generous line-heights (1.5–1.82) keep body copy breathable on the cream background. Substitute: Inter, DM Sans, or Söhne. · `--font-ano`
- **Substitute:** Inter or DM Sans
- **Weights:** 400, 600, 700
- **Sizes:** 0.75rem, 0.875rem, 1rem, 1.125rem, 1.25rem, 1.375rem, 1.5rem
- **Line height:** 1.20–2.33
- **Letter spacing:** normal
- **Role:** Body text, navigation, button labels, form inputs, footer text, and all UI chrome. A clean, friendly sans-serif that does the quiet work of the interface while the display serif performs above. Weight 400 for body, 600 for emphasized body or nav, 700 for button text. Generous line-heights (1.5–1.82) keep body copy breathable on the cream background. Substitute: Inter, DM Sans, or Söhne.

### Helvetica — Fallback for icon labels and minor decorative text — present only in low-frequency decorative spots, not part of the core system · `--font-helvetica`
- **Substitute:** system-ui sans-serif
- **Weights:** 400
- **Sizes:** 1rem
- **Line height:** 1.50
- **Role:** Fallback for icon labels and minor decorative text — present only in low-frequency decorative spots, not part of the core system

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| micro | — | — | 0.75rem | 2.33 | — | `--text-micro` |
| caption | — | — | 0.875rem | 1.8 | — | `--text-caption` |
| body-sm | — | — | 1rem | 1.67 | — | `--text-body-sm` |
| body-lg | — | — | 1.25rem | 1.5 | — | `--text-body-lg` |
| subheading-sm | — | — | 1.375rem | 1.48 | — | `--text-subheading-sm` |
| subheading | — | — | 1.5rem | 1.4 | — | `--text-subheading` |
| heading-sm | — | — | 2rem | 1 | — | `--text-heading-sm` |
| heading-lg | — | — | 3.25rem | 1 | — | `--text-heading-lg` |
| display-sm | — | — | 4.5rem | 1 | — | `--text-display-sm` |
| display | — | — | 5rem | 1 | — | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 0.25rem

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 0.25rem | `--spacing-4` |
| 8 | 0.5rem | `--spacing-8` |
| 12 | 0.75rem | `--spacing-12` |
| 16 | 1rem | `--spacing-16` |
| 20 | 1.25rem | `--spacing-20` |
| 24 | 1.5rem | `--spacing-24` |
| 28 | 1.75rem | `--spacing-28` |
| 32 | 2rem | `--spacing-32` |
| 40 | 2.5rem | `--spacing-40` |
| 60 | 3.75rem | `--spacing-60` |
| 80 | 5rem | `--spacing-80` |
| 112 | 7rem | `--spacing-112` |
| 128 | 8rem | `--spacing-128` |
| 224 | 14rem | `--spacing-224` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 3.125rem |
| cards | 1rem |
| inputs | 3.125rem |
| buttons | 3.125rem |
| hero-panels | 1.5rem |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| lg | `rgba(0, 0, 0, 0.1) 0rem 0rem 1.5rem 0rem` | `--shadow-lg` |

### Layout

- **Page max-width:** 75rem
- **Section gap:** 2.5rem–4rem
- **Card padding:** 1.25rem
- **Element gap:** 0.5rem–1rem

## Components

### Announcement Bar
**Role:** Site-wide top banner for promotions and shipping notices

Full-width forest-teal (#14433d) bar with white (#ffffff) text. White (Ano) at 0.75rem–0.875rem, centered. Fixed at 0.0625rem or 0.125rem vertical padding. Functions as a dark anchor strip at the very top of every page.

### Primary Navigation
**Role:** Main site navigation

Cream (#fdf7e7) background, centered OLIPOP wordmark logo in forest-teal, nav links (Shop, Learn, Subscribe) left-aligned in charcoal (#3a3a3a) Ano weight 400 at ~0.875rem–1rem, utility icons (Find in Store, account, cart) right-aligned. Spacing of ~1.25rem horizontal padding on link groups.

### Primary CTA Button
**Role:** Highest-priority conversion button

Pill-shaped (3.125rem border-radius), forest-teal (#14433d) fill, white (#ffffff) text in Ano weight 700 at 1rem. Padding 0.75rem 1.5rem. Subtle box-shadow rgba(0,0,0,0.1) 0rem 0rem 1.5rem 0rem — a soft ambient glow rather than a hard elevation. Used for 'Shop Now' and main purchase actions.

### Secondary CTA Button
**Role:** Secondary conversion — loyalty/rewards sign-up

Pill-shaped (3.125rem border-radius), bright teal (#2ad2c9) fill, forest-teal (#14433d) text in Ano weight 700 at 1rem. Same padding as primary. The vivid teal against the cream page makes it pop without using the dominant brand color.

### Ghost Text Link
**Role:** Inline links within body text

No background or border. Charcoal (#3a3a3a) text, Ano weight 400, underlined or with subtle color shift on hover. Compact, unobtrusive, treats links as text continuity rather than interactive chrome.

### Hero Panel
**Role:** Above-the-fold brand statement section

Two-tone: cream (#fdf7e7) page background with an inset mint-sage (#d3e8e3) rounded panel (1.5rem radius) taking up roughly 40% of the viewport width. Display serif (WindsorEF) weight 800 at 4.5rem–5rem in forest-teal. Subtext in Ano weight 400 at 1.125rem in charcoal. Primary CTA button below. The mint panel creates a 'card' on a card effect — the hero reads as a poster pinned to cream paper.

### Flavor Product Card
**Role:** Product listing card in the 'Pure Nostalgia-ahh' carousel

Full-bleed colored card (one of 15+ pastel flavors — butter yellow, apple green, blush pink, lavender, peach, etc.), 1rem border-radius. Contains a circular product photo crop. Card name in WindsorEF weight 700 at 1.25rem–1.5rem in forest-teal below the image. Five-star rating row in Ano 0.75rem. No shadow, no border — the color itself defines the card boundary.

### Section Heading
**Role:** Mid-page section titles

WindsorEF weight 800 at 3rem–3.25rem, forest-teal (#14433d), centered. Minimal subtext in Ano 1.125rem charcoal directly below. The large serif centered on cream creates a poster-like rhythm between sections.

### Rewards Feature Section
**Role:** Loyalty/rewards promotion with image and text

Cream background. Two-column layout: left column is a large circular image area (rounded illustration with pink, cherry-red, and cream elements), right column has a small wine-red (#7e0022) accent label ('Cherry on Top'), then a WindsorEF display heading at 2rem–3rem, then body copy, then a bright-teal CTA button. The circular image container is a signature layout device — image cropped to a perfect circle, floating on cream.

### Product Image Circle
**Role:** Circular product or illustration container

Perfectly round container (border-radius 50%) holding product photography or illustration. Used within flavor cards and the rewards section. The circle motif appears repeatedly — it softens the rectangular grid and references vintage bottle caps and medallions.

### Form Input Field
**Role:** Newsletter signup, search, and form inputs

White (#ffffff) fill, fountain-teal (#008b70) 0.0625rem border, 3.125rem border-radius (pill-shaped), Ano 1rem text, 0.75rem–1rem vertical padding. Focus state deepens border to forest-teal (#14433d).

### Star Rating
**Role:** Product review star display

Five small filled stars in forest-teal (#14433d), inline with product cards. No background, no container — raw characters in Ano 0.75rem or as SVG icons. Functional micro-element, not a decorative badge.

### Footer
**Role:** Site-wide footer with links and legal

Forest-teal (#14433d) background with white (#ffffff) text. Multi-column link grid in Ano 0.875rem–1rem. Logo at top. The dark footer mirrors the announcement bar, framing the page top and bottom with forest-teal bands.

## Do's and Don'ts

### Do
- Use WindsorEF at weight 800 or 900 for all headlines 2rem and above — this display serif IS the brand voice
- Set primary CTA buttons to 3.125rem border-radius (full pill) with forest-teal (#14433d) fill and white text
- Use cream (#fdf7e7) as the base page background for all sections — never pure white as the canvas
- Apply 1rem border-radius to all content cards, 3.125rem to all interactive elements (buttons, inputs, tags)
- Pair the cream canvas with one chromatic surface per product card — each flavor gets its own pastel, never shared
- Keep body text at 1rem–1.125rem in Ano weight 400 with charcoal (#3a3a3a) — never use pure black on cream
- Use the soft ambient shadow rgba(0,0,0,0.1) 0rem 0rem 1.5rem only on the primary CTA — all other elements stay flat

### Don't
- Don't use WindsorEF below 1.25rem — the display serif loses character at small sizes and becomes hard to read
- Don't apply sharp corners (0rem–0.5rem radius) to buttons or inputs — the pill shape is essential to the system
- Don't introduce additional dark surface colors beyond forest-teal (#14433d) — the brand's darkness IS that specific teal
- Don't add heavy drop shadows or elevation effects — the system is fundamentally flat with one exception (primary CTA glow)
- Don't mix the wine-red (#7e0022) accent with forest-teal (#14433d) in the same component — pick one for heading, one for body
- Don't use the product-card pastel colors for UI chrome (nav, buttons, borders) — they are flavor-locked to product context only
- Don't set body text at line-height below 1.4 — Ano needs breathing room to feel warm on cream, not clinical

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Canvas | `#fdf7e7` | Warm cream — the default page background that every other surface sits on |
| 1 | Hero Panel | `#d3e8e3` | Mint sage inset panel within the hero, creating a tonal card on the cream canvas |
| 2 | Product Card | `#fdf4b5` | Pastel flavor-colored cards — each product gets its own hue from the 15-color pastel palette |
| 3 | Dark Frame | `#14433d` | Forest-teal announcement bar and footer — dark bookends that bracket the cream page |

## Elevation

- **Primary CTA Button:** `rgba(0, 0, 0, 0.1) 0rem 0rem 1.5rem 0rem`

## Imagery

Product photography is the dominant visual: full-can soda shots on clean pastel backgrounds, tightly cropped with no lifestyle context. The can IS the hero — no hands, no people, no environment. Supporting illustrations appear in the rewards section with a retro/folk-art style (cherry stem, varsity jacket, milkshake glass with sparkle motifs), rendered in flat color blocks of pink, cherry red, and cream. Iconography is minimal — the brand relies on the wordmark and product photography rather than an icon system. The circle motif recurs throughout: product images, illustration containers, and the logo's wordmark treatment. The visual language is 'vintage packaging photography meets folk-art merch' — warm, slightly nostalgic, and proudly analog.

## Agent Prompt Guide

**Quick Color Reference**
- text: #3a3a3a (charcoal body) / #14433d (forest-teal headings)
- background: #fdf7e7 (cream canvas)
- border: #e3e3e3 (hairline gray)
- accent: #7e0022 (wine red — for loyalty/specialness)
- secondary action: #2ad2c9 (bright teal — for rewards sign-up only)
- primary action: no distinct CTA color

**Example Component Prompts**
No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.
2. Create a flavor product card: 1rem border-radius, fill #fdf4b5 (butter yellow). Centered circular product image crop (border-radius 50%) in the upper 70%. Product name 'Banana Cream' in WindsorEF weight 700 at 1.25rem, #14433d, centered below image. Five forest-teal star icons (0.75rem) at the bottom.
4. Create a section heading: WindsorEF weight 800 at 3rem, #14433d, centered on cream. Subtext in Ano weight 400 at 1.125rem #3a3a3a directly below with 1rem gap.
5. Create a footer: forest-teal (#14433d) full-width band, white (#ffffff) text, four-column link grid in Ano 0.875rem weight 400. OLIPOP wordmark logo at top in white.

## Circle Motif System

The circle is a recurring structural device throughout OLIPOP: product images are cropped to perfect circles, the rewards illustration sits in a large circular container, the logo's wordmark 'O' reinforces the motif, and the '3.125rem' button/input radius creates pill shapes that echo the same rounded geometry. When building new screens, use circles for: product thumbnails, illustration containers, avatar/badge placements, and decorative background elements. Avoid using circles for primary content containers — the cream canvas and rectangular mint panels handle that role. The circle reads as 'vintage bottle cap / medallion / stamp' and is core to the brand's nostalgic identity.

## Product Card Color System

Each OLIPOP flavor is assigned a unique pastel hue used exclusively as that product's card background. The 15-card palette ranges from warm yellows (#fdf4b5, #fee6a7, #fee967) through pinks (#febac4, #ffada5, #f8d5c0) and corals (#ffc3b3) to greens (#95d95d, #a9df71, #e1eab4) and lavender (#e3d2ed). These colors are flavor-locked: they appear only on product cards, never on UI chrome, buttons, or section backgrounds. When creating a new product, assign a new pastel from this hue family — never reuse a flavor's color. The card color IS the product's identity in the grid.

## Similar Brands

- **Recess** — Same warm cream canvas with a single dark teal/green as the dominant brand color, retro display serif headlines, and pastel product cards in a horizontal carousel
- **Oatly** — Warm off-white page background, oversized retro display typography for headlines, and a single dark color carrying all primary actions — though Oatly leans more ironic/playful in tone
- **Magic Spoon** — Vintage cereal-box aesthetic with cream backgrounds, high-contrast serif display type at large sizes, and per-flavor pastel card colors in product grids
- **Public Goods** — Cream and off-white minimal e-commerce aesthetic with pill-shaped buttons and a single forest-toned dark color for primary actions
- **Halfday (formerly MTE)** — Warm cream + forest-green palette with pill buttons, oversized serif headlines, and pastel product cards in a apothecary/general-store visual language

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-forest-ink: #14433d;
  --color-cream-paper: #fdf7e7;
  --color-mint-sage: #d3e8e3;
  --color-charcoal: #3a3a3a;
  --color-pure-white: #ffffff;
  --color-hairline-gray: #e3e3e3;
  --color-wine-press: #7e0022;
  --color-bright-teal: #2ad2c9;
  --color-fountain-teal: #008b70;
  --color-cardinal-red: #d32737;
  --color-banana-cream: #fdf4b5;
  --color-watermelon-lime: #a9df71;
  --color-crisp-apple: #febac4;
  --color-classic-grape: #e3d2ed;
  --color-vintage-cola: #f8d5c0;

  /* Typography — Font Families */
  --font-windsoref: 'WindsorEF', 'Cooper Black', Georgia, 'Times New Roman', serif;
  --font-ano: 'Ano', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-helvetica: 'Helvetica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-micro: 0.75rem;
  --leading-micro: 2.33;
  --text-caption: 0.875rem;
  --leading-caption: 1.8;
  --text-body-sm: 1rem;
  --leading-body-sm: 1.67;
  --text-body-lg: 1.25rem;
  --leading-body-lg: 1.5;
  --text-subheading-sm: 1.375rem;
  --leading-subheading-sm: 1.48;
  --text-subheading: 1.5rem;
  --leading-subheading: 1.4;
  --text-heading-sm: 2rem;
  --leading-heading-sm: 1;
  --text-heading-lg: 3.25rem;
  --leading-heading-lg: 1;
  --text-display-sm: 4.5rem;
  --leading-display-sm: 1;
  --text-display: 5rem;
  --leading-display: 1;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  /* Spacing */
  --spacing-unit: 0.25rem;
  --spacing-4: 0.25rem;
  --spacing-8: 0.5rem;
  --spacing-12: 0.75rem;
  --spacing-16: 1rem;
  --spacing-20: 1.25rem;
  --spacing-24: 1.5rem;
  --spacing-28: 1.75rem;
  --spacing-32: 2rem;
  --spacing-40: 2.5rem;
  --spacing-60: 3.75rem;
  --spacing-80: 5rem;
  --spacing-112: 7rem;
  --spacing-128: 8rem;
  --spacing-224: 14rem;

  /* Layout */
  --page-max-width: 75rem;
  --section-gap: clamp(2.5rem, 4vw, 4rem);
  --card-padding: 1.25rem;
  --element-gap: clamp(0.5rem, 1vw, 1rem);

  /* Border Radius */
  --radius-lg: 0.625rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-full: 3.125rem;
  --radius-full-2: 6.25rem;

  /* Named Radii */
  --radius-tags: 3.125rem;
  --radius-cards: 1rem;
  --radius-inputs: 3.125rem;
  --radius-buttons: 3.125rem;
  --radius-hero-panels: 1.5rem;

  /* Shadows */
  --shadow-lg: rgba(0, 0, 0, 0.1) 0rem 0rem 1.5rem 0rem;

  /* Surfaces */
  --surface-page-canvas: #fdf7e7;
  --surface-hero-panel: #d3e8e3;
  --surface-product-card: #fdf4b5;
  --surface-dark-frame: #14433d;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-forest-ink: #14433d;
  --color-cream-paper: #fdf7e7;
  --color-mint-sage: #d3e8e3;
  --color-charcoal: #3a3a3a;
  --color-pure-white: #ffffff;
  --color-hairline-gray: #e3e3e3;
  --color-wine-press: #7e0022;
  --color-bright-teal: #2ad2c9;
  --color-fountain-teal: #008b70;
  --color-cardinal-red: #d32737;
  --color-banana-cream: #fdf4b5;
  --color-watermelon-lime: #a9df71;
  --color-crisp-apple: #febac4;
  --color-classic-grape: #e3d2ed;
  --color-vintage-cola: #f8d5c0;

  /* Typography */
  --font-windsoref: 'WindsorEF', 'Cooper Black', Georgia, 'Times New Roman', serif;
  --font-ano: 'Ano', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-helvetica: 'Helvetica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-micro: 0.75rem;
  --leading-micro: 2.33;
  --text-caption: 0.875rem;
  --leading-caption: 1.8;
  --text-body-sm: 1rem;
  --leading-body-sm: 1.67;
  --text-body-lg: 1.25rem;
  --leading-body-lg: 1.5;
  --text-subheading-sm: 1.375rem;
  --leading-subheading-sm: 1.48;
  --text-subheading: 1.5rem;
  --leading-subheading: 1.4;
  --text-heading-sm: 2rem;
  --leading-heading-sm: 1;
  --text-heading-lg: 3.25rem;
  --leading-heading-lg: 1;
  --text-display-sm: 4.5rem;
  --leading-display-sm: 1;
  --text-display: 5rem;
  --leading-display: 1;

  /* Spacing */
  --spacing-4: 0.25rem;
  --spacing-8: 0.5rem;
  --spacing-12: 0.75rem;
  --spacing-16: 1rem;
  --spacing-20: 1.25rem;
  --spacing-24: 1.5rem;
  --spacing-28: 1.75rem;
  --spacing-32: 2rem;
  --spacing-40: 2.5rem;
  --spacing-60: 3.75rem;
  --spacing-80: 5rem;
  --spacing-112: 7rem;
  --spacing-128: 8rem;
  --spacing-224: 14rem;

  /* Border Radius */
  --radius-lg: 0.625rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-full: 3.125rem;
  --radius-full-2: 6.25rem;

  /* Shadows */
  --shadow-lg: rgba(0, 0, 0, 0.1) 0rem 0rem 1.5rem 0rem;
}
```
