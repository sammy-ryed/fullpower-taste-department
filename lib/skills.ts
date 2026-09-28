export const repository =
  process.env.NEXT_PUBLIC_SKILLS_REPO_URL ||
  "https://github.com/sammy-ryed/fullpower-taste-department";
export const skills = [
  {
    slug: "indian-print-maximalism",
    short: "Print shop",
    name: "Indian print maximalism",
    source: "The workshop original",
    url: "https://openai-student-collective-srmist.vercel.app/collabs",
    color: "#ffcc32",
    description:
      "Your website just honked outside. Hand-painted headlines, mango-yellow paper, ornamental borders, and enough confidence to put its own name on a truck. Use it when “a little more subtle” sounds like a threat.",
    idea: "Build a single-page website for a student-run midnight chai club.",
    direction:
      "Use Indian Print Maximalism: layered painted lettering, an ornamental frame, mango and maroon inks, and one original lime-and-chilli motif. Keep the reading areas quiet.",
  },
  {
    slug: "minimal-type-gallery",
    short: "Type gallery",
    name: "Minimal type gallery",
    source: "Inspired by Fonts Ninja",
    url: "https://fonts.ninja/",
    color: "#ee585a",
    description:
      "One huge headline. An alarming amount of white space. This layout owns a chair you’re not allowed to sit on. Crisp type, quiet controls, and a coral warp that makes the letters briefly question their career.",
    idea: "Build a portfolio for an independent type designer.",
    direction:
      "Use Minimal Type Gallery: white canvas, near-black typography, a coral echo, a sliced warped serif headline, and generous spacing.",
  },
  {
    slug: "colorful-type-poster",
    short: "Color riot",
    name: "Colorful type poster",
    source: "Inspired by Good Glyphs",
    url: "https://goodglyphs.com/",
    color: "#c7ffcd",
    description:
      "Small type has been asked to leave. Giant words take over the room, the buttons look like punctuation, and the whole thing can change its outfit without a single layout shift. Go on. Press the color button.",
    idea: "Build a poster-like website for a campus design swap meet.",
    direction:
      "Use Colorful Type Poster: oversized lightweight uppercase type, flat two-color palettes, an inverted specimen band, and a working accessible color-cycle button.",
  },
  {
    slug: "vintage-newspaper",
    short: "The broadsheet",
    name: "Vintage newspaper",
    source: "Inspired by Miranda",
    url: "https://www.niccolomiranda.com/",
    color: "#cdc6be",
    description:
      "BREAKING: local student discovers a font with serifs. Warm paper, enormous mastheads, proper columns, and thin rules doing an unreasonable amount of work. Your portfolio now looks like it has an editor who smokes outside.",
    idea: "Build an editorial portfolio for a student photographer.",
    direction:
      "Use Vintage Newspaper: parchment, expressive serif mastheads, ruled editorial columns, a drop cap, and one restrained orange stamp. No invented reviews or awards.",
  },
  {
    slug: "animated-cartoon-pop",
    short: "Cartoon brain",
    name: "Animated cartoon pop",
    source: "Inspired by Flying Papers",
    url: "https://www.flyingpapers.com/",
    color: "#8584bd",
    description:
      "This one ate the brief. Now it’s bouncing around in a purple room. The paper flies, the type gets out of its way, and you can try a new color just by hovering. Switch motion off if the little guy gets on your nerves.",
    idea: "Build a playful landing page for an independent animation club.",
    direction:
      "Use Animated Cartoon Pop with GSAP and ScrollTrigger: oversized chunky type, an original paper mascot, a choreographed entrance, and hover/focus/tap palette controls. Honor reduced motion.",
  },
  {
    slug: "architectural-color-blocks",
    short: "Big concrete",
    name: "Architectural color blocks",
    source: "Inspired by The1",
    url: "https://the1.amsterdam/",
    color: "#fa4d43",
    description:
      "The headline has planning permission. Huge numerals and flat slabs of color slide into place like somebody gave a building a scroll wheel. No shadows. No tiny decorative nonsense. Just very large things being very sure of themselves.",
    idea: "Build a website for a three-day student architecture exhibition.",
    direction:
      "Use Architectural Color Blocks: concrete gray, massive regular-weight type, thin rules, and a desktop scroll-driven 1–2–3 overlapping panel reveal. Stack the panels on mobile and with reduced motion.",
  },
  {
    slug: "cute-retro-pastels",
    short: "Soft serve",
    name: "Cute retro pastels",
    source: "Inspired by OLIPOP",
    url: "https://drinkolipop.com/",
    color: "#d3e8e3",
    description:
      "A small treat for your eyeballs. Cream paper, forest-green lettering, soft pastel labels, and buttons shaped like they’d offer you the last biscuit. Perfect for the idea in your notes app that deserves to be ridiculously lovable.",
    idea: "Build a small storefront for a weekend cookie pop-up.",
    direction:
      "Use Cute Retro Pastels: cream and forest teal, a plump retro serif, mint panels, pastel product cards, original little illustrations, and gentle hover motion. Keep it warm and readable.",
  },
] as const;
export type Skill = (typeof skills)[number];
export function starterPrompt(skill: Skill) {
  const location = repository
    ? `Read ${repository.replace(/\/$/, "")}/blob/main/skills/${skill.slug}/SKILL.md and its linked references and assets. If you cannot fetch them, ask me to attach the ZIP before proceeding.`
    : `Read the attached ${skill.slug} skill bundle, starting with SKILL.md and its linked references and assets. If the bundle is missing, ask me to attach it before proceeding.`;
  return `Use the ${skill.name} frontend skill for my request below.\n\n${location}\n\nFollow the skill's design and motion guidance. Use rem-based dimensions, responsive layouts, keyboard-accessible controls, and a reduced-motion fallback. Keep my content and requirements; don't invent a different project. Use my chosen framework, or Next.js if I haven't specified one. If I haven't replaced the placeholder below, ask what I want to make before writing code.\n\nMy request:\n[Enter your prompt here]`;
}
