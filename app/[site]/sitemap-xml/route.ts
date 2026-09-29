import { LANGS, SITE_LIST, siteUrl } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => SITE_LIST.map((site) => ({ site }));

/** Har bir til sahifasi hreflang muqobillari bilan */
export async function GET(_: Request, { params }: { params: Promise<{ site: string }> }) {
  const { site } = await params;
  const lastmod = new Date().toISOString().slice(0, 10);
  const alternates = [
    ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${siteUrl(site, l)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl(site)}"/>`,
  ].join("\n");
  const urls = LANGS.map(
    (l) => `  <url>\n    <loc>${siteUrl(site, l)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`,
  ).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
