# Design direction — a street-side print studio

## Thesis

A contemporary student workshop announced with the confidence of a hand-painted cinema hoarding: monumental compressed letters, mango paper, deep maroon ink, pink framing, a swinging lime-and-chilli illustration, and fine ornamental detail. Work from Indian popular-print and sign-painting references without tracing their exact layouts or turning them into a generic ethnic pattern pack.

See the [rendered specimen preview](specimen-preview.png) for the intended lettering and illustration relationship. It is one composition example, not a layout to repeat for every brief.

## Composition, not a sticker dump

Establish three viewing distances:

1. **Across the room:** the headline and one graphic silhouette. These should still read when the composition is blurred or reduced to a thumbnail.
2. **At arm's length:** the proposition, event details, and action. Keep these aligned to a clear grid, even when display elements lean or overlap.
3. **Up close:** small captions, rail patterns, ink offsets, registration marks, and paper texture.

Put most ornament near the perimeter. Keep roughly a fifth of the main field visually quiet as a starting point, not a measured quota. Dense does not mean equal emphasis everywhere. A title may occupy half the poster; a task-heavy web section needs much more breathing room.

Prefer a meaningful interruption to perfect symmetry: one slanted issue stamp, a hanging object that crosses a rule, or a title that projects slightly beyond its inner frame. The outer layout remains stable. Rotate a whole paper panel by a degree or two, not every text element at unrelated angles.

## Ink system

| Ink | Value | Job |
| --- | --- | --- |
| Mango | `#ffcc32` | Main printed field; small highlights on dark fields |
| Maroon | `#701c39` | Headline face, outline, dark panel |
| Rani pink | `#e72b78` | Border accent and small decorative hits |
| Indigo | `#25216b` | Alternate night-print field |
| Vermilion | `#ce2a24` | Accent panels or illustration ink |
| Paper | `#fff2cc` | Quiet reading surface and reversed text |
| Leaf | `#28654a` | Illustration contrast |
| Lime | `#d6e35c` | Hero-object detail |
| Ink | `#2a1424` | Small text and keylines |

Begin with one dominant field, one strong foreground ink, and one accent. The other colors can appear in the illustration; don't assign every paragraph a different color. Use the semantic `canvas`, `ink`, `face`, `keyline`, `extrusion`, and `accent` variables when changing a palette so it remains coherent.

The bundled **Mango print**, **Indigo night**, and **Gulabi paper** combinations are alternate print runs, not random color shuffling. They retain the same layout and illustration. Text uses contrast-checked pairs; pink-on-mango and green-on-red remain decoration, never small copy.

## Lettering

Use strong custom composition before reaching for distortion. Teko at weight 700 is a practical condensed display starting point. Yatra One gives a secondary painted voice; its actual design has angular brush-derived forms, rather than a fake-script effect. Both are bundled for reproducibility.

Layer order: dark extrusion behind, paper keyline in the middle, colored face on top. Keep offsets consistent in one direction. Use small repeated hard shadows or a separate decorative duplicate marked `aria-hidden`, not a blurry drop shadow. A short uppercase title can be tightly set; descriptions must not inherit its compressed line height.

Suggested scales:

- Main display: fluid `clamp(4rem, 14vw, 13rem)` as an initial composition value; retune for the actual word length and container. On a poster, reserve explicit line breaks.
- Secondary painted line: `clamp(1.5rem, 4vw, 3rem)`.
- Body: `1rem` to `1.125rem`, line height `1.5` to `1.65`.
- Metadata: `0.75rem` to `0.875rem`, with moderate tracking and enough contrast.

Avoid squeezing an entire long event title onto one line. Preserve the full accessible name if the visible title uses expressive line breaks. For Devanagari, use normal tracking and generous line height (start around `1.3`); visually inspect above and below the headline bar. Don't split Unicode strings into individual code units for animation. Animate words or complete script runs instead.

## Ornament and material

- **Borders:** combine a sturdy inner rule with a narrow repeated diamond/flower rail. Make corner pieces larger than repeat units so the frame has a beginning and an end.
- **Illustration:** an original outlined object with flat ink fills and one or two hatching/halftone areas works better than ten unrelated cliparts. The included pendant is deliberately a print illustration, not photorealism or an ethnographic replica.
- **Halftone:** keep it in illustrated areas or very lightly over large flat fields. Start with a dot spacing around `0.2rem` and low opacity. Don't place dense dots over body copy, controls, or QR codes.
- **Misregistration:** a subtle second-ink offset of `0.0625rem` to `0.1875rem` can humanize display lettering. Keep it static; animated RGB glitch is a different aesthetic.
- **Paper:** give panels firm edges, selective hard shadows, and restrained scuffing. Avoid a heavy full-screen grunge overlay that lowers text contrast or intercepts clicks.

Original SVG artwork is often the best fit for borders, flowers, arrows, and illustrated objects: sharp at poster size, editable, compact. Raster images can supply authentic photography or collage when their rights and source are clear. Never use the supplied watermarked moodboard as a production asset.

## Useful component translations

| Product need | This visual language |
| --- | --- |
| Hero | Painted announcement board with dominant type and a single pendant/illustration |
| CTA | A paper ticket or signboard tab with a firm outline and a short hard shadow |
| Feature section | An editorial poster panel or an alternating ink field; vary composition with content |
| Prompt/code block | A calm cream typesetter's slip, readable monospace, clear copy button |
| Skill download | A labelled ticket that states the format and has a real download destination |
| Theme switch | Labelled ink swatches with a visible selected state; not an unexplained icon |
| People | Equal-billing credit strip, or authentic credited portraits if supplied |

These are translations, not mandatory components. Don't invent a pricing section, testimonial carousel, or sponsor wall just to fill space.

## What makes it feel generic

Avoid the usual AI landing-page defaults: identical rounded cards under a centered headline, a gradient pill saying "AI-powered," floating abstract blobs, repeated emoji icons, and decorative excess with no scale hierarchy. Also avoid the opposite caricature: every Indian reference motif, flag, temple, film star, and slogan in one image.

If the composition is weak, first change proportions and alignment. Adding more grain or another flower is not a hierarchy fix.
