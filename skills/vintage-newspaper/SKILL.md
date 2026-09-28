---
name: vintage-newspaper
description: Design newspaper-inspired frontend interfaces with warm parchment, monumental serif mastheads, editorial columns, thin rules, drop caps, sharp imagery, and restrained ember-orange stamps. Use when the user requests the Miranda style, a vintage broadsheet, an editorial portfolio, or a newspaper-like website.
---

# Vintage Newspaper

Make the requested interface read like an art-directed newspaper or printed editorial spread. Typography, column relationships, thin rules, and warm paper establish the identity. Adapt these to the user's actual content and existing framework; do not transplant Niccolo Miranda's personal details, portfolio claims, brand name, or imagery.

## Read and use

Read [design.md](references/design.md) and [newspaper composition](references/newspaper.md). Use [variables.css](assets/variables.css) and [token.json](assets/token.json); [theme.css](assets/theme.css) is available for existing Tailwind v4 projects. Do not introduce Tailwind just to use the skill.

This entrypoint and newspaper.md take precedence over conflicting rules in the extracted reference. The CSS scale and the added semantic typography tokens agree; the JSON's original measured typography variants are retained as reference measurements, not universal defaults.

## Non-negotiable visual character

- Use Parchment (#e2dedb) as paper, Bone Cream (#cdc6be) for subtle surface changes, and Ink Black (#1d1d1b) for text and rules. Orange (#c03f13) is sparse punctuation, such as a real status label or decorative stamp, not a large page wash.
- Compose a thin publication-style header, a dominant masthead, and editorial sections with clear column alignment. When the task supports it, introduce a featured strip, asymmetric story/portrait spread, or inverse ink banner. Do not force every layout into identical cards.
- Keep readable text serif: Editorial New or the provided serif fallback stack. Canopee is the primary expressive display face, Domaine Display a secondary headline face, Germgoth an occasional blackletter accent. Custom font files are not bundled; use available licensed faces and tune size, weight, and tracking to their actual metrics. A serif fallback is preferable to the original extraction's system sans-serif stacks, but is not an exact font match.
- Use thin horizontal rules between stories and vertical rules between desktop columns. Images have square corners. Article sections should mostly sit directly on the paper; small-radius cards and directional shadows are exceptional treatments, not the primary layout system.
- Pair large compressed headings with smaller flush-left editorial copy. Use drop caps sparingly and only on appropriate prose. Maintain semantic heading order rather than choosing heading elements for size.

## Dimensions and typography

All packaged pixel dimensions have been converted to rem using sixteen CSS pixels per rem; leave the browser root font size at its default. Keep percentages and unitless line heights, and use em tracking for fluid headings when appropriate. Numeric spacing token names retain their original labels; they do not mean Tailwind's standard spacing multiples.

The 27.875rem display token is a desktop reference, not a required mobile size. Start a short masthead around `clamp(4rem, 25vw, 27.875rem)` and adapt it to the available width and the user's title. Use approximately -0.05em tracking for fluid mastheads. Do not apply the fixed -1.39375rem display tracking to a small mobile title.

The supplied 0.73 display leading and other compressed values only suit carefully fitted single-line display lettering. Increase leading for wraps, fallback fonts, diacritics, and zoom so essential letters never collide or clip. Small body text uses the supplied 1rem reference size; for long paragraphs and workshop prompts, use the added body token with 1.5 leading. Use regular weight if a light serif becomes too fragile.

## Scope and interactions

In the Full-power Frontend gallery, apply this theme only to the Miranda section and its prompt/actions. Scope custom properties and CSS; do not affect neighboring skills. Present the starter prompt as a readable editorial excerpt with a clear copy button and download/open actions. Do not turn a functional prompt into decorative illegible display text.

For navigation, project links, downloads, and copy actions, preserve native semantics, keyboard focus, and meaningful labels. Reproduce newspaper character in their typography and borders. Do not claim every project is NEW; use a status badge only when the content supports it. Avoid invented issue dates, awards, affiliations, or publication statistics.

Subtle image hover zoom or headline reveal can support a requested interactive page, but this skill does not require a particular animation library, custom cursor, or scroll hijacking. Respect reduced motion and keep content usable without animation. A draggable feature strip needs button/keyboard alternatives if included.

## Verification

Inspect desktop and narrow layouts, fallback font loading, text zoom, heading wrapping, and column reading order. Ensure page overflow is absent, decorative textures do not lower contrast or capture pointer events, and text remains selectable. Check the orange badge text against its actual background and use Ink for small muted text where necessary. Confirm the final composition reads as a newspaper, not simply a beige background behind standard application cards. Report anything not visually tested.
