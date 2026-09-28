---
name: indian-print-maximalism
description: Design expressive websites, event posters, and campaign identities using Indian hand-painted signboard and popular-print influences: layered lettering, ornamental frames, saturated inks, halftone, and intentional collage. Use for Indian maximalist, desi poster, truck-art-inspired, or Full-power Frontend art direction; adapt the composition to the actual brief rather than copying a reference poster.
---

# Indian Print Maximalism

Make it feel art-directed by a print obsessive: a huge painted headline, a framed field of saturated ink, one memorable illustration, tiny typesetter details. The density lives in the edges and large graphic shapes; the message stays unmistakable. This is contemporary Indian popular-print-inspired design, not a claim to represent all Indian visual culture.

## Start with the composition

Read [design.md](references/design.md). Identify the user's message, medium, primary action, and required language. Choose a visual anchor and a limited ink relationship before arranging ornament. For an existing product, preserve its functional structure and requested scope.

For the Full-power Frontend workshop, use these supplied facts only:

- Title: **Full-power Frontend**.
- Organizer: **OpenAI Student Collective**.
- Hosts: **Samarth Ryan Edward** and **Parv Bhawsar**, with equal billing.
- Date, time, venue, registration URL, and GitHub skill URL are not supplied. Do not invent them or imply official OpenAI sponsorship beyond the organizer name.

Other briefs should use their own content, not inherit this event identity.

## The visual contract

- Build hierarchy with scale, ink contrast, and placement. A useful starting point is one oversized headline, one hero object, one border family, and one quieter reading surface. This is a composition heuristic, not a mandatory page template.
- Treat lettering as the lead illustration: a colored face, a narrow contrasting keyline, then a hard offset extrusion. Keep actual text selectable and accessible on the web.
- Use ornament as architecture: floral corner pieces, diamond rails, scalloped nameplates, signboard rules. Repetition should establish rhythm; a few asymmetries supply personality.
- Choose physical-looking effects: two-color halftone, tiny print misregistration, paper edges, flat ink. Never substitute generic neon glow, glass panels, a stock gradient blob, or an identical rounded-card grid for this visual language.
- Let content determine the cultural details. The supplied lime-and-chilli imagery is a legitimate reference motif, not a requirement for every project. Do not collect unrelated regional or sacred symbols as decoration.
- Render real scripts with proper fonts and verified wording. Do not manufacture pseudo-Devanagari by adding bars to Latin letters. Keep conjuncts, matras, and language-specific line height intact. Tamil or another language is not interchangeable with Hindi.

## Resources and routes

- **All visual work:** [design.md](references/design.md), [tokens](assets/token.json), and [source/asset notes](references/sources.md).
- **Websites:** [web-and-motion.md](references/web-and-motion.md); use [variables.css](assets/variables.css) with [printwork.css](assets/printwork.css). The stylesheet is scoped to `.ipm` so gallery sections can coexist with other skills.
- **Tailwind v4:** [theme.css](assets/theme.css) exposes prefixed utilities, such as `bg-ipm-mango` and `font-ipm-display`. Semantic theme changes still use scoped variables from `variables.css`. Do not feed `@theme` directly to a browser.
- **Posters/social artwork:** [poster.md](references/poster.md). Recompose the hierarchy for the output ratio; don't shrink a web page into a poster.
- **Original vector assets:** [flower](assets/motifs/flower.svg), [border tile](assets/motifs/border-tile.svg), and [lime-and-chilli pendant](assets/motifs/lime-chilli.svg). Recolor and vary their use rather than copying the specimen wholesale.
- **Runnable visual example:** [specimen.html](assets/specimen.html) works locally without a build step or external network. It demonstrates type, three ink palettes, keyboard controls, and a printable poster composition; it is not the final workshop website or final promotional poster.

Reference images in `references/images/` are visual study material, not production artwork. See their provenance and reuse boundaries in `sources.md`.

## Units and typography

Use `rem` for CSS type sizes, tracking, borders, gaps, dimensions, shadows, and transform distances. Keep the root font size at the browser default. Unitless line heights, ratios, opacity, rotation angles, percentages, viewport/container-relative fluid terms, and SVG viewBox coordinates are not pixel lengths and need not become rem. Anchor fluid text with rem endpoints.

Bundled Teko and Yatra One have their original font licenses alongside them. Use Teko for condensed monumental type, Yatra One for occasional painted display lettering, and the readable system stack for functional copy. A more fitting licensed font is welcome; do not depend on nonexistent commercial font files. Use one primary display voice per composition, not a font sampler.

The numeric token JSON is the source for the two generated CSS token files. Run `node scripts/build-tokens.mjs` from the skill directory after changing it, then `node scripts/validate.mjs` for token, reference, asset, unit, and contrast checks. `node scripts/test-interactions.mjs` checks the specimen's palette, motion, and copy behavior using DOM doubles; it does not replace browser testing. Token names are `ipm`-prefixed; do not rename another design system's tokens.

## Finish by looking, not just coding

Check the actual render at narrow mobile and wide desktop sizes, plus enlarged text. The headline must remain legible, the primary action must be obvious, and the main reading field must survive with decoration removed. Verify theme controls with keyboard and touch, reduced motion, and focus visibility. Keep critical information out of clipped edges and below usable contrast.

Judge the result against these questions: Does the silhouette have a clear focal point? Does the type feel designed rather than dropped into a template? Do repeated motifs share a drawing language? Is there a quiet place to read? Does the smallest version still communicate the message? Revise the composition if the answer is no.

## Starter prompt

> Use the attached indian-print-maximalism skill to design a frontend for [my idea]. Read SKILL.md and its relevant references, then use the supplied tokens and original motifs as a starting point. Give it expressive layered lettering, a deliberate ornamental frame, one strong graphic focal point, and a calm reading field. Adapt the layout to my content. Use rem, accessible controls, and reduced-motion support. Build and visually test it; don't just describe it. Ask only for genuinely blocking content.

For a GitHub handoff, replace the attachment reference with the real repository link after publication. Do not claim a prompt URL automatically installs a skill or grants repository access.
