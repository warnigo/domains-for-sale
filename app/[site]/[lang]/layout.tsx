import type { Viewport } from "next";
import { Unbounded, Onest, JetBrains_Mono } from "next/font/google";
import { isLang, DEFAULT_LANG } from "@/lib/site";
import "../../globals.css";

const display = Unbounded({ subsets: ["latin", "cyrillic"], weight: ["300", "700"], variable: "--font-display", display: "swap" });
const body = Onest({ subsets: ["latin", "cyrillic"], weight: ["400", "500"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "cyrillic"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3efe7" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ site: string; lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={isLang(lang) ? lang : DEFAULT_LANG} className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
