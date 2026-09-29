import { SITE_LIST } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => SITE_LIST.map((site) => ({ site }));

export async function GET(_: Request, { params }: { params: Promise<{ site: string }> }) {
  const { site } = await params;
  const body = `User-agent: *\nAllow: /\n\nHost: ${site}\nSitemap: https://${site}/sitemap.xml\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
