import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Fullpower Frontend — seven free design skills, one very opinionated scroll";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image() {
  const font = await readFile(
    join(process.cwd(), "public/art/fonts/YatraOne-Regular.ttf"),
  );
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#ffcc32",
        padding: 28,
        color: "#701c39",
        fontFamily: "Yatra",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          border: "6px solid #701c39",
          padding: 40,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            justifyContent: "space-between",
          }}
        >
          <span>THE TASTE DEPARTMENT</span>
          <span>07 SKILLS / ALL YOURS</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 108,
            lineHeight: 1.05,
            letterSpacing: -5,
          }}
        >
          <span>FULL POWER.</span>
          <span>FRONTEND.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            justifyContent: "space-between",
          }}
        >
          <span>Pick a look. Download its brain.</span>
          <span>OPENAI STUDENT COLLECTIVE</span>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [{ name: "Yatra", data: font, weight: 400, style: "normal" }],
    },
  );
}
