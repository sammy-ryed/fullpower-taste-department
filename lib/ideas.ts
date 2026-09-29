export const ideas = [
  {
    id: "breaking-news",
    title: "Breaking News: You Did One Thing",
    label: "THE OVERREACTION DESK",
    vibe: "press",
    suggestion: "vintage-newspaper",
    description:
      "You boiled an egg. LinkedIn calls it leadership. Reddit wants to know if you're the villain. The newspaper has sent a helicopter.",
    sample:
      "I missed my bus. Here's what it taught me about disrupting transport.",
    sampleLabel: "One event. Three completely unnecessary versions.",
    features: [
      "Type any tiny win, weird thought, or ordinary incident.",
      "Switch between LinkedIn victory lap, Reddit confession, and front-page news.",
      "Turn up the drama, edit the result, and copy or export it.",
    ],
    stretch:
      "Add an 'HR has entered the chat' button that makes everything painfully professional.",
    brief:
      "Create a playful writing transformer. Accept a small achievement, weird thought, or everyday incident. Offer three clearly labelled parody modes: LinkedIn humblebrag, absurd Reddit confession, and newspaper front page. Include a drama slider, side-by-side input/output, editable results, copy, and an exportable post or front-page card. Preserve the user's underlying event; clearly label fictional exaggerations and never invent real credentials or accusations about real people. Do not post to social networks automatically.",
  },
  {
    id: "support-beverage",
    title: "Emotional Support Beverage",
    label: "BOTTLED FEELINGS, PROBABLY",
    vibe: "soda",
    suggestion: "cute-retro-pastels",
    description:
      "For post-viva silence. For 3 a.m. false confidence. For when they replied 'k' and now you're a limited-edition flavour.",
    sample: "K. Cola — notes of overthinking, with a long, unread finish.",
    sampleLabel: "Serving suggestion: put the phone down.",
    features: [
      "Pick a suspiciously specific mood and mix your flavours.",
      "Watch the can's colours, name, and label change live.",
      "Write ridiculous ingredients and download your finished label.",
    ],
    stretch: "A tiny receipt that itemises the emotional damage. Tax included.",
    brief:
      "Create a fictional non-alcoholic drink configurator for oddly specific moods, including post-viva silence, 3 a.m. false confidence, and 'they replied k'. Let visitors mix flavours, choose colours, name the drink, and edit a comic ingredients label. Update a cute can preview live and export the finished design as an image. Use amusing fictional ingredients, not health claims or advice. Include a few useful starter combinations and a reset control.",
  },
  {
    id: "emergency-rebrand",
    title: "The Personal Rebrand Emergency Kit",
    label: "NEW NAME. SAME PROBLEMS.",
    vibe: "rebrand",
    suggestion: "colorful-type-poster",
    description:
      "Said 'you too' when the waiter said 'enjoy your meal'? That's it. New name. New job. We have the paperwork.",
    sample: "Formerly: you. Currently: River, independent cloud consultant.",
    sampleLabel: "Relocation not included. Dignity sold separately.",
    features: [
      "Choose the incident and how dramatic the rebrand should be.",
      "Get a fictional name, profession, palette, and personal manifesto.",
      "Edit and export a business card. Tick 'moving to another city' if necessary.",
    ],
    stretch:
      "A before/after slider that treats changing your email signature like witness protection.",
    brief:
      "Create a humorous fictional persona and visual identity builder. Let visitors describe a mildly embarrassing incident and choose their level of reinvention. Produce an editable fictional name, profession, colour palette, short manifesto, and downloadable business card. Include an optional 'moving to another city' checkbox that changes the fictional backstory. Make clear this is a creative toy, not identity documents or help impersonating a real person. Include regenerate-one-field and reset controls.",
  },
  {
    id: "museum-of-almost",
    title: "The Museum of Almost",
    label: "PLEASE DO NOT FINISH THE ART",
    vibe: "museum",
    suggestion: "minimal-type-gallery",
    description:
      "That abandoned side project isn't a failure. It's a work on permanent loan from your Downloads folder. Please respect the artist's decision to never finish OAuth.",
    sample: "Untitled Startup No. 8. Abandoned at the login screen, 2025.",
    sampleLabel: "Mixed media: ambition, gradients, one working button.",
    features: [
      "Add a screenshot, project name, and where you gave up.",
      "Frame it like expensive art with an editable exhibition label.",
      "Browse the collection, leave a tiny virtual flower, or remove your exhibit.",
    ],
    stretch:
      "An audio-guide script so pretentious that an empty database becomes a commentary on absence.",
    brief:
      "Create a gallery for unfinished projects. Let a visitor add a screenshot, project title, year, and the point where they stopped. Present it as a prestigious artwork with an editable curator label. Include an exhibit detail view, a tiny virtual flower interaction, and delete/reset controls. Start with clearly labelled demo exhibits. For the workshop version, keep uploads and flower counts device-local and explain that they are not shared; use IndexedDB for local image storage, validate image types and sizes, and handle quota errors. Offer a shared gallery only if I explicitly request it, with supported Sites persistence and suitable upload controls.",
  },
] as const;

export type BuildIdea = (typeof ideas)[number];

export function ideaPrompt(idea: BuildIdea, skill = "", extra = "") {
  return `@Sites — build this website with me in ChatGPT.\n\nIDEA: ${idea.title}\n${idea.brief}\n\nDESIGN SKILL:\n${skill.trim() || "[add skill here — paste a skill link or attach its ZIP]"}\nRead its SKILL.md and linked design notes, CSS, tokens, and assets before building. If the skill is missing or unreadable, ask me to choose or attach it first. Any of the workshop skills can be used; the suggested style is not mandatory.\n\nAI WRITING:\nUse ChatGPT itself for generated names, rewrites, labels, and other LLM writing. Check the supported capabilities available in my Sites environment first. If direct ChatGPT generation inside the Site is not available, build an honest handoff: prepare a task-specific prompt from the visitor's inputs, let them review and copy it, open ChatGPT, then let them paste the answer back into an editable result. Do not pretend a template is live AI, access ChatGPT session cookies, request API keys in the browser, or silently add a paid API or another model provider. Keep sample results clearly labelled as examples. Non-AI interactions must work without this handoff.\n\nBUILD REQUIREMENTS:\nUse @Sites and its supported stack for the website. Use rem-based dimensions, responsive layouts, keyboard-accessible controls, and reduced-motion support. Build the actual interactive tool, not a landing page describing it. Include useful empty, loading, error, success, and reset states where applicable. Review outputs before sharing; do not publish user input automatically. Test the complete core interaction on mobile and desktop.\n\nOPTIONAL EXTRA CHAOS:\n${idea.stretch}\n\nMY ADDITIONS / THINGS TO CHANGE:\n${extra.trim() || "[Add your own twist, content, features, or constraints here — or leave this out]"}`;
}
