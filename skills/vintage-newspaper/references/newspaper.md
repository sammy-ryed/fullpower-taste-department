# Newspaper composition

Reference: https://www.niccolomiranda.com/ and the user-supplied style extraction. The user explicitly requested a newspaper-based design. The reference's text structure includes featured work, a dominant name, editorial profile sections, and repeated large section titles. The guidance below adapts that direction; it is not a claim to reproduce the site's source code or animations.

## Page anatomy

Use only sections supported by the user's content:

1. Publication header: thin bottom rule, a short contextual label at one side, publication/project identity, and compact navigation. Use actual provided location/date metadata, or omit it.
2. Featured strip: two or three editorial teasers with tightly cropped images, short headlines, and captions. Align neighboring baselines and separate columns with rules. A text-led central teaser can contrast image-led outer columns.
3. Masthead: one dominant word or short title in expressive serif lettering. An ink rectangle with paper-colored type can function as a full-width masthead or later section divider. Keep the user's title legible; do not force a long name into the original word's proportions.
4. Editorial body: an asymmetric two-column lead story, portrait, or description, followed by supporting articles. Use a drop cap for one introductory paragraph where suitable. Preserve the natural source order on narrow screens.
5. Closing strip: simple ruled contact/navigation area or project actions. Avoid adding newsletter forms or payments unless requested.

For the workshop, an example could use Full-power Frontend as publication identity, the skill preview as the lead story, the starter prompt as an editorial excerpt, and download/open actions as clear notices. Actual host names and workshop facts must come from the user's brief.

## Grid and paper

Use the supplied 90rem maximum page width, adaptable outer padding, and about 2.6875rem between major sections. Give columns enough internal breathing room that rules never collide with letters. Use a 0.0625rem rule in Ink or a sufficiently contrasting neutral. Prefer CSS Grid for independent articles; do not flow unrelated cards through CSS multi-columns. On mobile, collapse to a single readable stream and replace vertical separators with horizontal rules.

Use flat warm color by default. A subtle paper-grain asset may be added if available or requested, kept behind content at low opacity with no pointer events. Texture is optional, and no texture asset is bundled. Avoid washed-out text, torn edges everywhere, glossy gradients, or large soft shadows.

## Fonts and images

The custom fonts are not included. The packaged CSS falls back to Georgia/Times-style serif stacks instead of the supplied sans-serif stacks. Where licensed project fonts are available, load them normally and tune layout after loading. Germgoth's fallback is only a legibility fallback; omit the blackletter accent if no suitable font exists rather than pretending the fallback matches.

Keep images sharp-cornered, editorially cropped, and accompanied by useful captions when appropriate. Use the user's project imagery; do not reuse the reference artist's portraits or client work as new portfolio content. If no imagery exists, use a strong text-led editorial composition until assets are provided.

## Corrections to the extraction

- Oversized mastheads are responsive, not mandatory fixed widths or minimum display sizes.
- Compressed leading is reserved for fitted display text; body and prompt copy get readable leading.
- The original JSON contains many measured typography variants; `semanticTypography` supplies a small reusable scale matching CSS. Use those roles first, keeping the historical variants for intentional reference matching.
- The extracted NEW badge on every card is not a universal rule. Use honest metadata and sparse orange accents.
- Thin newspaper rules are allowed and encouraged even where the extraction calls cards borderless. Article boundaries and card outlines serve different purposes.
- Radius tokens remain available, but square imagery and mostly flat article sections carry the newspaper character.
- Keep visible keyboard focus and accessible controls even if this requires larger hit areas or more generous type than a reference measurement.
