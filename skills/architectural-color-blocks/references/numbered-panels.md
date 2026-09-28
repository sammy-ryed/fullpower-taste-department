# The 1–2–3 stacked-panel reveal

Reference: https://the1.amsterdam/. The live page was inspected by scrolling in a desktop browser. Observed: a red panel contains a huge numeral 1 and feature copy; as vertical scrolling continues, a yellow panel bearing 2 moves over it from the right, retaining a narrow red strip at the left; a green panel bearing 3 overlays these, leaving red and yellow strips visible. Short copy sits to the right of each numeral with a thin horizontal rule above. The numbers dominate most of the visible panel height.

The visual behavior is observed. The original library, code, easing, and exact scroll distances were not inspected. The following GSAP recipe is an implementation recommendation. The source has further feature content, but the specifically requested 1–2–3 interaction does not require inventing a fourth scene.

## Structure and layout

Use one outer scroll section, one stage, and an ordered list of three panels. The default HTML/CSS is an ordinary vertical list: each feature stays available with no JS, reduced motion, or on a narrow screen. Each panel contains a numeral, a heading, and short copy drawn from the user's subject. In a workshop demo, suitable feature topics can be chosen from the actual workshop brief; do not copy the property's marketing text.

On desktop only, enhance the stage into a pinned viewport-like area. Stack the panels absolutely with ascending z-index. Keep a deliberate rail width, such as `clamp(2.5rem, 8vw, 8rem)`, but compute actual destinations from the stage width and rail value at setup/refresh. Let panel 1 cover the stage. Panel 2 ends one rail-width from the left; panel 3 ends two rail-widths from the left. Each panel's width is the stage width minus its own rail offset so the right edges align. Clip the decorative moving surfaces within the stage, not the whole page.

Treat numeric glyphs as large graphic forms, roughly `clamp(10rem, 50vw, 42rem)` subject to available height and actual font metrics. Use rem/percent-based styling; runtime geometry may be measured in browser coordinates. A two-column inner layout gives the numeral most space and reserves a narrower readable text column. Keep copy within view rather than copying the reference's clipped viewport text. If the panel cannot contain its text at zoom, fall back to vertical flow.

## Timeline recommendation

1. Register ScrollTrigger and create a root-scoped GSAP context/matchMedia setup after layout-critical fonts and images settle.
2. Start with panel 1 visible, later panels positioned just beyond the right stage edge. Use xPercent transforms or geometry-derived transform values, not animated widths or left offsets on every frame.
3. Build one timeline with short holds: read 1, slide 2 to its rail position, read 2, slide 3 to its rail position, read 3. Use linear scrubbed movement with a modest scrub smoothing value around 0.4–0.8s. Preserve enough scroll distance for each short text block to be read; a starting budget is roughly one stage height per transition plus holds.
4. Pin only the stage for the bounded sequence, preserving natural scroll before/after it. Keep pin spacing. Avoid global scroll hijacking or a mandatory smooth-scroll library.
5. Let reversing scroll reverse the same timeline. Do not create a new animation on every wheel event. Use refresh-safe function values and invalidateOnRefresh for responsive geometry.

The physical panel overlap supplies the transition: avoid crossfading all panels, replacing the number's text, or turning it into a generic carousel. Keep the paint colors flat and the typography steady; no extra spin, bounce, blur, or parallax is needed to make this sequence strong.

## Interactions and accessibility

Prefer static text in moving panels and put core actions just outside the pinned scene. If a moving panel contains interactive elements, synchronize hidden panels' focusability with their visible state and ensure focusing an action brings its panel into view. Never hide the currently focused element beneath a new panel. Avoid live announcements on every scroll frame; use a meaningful ordered-list structure and one semantic label per feature. Decorative duplicate numerals should be hidden from assistive technology.

For reduced motion or small/short viewports, omit pinning and transforms and render panels vertically in 1–2–3 order. Keep their colors and large numerals so the identity survives. Provide visible focus and readable contrast. Green uses white essential text rather than the low-contrast dark copy seen in the reference.

## Cleanup and verification

Scope selectors and ScrollTriggers to this skill's root. On unmount or media-query change, revert only owned animations, restore inline styles, remove pin spacers through normal trigger cleanup, and remove any custom listeners. Never kill all page ScrollTriggers. Test remounts, orientation changes, font loading, resizing during the second panel, forward/backward scrolling, and text zoom. Verify the final panel exits into normal page flow without a jump or excess blank scroll space.

GSAP lifecycle guidance: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/ . Confirm APIs against the installed version before implementation.
