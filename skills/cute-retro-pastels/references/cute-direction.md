# Cute, calm, and nostalgic

Reference: https://drinkolipop.com/ and the user-supplied style extraction. The brief explicitly requests a very cute interpretation. The recipes below are authored direction, not a claim about the reference site's exact motion or current layout.

## Composition recipes

- Hero: warm cream page, inset mint panel, a round product/illustration medallion, short dark-green retro headline, and one forest-filled pill action. Keep the visual and text balanced; stack them on small screens rather than squeezing a desktop split.
- Item collection: pastel cards with one clear subject per card, a friendly name, a short sans-serif description, and a purposeful action. Use circles or softly rounded image frames. Keep related items' colors consistent between previews and detail views.
- Feature: circular illustration beside a short heading, optional wine-colored eyebrow, and relaxed body copy. A tiny decorative cherry or star can add charm without interfering with content.
- Workshop prompt: a rounded cream note on mint, or a mint note on cream. Use a retro title, a pastel label, readable multiline sans-serif prompt text, and a forest-teal copy button. Success feedback can read `Copied!` with a small checkmark; preserve the prompt and keyboard focus.

## Shape and type

Favor plump letterforms and soft curves. The headline can be enthusiastic without all-caps shouting. Use friendly, direct copy tied to the user's topic; a small playful phrase is enough. Avoid making essential instructions cryptic or filling every line with puns.

Keep hero corners at 1.5rem, cards around 1rem, and circles geometrically round. True circles use equal aspect ratio and 50% radius. Pill controls use generous horizontal padding and a minimum comfortable hit area. Let labels wrap or grow rather than clipping long text into a fixed-height pill.

## Gentle motion suggestions

- Item artwork rises about 0.25rem and rotates at most 2 degrees on fine-pointer hover, settling within roughly 200–300ms. Animate an inner wrapper so the hit target stays still.
- A primary button compresses to about 0.98 on press, then settles. Keep its label steady and focus outline visible.
- An optional section entrance travels about 0.5rem while fading in over 350–450ms. Content is visible by default if scripting fails. Do not stagger long prompt text letter by letter.
- A small decorative sparkle may appear once near a successful action. Mark it aria-hidden and prevent it from intercepting pointer events. Never rely on it as the only success message.

Use only a few of these details. Honor `prefers-reduced-motion` with immediate state changes and static decoration. Avoid pinned scenes, continuous wobbling, frantic color cycling, or giant scroll transitions; the brief's distinctive personality here is softness.

## Color and readability

Forest Ink works as heading/label ink on cream, mint, and the supplied pastel cards. Charcoal is the standard paragraph ink. Primary buttons use white on forest; secondary buttons can use forest on Bright Teal. Keep Wine Press as a sparse accent, not a second large dark background. Check text, form boundaries, and focus outlines in their actual contexts.

Tiny decorative stars are not review ratings. If real reviews are absent, use a flower or another unambiguous ornament instead of a five-star row that implies customer evidence. Likewise, cute packaging does not authorize invented nutritional or health claims.

## Responsive and accessible

Maintain comfortable line lengths and generous line height. Preserve image subjects when changing aspect ratios. Keep content order logical on mobile, with actions next to the copy they act on. Ensure card links and buttons have distinct semantics without nesting interactive controls. For a horizontal card rail, allow touch scrolling, expose navigation controls when useful, and retain visible focus. All information remains available when motion is off.
