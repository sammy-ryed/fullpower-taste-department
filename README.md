# Fullpower Frontend — The Taste Department

Seven frontend design skills, one deliberately opinionated scroll. Built for the **Full-power Frontend** workshop by **OpenAI Student Collective**, hosted by **Samarth Ryan Edward** and **Parv Bhawsar**.

## Run locally

Requires Node.js 20.9 or newer (tested on Node 22).

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. `npm run build` produces the static site in `out/`. Serve that folder using any static host, or import this repository into a Next.js-compatible host. No backend, tracking, or API keys are required.

```sh
npm run typecheck
npm test
npm run build
```

## The seven

1. Indian print maximalism — the opening painted poster.
2. Minimal type gallery — a sliced coral type echo.
3. Colorful type poster — seven contrast-checked colorways.
4. Vintage newspaper — a ruled broadsheet.
5. Animated cartoon pop — original paper mascot, GSAP entrance, hover/focus/tap palettes.
6. Architectural color blocks — a bounded desktop 1–2–3 stacked-panel scroll.
7. Cute retro pastels — a quiet, soft landing.

Design instructions are in `skills/<name>/SKILL.md`. Downloadable packages live in `public/downloads/`. Each `.skill` is the same ZIP-format archive as its `.zip` counterpart; it is not a universal installer. Extract the ZIP or use an app that supports importing these bundles.

The original local library is preserved outside this app. To refresh public packages from its sibling folders, run `pwsh -File scripts/prepare-skills.ps1`. The script excludes reference screenshots and supplied moodboards. Some historical reference notes mention those local-only images; they are not needed to use the design instructions. Do not republish artwork or proprietary fonts from the inspiration sites.

## AI handoff

Each prompt links to this public repository. The ChatGPT action copies a prompt and opens ChatGPT in a separate, explicit step. It does not auto-send or install a skill. The desktop action uses the documented `codex://new?prompt=...` route to prefill a compatible installed app. If remote files cannot be read, attach the ZIP. See [official desktop command reference](https://learn.chatgpt.com/docs/reference/commands).

Set `NEXT_PUBLIC_SKILLS_REPO_URL` before building to use a fork's GitHub URL. The default is https://github.com/sammy-ryed/fullpower-taste-department.

## Motion and accessibility

Native scrolling, no wheel interception. GSAP is scoped and reverted on media changes/unmount. The header has a motion-off switch; system reduced-motion preferences take precedence. The architectural panels return to ordinary vertical flow on narrow or short screens and when motion is disabled. All essential content is visible without animation. Native dialogs provide keyboard focus containment and Escape dismissal. Downloads remain ordinary anchors.

## Credits and rights

Descriptions use the supplied behuman writing guidance. References are credited in each section and skill. The page is an independent style study; it is not affiliated with Fonts Ninja, Good Glyphs, Miranda, Flying Papers, The1, or OLIPOP.

Teko and Yatra One are bundled with their SIL Open Font License files. Other fonts use local system stacks. The lime/chilli and border motifs are original assets from the Indian Print Maximalism skill; the paper character and flower illustrations were authored for this page. Third-party reference images and watermarked moodboards are not included in this public repository. No blanket license is applied to third-party materials.
