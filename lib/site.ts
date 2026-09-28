export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const siteTitle = "Fullpower Frontend — The Taste Department";
export const siteDescription =
  "Seven frontend design skills. Pick a style, download its brain, and make something worth opening a new tab for. Free workshop resources from OpenAI Student Collective.";
