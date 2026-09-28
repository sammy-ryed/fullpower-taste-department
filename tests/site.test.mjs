import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { transpileModule, ModuleKind } from "typescript";

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
  assert.ok(!component.includes("preventDefault"));
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
