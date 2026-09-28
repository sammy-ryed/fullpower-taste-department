import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { transpileModule, ModuleKind } from "typescript";
import { inflateRawSync } from "node:zlib";

const source = await readFile(
  new URL("../lib/skills.ts", import.meta.url),
  "utf8",
);
const compiled = transpileModule(source, {
  compilerOptions: { module: ModuleKind.ESNext },
}).outputText;
const { skills, starterPrompt, repository } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`
);
const root = new URL("../", import.meta.url);

test("All seven styles are present, with Indian print first and unique anchors", () => {
  assert.equal(skills.length, 7);
  assert.equal(skills[0].slug, "indian-print-maximalism");
  assert.equal(new Set(skills.map((s) => s.slug)).size, 7);
});

test("Every prompt targets its exact public skill and asks for a working accessible implementation", () => {
  assert.ok(repository.startsWith("https://github.com/"));
  for (const skill of skills) {
    const prompt = starterPrompt(skill);
    assert.ok(prompt.includes(`/blob/main/skills/${skill.slug}/SKILL.md`));
    assert.ok(prompt.includes("Next.js"));
    assert.ok(prompt.includes("rem-based"));
    assert.ok(prompt.includes("reduced-motion"));
    assert.ok(prompt.includes("attach the ZIP"));
    assert.ok(prompt.includes("[Enter your prompt here]"));
    assert.ok(!prompt.includes("Build a "));
    assert.ok(skill.description.length > 100);
  }
});

function zipNames(buffer) {
  const names = [];
  for (let i = 0; i < buffer.length - 46; i++) {
    if (buffer.readUInt32LE(i) !== 0x02014b50) continue;
    const length = buffer.readUInt16LE(i + 28);
    names.push(
      buffer
        .subarray(i + 46, i + 46 + length)
        .toString()
        .replaceAll("\\", "/"),
    );
    i +=
      45 + length + buffer.readUInt16LE(i + 30) + buffer.readUInt16LE(i + 32);
  }
  return names;
}

test("Fourteen real archives contain instructions and assets, without private reference pictures", async () => {
  for (const skill of skills) {
    const zip = await readFile(
      new URL(`public/downloads/${skill.slug}.zip`, root),
    );
    const bundle = await readFile(
      new URL(`public/downloads/${skill.slug}.skill`, root),
    );
    assert.deepEqual(zip, bundle);
    assert.equal(zip.readUInt32LE(0), 0x04034b50);
    const entries = zipNames(zip);
    assert.ok(entries.includes(`${skill.slug}/SKILL.md`));
    assert.ok(entries.includes(`${skill.slug}/assets/variables.css`));
    assert.ok(
      entries.every((e) => e.startsWith(`${skill.slug}/`) && !e.includes("..")),
    );
    assert.ok(
      !entries.some((e) => /references\/.*\.(png|jpe?g|webp|gif)$/i.test(e)),
    );
    const skillDoc = await readFile(
      new URL(`skills/${skill.slug}/SKILL.md`, root),
      "utf8",
    );
    assert.ok(skillDoc.startsWith("---"));
  }
});

test("Authored UI uses rem dimensions and no proprietary font URLs or tracking", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  assert.ok(!/\b\d+(?:\.\d+)?px\b/.test(css));
  const component = await readFile(
    new URL("components/gallery.tsx", root),
    "utf8",
  );
  assert.ok(component.includes("mm.revert()"));
  assert.ok(component.includes("document.fonts.ready"));
  assert.ok(component.includes("prefers-reduced-motion"));
  assert.ok(!/onWheel|addEventListener\(["']wheel/.test(component));
});

test("Every style has local design notes, tokens, and CSS", async () => {
  for (const skill of skills) {
    for (const path of [
      "SKILL.md",
      "references/design.md",
      "assets/variables.css",
      "assets/theme.css",
      "assets/token.json",
    ]) {
      assert.ok(
        (await stat(new URL(`skills/${skill.slug}/${path}`, root))).isFile(),
      );
    }
    JSON.parse(
      await readFile(
        new URL(`skills/${skill.slug}/assets/token.json`, root),
        "utf8",
      ),
    );
  }
});

test("Gallery polish keeps prompts themed, removes source badges, and animates native dialogs", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  const component = await readFile(
    new URL("components/gallery.tsx", root),
    "utf8",
  );
  assert.ok(!css.includes("Courier New"));
  assert.ok(css.includes("scrollbar-color: var(--scroll-ink)"));
  assert.ok(css.includes("resize: none"));
  assert.ok(!component.includes("{skill.source}"));
  assert.ok(!component.includes("{skill.url}"));
  assert.ok(component.includes("useSoftDialog"));
  assert.ok(component.includes("afterClose?.()"));
  assert.ok(component.includes('paletteInput.current === "keyboard"'));
  assert.equal((component.match(/<Seam /g) || []).length, 6);
  assert.ok(component.includes('className="paper-flight"'));
});

test("Page chrome reserves the gutter and every edition has a distinct scroll entrance", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  const component = await readFile(
    new URL("components/gallery.tsx", root),
    "utf8",
  );
  assert.ok(css.includes("scrollbar-gutter: stable"));
  assert.ok(css.includes("--page-scroll-track"));
  assert.ok(css.includes("--page-scroll-ink"));
  assert.ok(css.includes("@media (forced-colors: active)"));
  for (let i = 0; i < 7; i++) {
    assert.ok(css.includes(`.site-header[data-theme="${i}"]`));
  }
  assert.ok(component.includes("html.dataset.chapterTheme = String(active)"));
  assert.ok(component.includes("navigationEditions[active]"));
  assert.ok(component.includes('seam.querySelectorAll("i")'));
  assert.ok(component.includes('end: "top 18%"'));
  assert.ok(css.includes(".chapter:focus-within .chapter-seam"));
});

test("README exposes instructions and both direct downloads for every skill", async () => {
  const readme = await readFile(new URL("README.md", root), "utf8");
  for (const skill of skills) {
    assert.ok(readme.includes(`skills/${skill.slug}/SKILL.md`));
    for (const extension of ["zip", "skill"]) {
      assert.ok(
        readme.includes(
          `/raw/refs/heads/main/public/downloads/${skill.slug}.${extension}`,
        ),
      );
    }
  }
  assert.ok(readme.includes("npm run check"));
});

test("Selection is themed without disabling selection of real content", async () => {
  const css = await readFile(new URL("app/globals.css", root), "utf8");
  assert.ok(css.includes("::selection"));
  assert.ok(css.includes("background: var(--selection-paper)"));
  assert.ok(css.includes("color: var(--selection-ink)"));
  assert.ok(css.includes("text-shadow: none"));
  assert.ok(css.includes("user-select: text"));
  assert.ok(!/(?:body|main|\.chapter)\s*\{[^}]*user-select:\s*none/.test(css));
});

test("Deployment gates builds and serves bundles as attachments", async () => {
  const config = JSON.parse(
    await readFile(new URL("vercel.json", root), "utf8"),
  );
  assert.equal(config.framework, "nextjs");
  assert.ok(config.buildCommand.includes("npm run check"));
  const globalHeaders = config.headers.find(
    (h) => h.source === "/(.*)",
  ).headers;
  assert.ok(
    globalHeaders.some(
      (h) => h.key === "X-Content-Type-Options" && h.value === "nosniff",
    ),
  );
  assert.ok(
    globalHeaders.some(
      (h) => h.key === "X-Frame-Options" && h.value === "DENY",
    ),
  );
  const downloadHeaders = config.headers.find(
    (h) => h.source === "/downloads/:file*",
  ).headers;
  assert.ok(
    downloadHeaders.some(
      (h) => h.key === "Content-Disposition" && h.value === "attachment",
    ),
  );
});

test("Every bundled file matches its checked-in source byte for byte", async () => {
  let files = 0;
  for (const skill of skills) {
    const buffer = await readFile(
      new URL(`public/downloads/${skill.slug}.zip`, root),
    );
    for (let i = 0; i < buffer.length - 46; i++) {
      if (buffer.readUInt32LE(i) !== 0x02014b50) continue;
      const method = buffer.readUInt16LE(i + 10);
      const compressedSize = buffer.readUInt32LE(i + 20);
      const nameLength = buffer.readUInt16LE(i + 28);
      const name = buffer
        .subarray(i + 46, i + 46 + nameLength)
        .toString()
        .replaceAll("\\", "/");
      const offset = buffer.readUInt32LE(i + 42);
      const start =
        offset +
        30 +
        buffer.readUInt16LE(offset + 26) +
        buffer.readUInt16LE(offset + 28);
      if (!name.endsWith("/")) {
        const compressed = buffer.subarray(start, start + compressedSize);
        assert.ok(method === 0 || method === 8);
        const unpacked = method === 8 ? inflateRawSync(compressed) : compressed;
        assert.deepEqual(
          unpacked,
          await readFile(new URL(`skills/${name}`, root)),
          name,
        );
        files++;
      }
      i +=
        45 +
        nameLength +
        buffer.readUInt16LE(i + 30) +
        buffer.readUInt16LE(i + 32);
    }
  }
  assert.ok(files > 50);
});
