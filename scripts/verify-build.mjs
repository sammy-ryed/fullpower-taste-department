import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import assert from "node:assert/strict";

const output = resolve("out");
const html = await readFile(resolve(output, "index.html"), "utf8");
const links = [
  ...html.matchAll(/(?:src|href)="(\/[^"#?]*)(?:[?#][^"]*)?"/g),
].map((m) => m[1]);
for (const path of new Set(links)) {
  if (path === "/") continue;
  assert.ok(
    (await stat(resolve(output, `.${decodeURIComponent(path)}`))).isFile(),
    path,
  );
}
for (const marker of [
  'rel="canonical"',
  "og:image",
  "twitter:card",
  "<h1",
  'lang="en"',
]) {
  assert.ok(
    html.includes(marker),
    `Missing metadata/semantic marker: ${marker}`,
  );
}
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
assert.equal(new Set(ids).size, ids.length, "Duplicate element IDs");
for (const [, id] of html.matchAll(/href="#([^"]+)"/g))
  assert.ok(ids.includes(id), `Broken anchor #${id}`);
const downloads = links.filter((path) => path.startsWith("/downloads/"));
assert.equal(new Set(downloads).size, 14);
for (const file of [
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "opengraph-image",
]) {
  assert.ok((await stat(resolve(output, file))).isFile(), file);
}
const image = await readFile(resolve(output, "opengraph-image"));
assert.equal(image.subarray(1, 4).toString(), "PNG");
if (process.env.VERCEL_ENV === "production") {
  assert.ok(
    !html.includes('href="http://localhost:'),
    "Production canonical must not be localhost",
  );
}
console.log(
  `Production export verified: ${new Set(links).size} linked assets, 14 downloads, unique IDs, valid anchors and metadata.`,
);
