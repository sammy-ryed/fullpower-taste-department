# Warped headline

Reference: https://fonts.ninja/ and the user-supplied `warped-headline.png` in this folder. The screenshot establishes a high-contrast serif heading, a coral duplicate behind black letters, uneven displacement, and narrow sliced artifacts. A still image and the site's text extraction do not establish the original animation algorithm, timing, or interaction trigger. The following is an implementation recommendation, not a claim about the site's code.

## Required appearance

Make the headline nearly span its container on a quiet white background. Keep a legible near-black foreground and a sharply colored coral echo peeking above and beside it. Locally offset narrow vertical slices to suggest a warped print or typographic ripple. Avoid a generic blurred shadow, whole-heading wobble, or full-page glitch filter.

Use a high-contrast serif available in the project; a system serif is a fallback, not an exact font match. A suitable starting scale is `clamp(3rem, 12vw, 10rem)` with tight tracking and near-unit leading. Adapt to actual heading length and viewport. Keep UI in the sans-serif stack.

## Suggested implementation

Keep one semantic heading in the DOM and render decorative copies in an `aria-hidden="true"` layer with `pointer-events: none`. Each copy must occupy the same full heading box and inherit identical typography, wrapping, and alignment. Clip copies into roughly 12–24 vertical strips with percentage clip paths. Translate or skew strips independently with a smooth envelope around a moving center; render the coral layer behind the ink layer with a small base offset. Avoid duplicating readable text for assistive technology.

Suggested starting values: coral offset of 0.25–0.75rem; slice displacement up to 0.75rem; skew within about 3 degrees; a single eased entry ripple lasting 700–1100ms. These values are tuning guidance, not source measurements. Maintain a readable base heading beneath the slices. If clipping leaves seams, slightly overlap the strips.

For pointer-capable devices, optionally move the distortion center toward the pointer and settle on pointer exit. Coalesce pointer updates through requestAnimationFrame, keep animation out of framework render loops, and stop work when the heading is offscreen or unmounted. Do not start perpetual idle animation by default. Touch devices can use the one-time entry ripple without requiring hover.

Use transforms for the slice motion. Keep dimensional CSS values in rem; percentages, angles, timing units, and dimensionless animation factors retain their native units. Browser geometry APIs may report pixels internally; this does not require hardcoded pixel dimensions in the stylesheet.

Under `prefers-reduced-motion: reduce`, skip animated entry and pointer distortion. Show a static, restrained coral offset behind a readable foreground. If scripting fails, the base heading must still render. Ensure the hero does not steal pointer or keyboard events from nearby controls. Constrain overflow to the decorative layer and do not clip focus outlines.

## Verification

Inspect the result beside the bundled screenshot: sharp black foreground, visible coral echo, localized slices, and clean white space. Test a short title, a long title, narrow viewports, missing custom fonts, reduced motion, and keyboard navigation. The effect is an interpretation and should not be presented as the original implementation.
