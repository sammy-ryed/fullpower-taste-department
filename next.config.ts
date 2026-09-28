import type { NextConfig } from "next";
const config: NextConfig = {
  devIndicators: false,
  output: "export",
  images: { unoptimized: true },
};
export default config;
