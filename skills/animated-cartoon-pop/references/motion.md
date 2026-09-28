# GSAP motion direction

Reference: https://www.flyingpapers.com/. The user requests its animated, color-reactive character plus a more exuberant interpretation. The text extraction does not reveal the original timing, triggers, or implementation. These are authored motion recipes, not a verified reconstruction of the site's source animation.

## Choreography

| Moment | Suggested motion | Starting timing |
| --- | --- | --- |
| Enter the stage | Headline words rise from local masks at yPercent 105 to 0; small rotation settles; UI appears last | 0.8–1.1s, word stagger 0.05–0.09s, power4.out |
| Character arrives | Paper figure flies diagonally from 4rem away, rotates from about -12 degrees, briefly squashes then settles | 0.9s total, back.out(1.4), small 1.06/0.94 scale overshoot |
| Scroll into story | Cards fan from modest alternating rotations while a headline reveals; character travels between two meaningful positions | 0.7–1s entrance or short scrubbed scene |
| Hover a category | Stage changes to the associated palette; decorative character turns or leans toward the target; the label rolls upward inside its own mask | 0.25–0.4s transforms, power3.out |
| Press an action | Inner artwork compresses to roughly 0.96 then releases; the real hit area stays fixed | 0.1s press, 0.25s release |
| Closing statement | One oversized typographic reveal, character landing, and a clear final action | Under 1.2s; no looping interruption of reading |

These values are starting points. Adjust to content, not a mandatory count of animated elements. The desired personality comes from anticipation, overshoot, and strong staging rather than simultaneous random movement.

## Build the motion layers

Keep text and controls visible in base HTML/CSS. After initialization, create timelines using from/fromTo or scoped setup. If splitting headings into decorative words, keep one readable semantic heading, hide duplicate visual layers from assistive technology, and preserve inline links. Do not split the starter prompt into animated letters. Mask only the animation layer, not button focus outlines.

Use separate transform wrappers for scroll movement and hover/tilt so concurrent tweens do not fight over the same transform. Drive hover effects with reusable timelines or targeted overwrite behavior. Do not kill all root animations when merely changing a palette.

Use `gsap.registerPlugin(ScrollTrigger)` before creating scroll triggers. Select descendants of the skill root, and create timelines inside a scoped `gsap.context` or `gsap.matchMedia` handler. For React, use a client-side lifecycle with cleanup or the existing project's GSAP hook. Track event-triggered tweens in that context or explicitly kill those owned tweens on cleanup. Remove DOM listeners as well; reverting a timeline does not remove listeners.

For scroll scenes, prefer section entry reveals before pinning. One short desktop pin can make a paper-flight sequence effective, but remove it on narrow screens and reduced motion. Preserve native scrolling and sensible document height. Avoid mandatory smooth-scroll dependencies. After relevant fonts/images change layout, refresh this layout's triggers at a controlled point; never refresh on every scroll event.

Add pointer-following motion only for `(hover: hover) and (pointer: fine)`. Keep the button's actual hit target stationary and move only its decorative inner element, using rem-bounded movement or percentages. Coalesce updates with a GSAP quick setter/tween helper. Stop updates on pointer leave and when offscreen. Avoid state updates on every pointer event in a component framework.

## Responsive and reduced motion

Use `gsap.matchMedia()` to separate full-motion desktop, simpler mobile, and reduced-motion setups. Its matched setup tracks GSAP animations for reversion when conditions change. Return cleanup for your own listeners, observers, timers, and event-driven effects, then call `mm.revert()` on final unmount. Do not remove another section's ScrollTriggers.

Reduced motion: no flying entrance, pinned sequence, parallax, tilt, or endless drift. Render the final layout and keep palette changes instantaneous. Do not leave content at opacity zero after reverting or changing a media query. Any optional looping marquee needs a pause mechanism, stops offscreen, and becomes static with reduced motion.

## Sources for implementation

- [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/): responsive setup, scoped selectors, and automatic reversion. Check the installed GSAP version before using APIs.
- Consult the installed dependency's official documentation for ScrollTrigger and any optional text plugin before adding it. GSAP core and ScrollTrigger are enough for this direction; no text-splitting or smoothing plugin is mandatory.

## Verify behavior, not just code

Inspect real browser playback with the intended fonts and artwork. Test interrupted transitions, navigation away and back, repeated mounts, scroll in both directions, keyboard traversal, focus rings, long headings, reduced motion toggled during use, and pointer changes. Check that animations do not move clickable targets away from the user or cause horizontal document overflow.
