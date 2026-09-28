# Web implementation and motion

## Scope and integration

Keep the user's framework. This skill doesn't require replacing an application or adding a build system. Import `variables.css` and `printwork.css` inside the app's established CSS pipeline. Wrap just the designed section in `.ipm`; use `data-ipm-palette="mango"`, `"indigo"`, or `"gulabi"`. The optional specimen CSS is layout-specific, not a required global stylesheet.

Use `theme.css` only with Tailwind v4 processing. It supplies `ipm`-prefixed design utilities. Interactive palettes rely on the scoped semantic properties in `variables.css`, not on replacing all root variables. In a scroll gallery, keep each skill's background and foreground local to its section so one style never corrupts another.

Preserve browser-default root sizing. Rem lengths, percentage layout, unitless SVG viewBox geometry, and fluid viewport terms serve different purposes. Use rem endpoints in `clamp()`. Don't convert SVG path coordinates or animation timing into rem. Use rem strings or percentage transforms for GSAP translation rather than implicit pixel distances.

## Motion language: paper, ink, and pendulums

Motion should have a physical premise. Pick one major entrance and two minor responses; more is not automatically better.

| Moment | Suggested treatment | Timing |
| --- | --- | --- |
| Hero reveal | Title settles from a slight skew/vertical offset, then the credit strip appears | `0.65s` to `0.9s`, one time |
| Hanging motif | Dampened swing around the string attachment point; no full rotations | `1.2s` to `1.8s`, one time |
| Ticket hover/focus | Small lift and reduced shadow, as if a paper edge has been picked up | `0.18s` |
| Palette change | Ink colors change together; illustration remains stable | Instant or up to `0.22s` |
| Section transition | Framed panel enters the reading field; optional short, bounded parallax | `0.5s` to `0.8s` |

Use GSAP + ScrollTrigger for a genuinely choreographed long-form web page when the project allows dependencies. Native CSS/Web Animations suffice for the isolated specimen. Do not claim the specimen contains GSAP: it is dependency-free. Don't add scroll smoothing, scroll hijacking, or pinned sections just to make the site feel expensive.

With GSAP, create animations within a component-scoped `gsap.matchMedia()` callback. Test `(prefers-reduced-motion: no-preference)` and clean up with `mm.revert()` on unmount. Add explicit cleanup for event listeners. Animate `.ipm` descendants, never every `h1` or `.card` in the document. Use transforms and opacity; avoid repeated large filters or text-shadow animation. See the [official matchMedia documentation](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) for lifecycle behavior.

Make content visible in initial HTML/CSS. Register a reveal only after its animation engine has loaded, so a failed dependency never leaves invisible content. Fonts must load before measuring a headline or computing ScrollTrigger geometry. Reduced motion gets the final composition immediately, without pendulum, zoom, scrubbing, or parallax. A user motion toggle must also stop already-running animations, not just prevent future ones.

## Palette interaction

Use labelled buttons with `aria-pressed` for a small set of palettes, or a native radio group. Set all semantic inks together. Show selection with text/checkmark/border as well as hue. Focus remains visible on every palette. A theme change must not move content or alter the accessible name of the main heading.

If hover previews a colorway, make it an enhancement for `(hover: hover) and (pointer: fine)`: restore the selected palette on pointer leave, keep keyboard preview separate, and let click/tap commit the selection. Never require hover to read content. Avoid saving preferences unless the product needs it; a specimen can simply reset on reload.

## Responsive composition

At narrow widths, preserve the headline first. Collapse credits and controls into normal flow; reduce rail thickness and relocate an overlapping stamp below the title. The hero object can move beside a subheading or below the main title instead of covering text. Do not solve layout overflow by hiding the entire page's horizontal overflow.

At enlarged text sizes, display lettering can gain another line; body text and buttons must reflow. Avoid fixed-height text panels. Touch targets should be at least `2.75rem` in their smaller dimension as a practical design target. Native anchors navigate, buttons act, and copy/download controls must perform the advertised action.

## Visual and functional acceptance

- Test at about `20rem`, `24rem`, `48rem`, and `90rem` viewport widths, plus a doubled root font size or equivalent browser text zoom. The actual breakpoint follows content.
- No unintended horizontal scrolling, clipped words, or illustration collisions. The poster frame must not cut off focus outlines.
- Check ordinary text at 4.5:1, large text at 3:1, and meaningful control boundaries at 3:1. Decorative accent pairs are not text pairs.
- Read the page with CSS decoration removed: heading order and action labels should still make sense.
- Test the swatches, links, and motion toggle with keyboard; verify a touch device has access to the same features.
- Check reduced-motion behavior and JavaScript-disabled fallbacks. No flashing or automatic audio.
- Limit first-screen decoration: reuse SVG motifs, cap continuous work, and remove unused font files from production builds. The bundled fonts are full reference files, not optimized web subsets.

For a GitHub/ChatGPT/Codex handoff, use a verified supported route at implementation time. Show a copyable starter prompt as a fallback. Opening a chat with a URL does not prove the linked skill was fetched or installed.
