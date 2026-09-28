import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  icons: { icon: "/icon.svg" },
  title: "Fullpower Frontend — The Taste Department",
  description:
    "Seven design skills. One very opinionated scroll. Pick a style, grab the files, and make something worth opening a new tab for. A Full-power Frontend workshop resource.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
