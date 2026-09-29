# Fullpower Frontend — The Taste Department

Seven ways to stop making the same website.

**[Open the live gallery →](https://fullpower-taste-department.vercel.app/)**

A scroll-through library for the **Full-power Frontend** workshop, by **OpenAI Student Collective**. Hosted by **Samarth Ryan Edward** and **Parv Bhawsar**.

## Pick a skill. Take it home.

Click a style name to read its instructions. The download links give you the complete bundle, not just the Markdown.

| Skill                                                                     | What you're getting                                | Download                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Indian print maximalism](skills/indian-print-maximalism/SKILL.md)        | Truck-art energy, painted type, mango + maroon.    | [ZIP](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/indian-print-maximalism.zip) · [.skill](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/indian-print-maximalism.skill)       |
| [Minimal type gallery](skills/minimal-type-gallery/SKILL.md)              | White space, big serifs, coral type distortion.    | [ZIP](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/minimal-type-gallery.zip) · [.skill](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/minimal-type-gallery.skill)             |
| [Colorful type poster](skills/colorful-type-poster/SKILL.md)              | Giant words and switchable two-colour palettes.    | [ZIP](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/colorful-type-poster.zip) · [.skill](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/colorful-type-poster.skill)             |
| [Vintage newspaper](skills/vintage-newspaper/SKILL.md)                    | Warm paper, loud mastheads, proper columns.        | [ZIP](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/vintage-newspaper.zip) · [.skill](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/vintage-newspaper.skill)                   |
| [Animated cartoon pop](skills/animated-cartoon-pop/SKILL.md)              | GSAP paper flights, chunky type, playful palettes. | [ZIP](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/animated-cartoon-pop.zip) · [.skill](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/animated-cartoon-pop.skill)             |
| [Architectural colour blocks](skills/architectural-color-blocks/SKILL.md) | Concrete, flat colour, the big 1–2–3 reveal.       | [ZIP](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/architectural-color-blocks.zip) · [.skill](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/architectural-color-blocks.skill) |
| [Cute retro pastels](skills/cute-retro-pastels/SKILL.md)                  | Cream, forest green, soft corners, tiny treats.    | [ZIP](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/cute-retro-pastels.zip) · [.skill](https://github.com/sammy-ryed/fullpower-taste-department/raw/refs/heads/main/public/downloads/cute-retro-pastels.skill)                 |

Each bundle contains `SKILL.md`, design notes, theme CSS, CSS variables, and design tokens. Some also include motion recipes, palette controls, original illustrations, and licensed fonts.

**Which download?** Use **ZIP** unless your app explicitly accepts `.skill`. Both contain the same ZIP-format archive. The `.skill` extension is not a universal installer.

## Use it with your own idea

1. Download and extract a bundle, or give your coding assistant the linked `SKILL.md`.
2. Ask it to read the linked references and assets too.
3. Paste this, replace the brackets, and let it build:

```text
@Sites — use the [skill name] frontend skill to build my website in ChatGPT.
Read its SKILL.md and linked references/assets before coding.
If you cannot access the files, ask me to attach the ZIP.

Follow the skill's design and motion guidance. Use rem-based sizing,
responsive layouts, keyboard-accessible controls, and reduced-motion fallbacks.
Keep my content and requirements. Don't invent a different project.
Use the supported @Sites stack. For LLM writing, use ChatGPT;
if direct in-site generation is unavailable, provide a clear
copy-prompt / open-ChatGPT / paste-result handoff. Do not fake live AI.

My request:
[Enter your prompt here]
```

On the website, **Take this to GPT** helps you copy the prompt and then open ChatGPT. Nothing is auto-sent. The optional desktop handoff needs a compatible installed app. You can always copy the prompt manually instead.

## No idea? Steal a brief.

[Open the four build briefs](https://fullpower-taste-department.vercel.app/#build-ideas):

- **Breaking News: You Did One Thing** — turn an ordinary incident into a LinkedIn victory lap, absurd Reddit confession, or newspaper front page.
- **Emotional Support Beverage** — mix a mood into a fictional drink and export its label.
- **The Personal Rebrand Emergency Kit** — invent a new persona and business card after a tiny embarrassment.
- **The Museum of Almost** — curate unfinished projects like expensive art.

Each brief has an example, must-have interactions, a stretch challenge, all seven skills in a picker, and room for your own instructions. Leave the picker empty to keep `[add skill here]` in the prompt. These are workshop briefs, not four finished apps embedded in the gallery.

All gallery build prompts mention `@Sites`. Paste into ChatGPT and select Sites from the mention picker if needed. [Sites availability and workflow](https://learn.chatgpt.com/docs/sites) depend on your account. The prompts ask ChatGPT to check supported generation capabilities; where direct in-site AI writing is unavailable, they specify a transparent copy-and-paste ChatGPT handoff, not browser API keys or fake AI results.

## Run the website

Use **Node.js 22** and npm.

```sh
git clone https://github.com/sammy-ryed/fullpower-taste-department.git
cd fullpower-taste-department
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```sh
npm run check    # TypeScript + automated checks
npm run build    # Static production output in out/
npm run verify:build # Verify exported assets, downloads, anchors, and metadata
npm start        # Serve that production output locally
```

No database, API keys, account system, or tracking scripts. Fonts and artwork used by the page are local.

## Deploy on Vercel

Import this GitHub repository as a **Next.js** project. Set the root directory to `./` (the repository root, not `site/`), use **Node.js 22**, and keep `main` as the production branch.

The checked-in `vercel.json` runs `npm ci`, then the type checks and tests before building. It also sets security headers and makes both bundle formats download as ZIP archives. Vercel's Git integration deploys subsequent pushes automatically. See [Vercel's Git deployment guide](https://vercel.com/docs/git).

The app exports static files. Do not add server-only features without updating that deployment model.

Optional build-time configuration:

| Variable                      | When to use it                                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_SKILLS_REPO_URL` | Point starter prompts at your fork; otherwise this repository is used.                                                   |
| `NEXT_PUBLIC_SITE_URL`        | Set your canonical URL on another host or a custom domain. Vercel's production URL is used automatically when available. |

These are public values, not secrets. See [.env.example](.env.example).

## Where things live

| Folder/file                                      | Purpose                                                      |
| ------------------------------------------------ | ------------------------------------------------------------ |
| [skills/](skills/)                               | The source of truth for all seven downloadable skills        |
| [public/downloads/](public/downloads/)           | The fourteen ready-to-use archives                           |
| [components/gallery.tsx](components/gallery.tsx) | Sections, prompts, interactions, and GSAP scenes             |
| [app/globals.css](app/globals.css)               | Section styles, selection, scrollbars, responsive layout     |
| [lib/skills.ts](lib/skills.ts)                   | Skill names, descriptions, and starter prompts               |
| [public/art/](public/art/)                       | Page artwork and licensed fonts                              |
| [tests/](tests/)                                 | Content, bundle, accessibility-structure, and release checks |

### Update a skill

Edit its folder under `skills/`, then rebuild the archives with PowerShell 7:

```sh
pwsh -File scripts/prepare-skills.ps1
npm run check
npm run build
```

The packaging script works from a fresh clone. It refuses to include reference screenshots or moodboards. Commit the source changes **and** the rebuilt files in `public/downloads/`.

## Motion, access, and browser behaviour

- Native scrolling; no wheel interception.
- Seven navigation treatments and six reversible section transitions.
- System reduced-motion preferences take priority. The **Motion off** switch also removes pins and decorative transitions.
- Phone and short-screen layouts use normal vertical flow.
- Keyboard focus indicators, a skip link, Escape-dismissable native dialogs, and a stable scrollbar gutter.
- Text selection and scrollbars match the current design. Decorative duplicate lettering is excluded from copied selections.
- Clipboard failures leave a manual selection/copy option.
- Core content and download links are rendered into HTML. Interactive palettes, menus, copy controls, and animation need JavaScript.
- OS/browser settings can hide native scrollbars until scrolling; no fake scrollbar is substituted.

## Credits and reuse

This is an independent educational style library, not an affiliation with the reference sites. Credits and design sources remain inside each skill's documentation.

The Indian print motifs, paper character, and flower artwork are original project assets. **Teko** and **Yatra One** include their SIL Open Font License files. Other typography uses system font stacks.

Private reference screenshots, supplied moodboards, and watermarked artwork are not distributed here. Historical design notes may mention those local-only references; the instructions work without them. Do not assume this repository grants rights to third-party brands, photos, or proprietary fonts.
