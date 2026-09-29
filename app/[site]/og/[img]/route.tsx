import { ImageResponse } from "next/og";
import { LANGS, SITE_LIST, SITES, UI, isLang } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () =>
  SITE_LIST.flatMap((site) => LANGS.map((lang) => ({ site, img: `${lang}.png` })));

/** Google Fonts'dan faqat kerakli belgilar bilan TTF yuklash */
async function font(family: string, weight: number, text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`,
  ).then((r) => r.text());
  const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!src) throw new Error(`font ${family} ${weight} not found`);
  return fetch(src).then((r) => r.arrayBuffer());
}

export async function GET(_: Request, { params }: { params: Promise<{ site: string; img: string }> }) {
  const { site, img } = await params;
  const lang = img.replace(/\.png$/, "");
  if (!SITES[site] || !isLang(lang)) return new Response("Not found", { status: 404 });

  const ui = UI[lang];
  const lead = SITES[site][lang].lead;
  const dot = site.lastIndexOf(".");
  const name = site.slice(0, dot);
  const size = Math.min(170, Math.floor(1050 / (site.length * 0.8)));

  const [bold, light, body] = await Promise.all([
    font("Unbounded", 700, name),
    font("Unbounded", 300, site.slice(dot)),
    font("Onest", 500, ui.ogTag + lead),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#121110", color: "#f3efe7", padding: "72px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "Onest", fontSize: 26, letterSpacing: 3, color: "#9d978c" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#ff4d1f" }} />
          {ui.ogTag}
        </div>
        <div style={{ display: "flex", fontFamily: "Unbounded", fontSize: size, letterSpacing: -size * 0.045, lineHeight: 1 }}>
          <span style={{ fontWeight: 700 }}>{name}</span>
          <span style={{ fontWeight: 300, color: "#ff4d1f" }}>{site.slice(dot)}</span>
        </div>
        <div style={{ display: "flex", fontFamily: "Onest", fontSize: 34, lineHeight: 1.35, color: "#d8d1c4", maxWidth: 980 }}>{lead}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Unbounded", data: bold, weight: 700, style: "normal" },
        { name: "Unbounded", data: light, weight: 300, style: "normal" },
        { name: "Onest", data: body, weight: 500, style: "normal" },
      ],
    },
  );
}
