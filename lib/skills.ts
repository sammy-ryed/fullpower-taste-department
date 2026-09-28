export const repository =
  process.env.NEXT_PUBLIC_SKILLS_REPO_URL ||
  "https://github.com/sammy-ryed/fullpower-taste-department";
export const skills = [
  {
    slug: "indian-print-maximalism",
    short: "Print shop",
    name: "Indian print maximalism",
    color: "#ffcc32",
    description:
      "Your website just honked outside. Hand-painted headlines, mango-yellow paper, ornamental borders, and enough confidence to put its own name on a truck. Use it when “a little more subtle” sounds like a threat.",
  },
  {
    slug: "minimal-type-gallery",
    short: "Type gallery",
    name: "Minimal type gallery",
    color: "#ee585a",
    description:
      "One huge headline. An alarming amount of white space. This layout owns a chair you’re not allowed to sit on. Crisp type, quiet controls, and a coral warp that makes the letters briefly question their career.",
  },
  {
    slug: "colorful-type-poster",
    short: "Color riot",
    name: "Colorful type poster",
    color: "#c7ffcd",
    description:
      "Small type has been asked to leave. Giant words take over the room, the buttons look like punctuation, and the whole thing can change its outfit without a single layout shift. Go on. Press the color button.",
  },
  {
    slug: "vintage-newspaper",
    short: "The broadsheet",
    name: "Vintage newspaper",
    color: "#cdc6be",
    description:
      "BREAKING: local student discovers a font with serifs. Warm paper, enormous mastheads, proper columns, and thin rules doing an unreasonable amount of work. Your portfolio now looks like it has an editor who smokes outside.",
  },
  {
    slug: "animated-cartoon-pop",
    short: "Cartoon brain",
    name: "Animated cartoon pop",
    color: "#8584bd",
    description:
      "This one ate the brief. Now it’s bouncing around in a purple room. The paper flies, the type gets out of its way, and you can try a new color just by hovering. Switch motion off if the little guy gets on your nerves.",
  },
  {
    slug: "architectural-color-blocks",
    short: "Big concrete",
    name: "Architectural color blocks",
    color: "#fa4d43",
    description:
      "The headline has planning permission. Huge numerals and flat slabs of color slide into place like somebody gave a building a scroll wheel. No shadows. No tiny decorative nonsense. Just very large things being very sure of themselves.",
  },
  {
    slug: "cute-retro-pastels",
    short: "Soft serve",
    name: "Cute retro pastels",
    color: "#d3e8e3",
    description:
      "A small treat for your eyeballs. Cream paper, forest-green lettering, soft pastel labels, and buttons shaped like they’d offer you the last biscuit. Perfect for the idea in your notes app that deserves to be ridiculously lovable.",
  },
] as const;
export type Skill = (typeof skills)[number];
export function starterPrompt(skill: Skill) {
  const location = repository
    ? `Read ${repository.replace(/\/$/, "")}/blob/main/skills/${skill.slug}/SKILL.md and its linked references and assets. If you cannot fetch them, ask me to attach the ZIP before proceeding.`
    : `Read the attached ${skill.slug} skill bundle, starting with SKILL.md and its linked references and assets. If the bundle is missing, ask me to attach it before proceeding.`;
  return `Use the ${skill.name} frontend skill for my request below.\n\n${location}\n\nFollow the skill's design and motion guidance. Use rem-based dimensions, responsive layouts, keyboard-accessible controls, and a reduced-motion fallback. Keep my content and requirements; don't invent a different project. Use my chosen framework, or Next.js if I haven't specified one. If I haven't replaced the placeholder below, ask what I want to make before writing code.\n\nMy request:\n[Enter your prompt here]`;
}
