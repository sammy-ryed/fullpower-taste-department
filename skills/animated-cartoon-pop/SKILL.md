---
name: animated-cartoon-pop
description: Build exuberant cartoon-poster frontends with enormous heavy type, flat violet and candy-color stages, illustrated characters, GSAP choreography, scroll scenes, and hover-driven theme changes. Use when the user requests Flying Papers style or a playful, highly animated frontend with bold typography and responsive color interactions.
---

# Animated Cartoon Pop

Make a confident, playful interface with a clear visual idea on each screen: huge type, a character or graphic object, and a purposeful action. The user explicitly wants an amplified motion interpretation using GSAP. Treat animation and reactive color as part of the design, not polish added after a static layout.

## Read first

Read [design.md](references/design.md), [motion direction](references/motion.md), and [interactive color](references/color-interactions.md). Use [token.json](assets/token.json) and [variables.css](assets/variables.css); use [theme.css](assets/theme.css) for an existing Tailwind v4 project. Preserve the user's framework. These skill instructions and motion/color references override conflicting extracted rules such as an unchangeable violet canvas.

The original measured typography variants remain in JSON; `semanticTypography` matches the reusable CSS scale. Use semantic roles first. The added `prose` role is for readable paragraphs and prompts, distinct from compact display-like source body styles.

## Art direction

- Start on Dusk Violet with giant heavyweight lettering, contrasting flat cards, and generous negative space. Use pink, matcha, yellow, and lilac as coordinated alternate stages. Favor one dominant background and one strong accent per scene rather than using every token simultaneously.
- Set major headlines in ObviouslyVariable at 800–900 if available. Degular serves readable UI and prose, Bergen Mono supplies small stamped labels, and DegularDisplay-Bold handles short actions. Do not assume font files or variable axes are installed; no font binaries are bundled. Tune available fallback fonts rather than promising an exact match.
- Use positive 0.02em tracking on fluid display type and disable contextual alternates where supported. A 21.3125rem display is a desktop reference. Start fluid headings around `clamp(3.5rem, 20vw, 21.3125rem)` and adapt to the actual words. Increase compressed line heights on wrapped or narrow headings rather than clipping essential content.
- Characters use thick outlines, a few flat fills, and expressive silhouettes. Place them behind or between heading lines, with clear layering. Use provided or original artwork; do not copy the reference site's branded mascot or product images. If artwork is absent, an original CSS/SVG paper character is a suitable code-native option.
- Cards use 0.375rem corners, actions use 6.25rem pill radii, and surfaces stay flat. Depth comes from overlap and motion, not blur, shadows, or glass. Keep character faces, key copy, and controls unobscured.
- Use rem for dimensional styles, preserving ratios, percentages, em tracking, angles, and time units. The conversion base is sixteen CSS pixels per rem; do not lock the root font size. Numeric spacing names preserve source labels and are not standard Tailwind multipliers.

## Required motion direction

Use GSAP core timelines and ScrollTrigger for new full-page builds. Reuse an existing installation or add the dependency through the host project's package manager. The skill archive does not bundle GSAP. If dependency installation is unavailable, report that limitation and retain a working static composition rather than claiming GSAP animation is running.

For a full page or workshop showcase, implement a distinct entrance, a scroll-based scene reveal, responsive hover/focus color changes, and tactile button/card feedback. Coordinate them as one sequence. Use the motion reference's larger staged moves, squashed paper-character entrance, staggered headline masks, and rolling labels where suitable. Keep at most one major motion event dominant at a time. A small component request should receive the relevant interaction without introducing an unrelated full-page sequence.

Color changes must work on hover, keyboard focus, and deliberate touch selection. Apply them only within this theme's root. A color preview must not replace the user's content, navigate on hover, clear a prompt, or affect the neighboring skill sections. Follow the ownership and restoration rules in the color reference.

## Resolve source conflicts

- Violet is the initial scene, not an immutable page background: changing theme colors is an explicit user requirement.
- Cream filled pills are allowed primary actions despite the extraction's contradictory prohibition on filled CTAs. Yellow outlines are decorative unless they meet control contrast; provide a legible ink/cream button label and boundary when necessary.
- The source's tiny caption and sub-unit body leading are visual measurements, not defaults for navigation or long copy. Use at least comfortable label sizing and the 1rem/1.5 prose token for workshop prompts. Keep prompt text selectable and undistorted.
- Yellow and cream on the original violet may fail text contrast. Use tested combinations from the color guide for essential text, or put it on a contrasting panel. Do not assume large lettering automatically resolves insufficient contrast.
- Use the visual style for the user's product; do not add an age gate, smoking products, shop, or reference-site marketing claims to a student workshop or unrelated idea.

## Integration and verification

In the workshop page, keep CSS variables, GSAP selectors, pointer handlers, and ScrollTriggers scoped to the Flying Papers section. Do not reset document styles or destroy other sections' triggers. Preserve the host's native scrolling and navigation.

Use `gsap.matchMedia()` and scoped cleanup. On reduced motion, show all content immediately, disable pinning/parallax/magnetic motion and repeated loops, and change colors instantly. On touch, replace hover previews with explicit palette controls. Keep real focus indicators, comfortable hit targets, and no rapidly flashing palette cycling.

Verify entry, scrolling both directions, fast hover between targets, focus versus hover conflicts, touch selection, resize, reduced motion, unmount/remount, missing fonts, and no-JS visibility. Check active text/control contrast and text zoom. Stop offscreen loops and avoid duplicate listeners. Report animations not browser-tested honestly.
