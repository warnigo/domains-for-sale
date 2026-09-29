import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_SITE, SITES } from "./lib/site";

/**
 * Bitta loyiha bir nechta domenga xizmat qiladi:
 *   212.uz/        → /212.uz/uz
 *   212.uz/ru      → /212.uz/ru
 *   212.uz/robots.txt → /212.uz/robots-txt, /sitemap.xml → /212.uz/sitemap-xml, /og/uz.png → /212.uz/og/uz.png
 * www.* → asosiy domenga 308. Noma'lum hostlar (vercel.app, localhost) indekslanmaydi.
 */
export function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const host = (req.headers.get("host") ?? "").split(":")[0].toLowerCase();

  if (host.startsWith("www.") && SITES[host.slice(4)]) {
    return NextResponse.redirect(`https://${host.slice(4)}${url.pathname}${url.search}`, 308);
  }

  const known = Boolean(SITES[host]);
  const preview = url.searchParams.get("d");
  const site = known ? host : preview && SITES[preview] ? preview : DEFAULT_SITE;

  const path = url.pathname;
  // /uz takroriy sahifa bo'lmasligi uchun asosiy sahifaga yo'naltiriladi
  if (path === "/uz" || path === "/uz/") {
    return NextResponse.redirect(new URL(`/${url.search}`, req.url), 308);
  }

  let target: string;
  if (path === "/") target = `/${site}/uz`;
  else if (/^\/(ru|en)\/?$/.test(path)) target = `/${site}${path.replace(/\/$/, "")}`;
  else if (path === "/robots.txt") target = `/${site}/robots-txt`;
  else if (path === "/sitemap.xml") target = `/${site}/sitemap-xml`;
  else target = `/${site}${path}`;

  const rewritten = new URL(target, req.url);
  rewritten.search = "";
  const res = NextResponse.rewrite(rewritten);
  if (!known) res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  matcher: ["/((?!_next/|favicon\\.ico|favicon\\.svg|apple-touch-icon\\.png).*)"],
};
