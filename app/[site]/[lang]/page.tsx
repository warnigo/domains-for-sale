import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CONTACT, FIT, LANGS, SITES, SITE_LIST, UI, fmtPhone, isLang, langPath, siteUrl, type Lang,
} from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SITE_LIST.flatMap((site) => LANGS.map((lang) => ({ site, lang })));
}

type Props = { params: Promise<{ site: string; lang: string }> };

async function resolve(params: Props["params"]) {
  const { site, lang } = await params;
  if (!SITES[site] || !isLang(lang)) notFound();
  return { site, lang: lang as Lang, copy: SITES[site][lang as Lang], ui: UI[lang as Lang] };
}

const OG_LOCALE: Record<Lang, string> = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { site, lang, copy } = await resolve(params);
  const url = siteUrl(site, lang);
  const og = `https://${site}/og/${lang}.png`;
  return {
    metadataBase: new URL(`https://${site}`),
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    applicationName: site,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LANGS.map((l) => [l, siteUrl(site, l)])),
        "x-default": siteUrl(site),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: site,
      title: copy.title,
      description: copy.description,
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      images: [{ url: og, width: 1200, height: 630, alt: `${site} — ${UI[lang].eyebrow}` }],
    },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: [og] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
    formatDetection: { telephone: false },
  };
}

const Icon = {
  call: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  tg: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.9 4.3 18.7 19.4c-.2 1.1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13 1.4 11.5c-1-.3-1.1-1 .2-1.5L20.5 2.8c.9-.3 1.7.2 1.4 1.5z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

export default async function Page({ params }: Props) {
  const { site, lang, copy, ui } = await resolve(params);
  const dot = site.lastIndexOf(".");
  const msg = encodeURIComponent(ui.msg(site));
  const url = siteUrl(site, lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `https://${site}/#website`, url: `https://${site}/`, name: site, inLanguage: LANGS },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: copy.title,
        description: copy.description,
        inLanguage: lang,
        isPartOf: { "@id": `https://${site}/#website` },
        primaryImageOfPage: `https://${site}/og/${lang}.png`,
        potentialAction: { "@type": "CommunicateAction", target: [`tel:${CONTACT.phone}`, `mailto:${CONTACT.email}`, `https://t.me/${CONTACT.telegram}`] },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="rise d1">
        <div className="wrap">
          <div className="status"><span className="dot" />{ui.status}</div>
          <nav className="langs" aria-label="Language">
            {LANGS.map((l) => (
              <a key={l} href={langPath(l)} hrefLang={l} lang={l} aria-current={l === lang ? "page" : undefined} title={UI[l].langName}>
                {l.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow rise d2">{ui.eyebrow}</p>
            <h1 className="rise d3" aria-label={site}>
              <span className="fit" style={{ "--k": FIT[site] ?? 0.1 } as React.CSSProperties}>{site.slice(0, dot)}<span className="tld">{site.slice(dot)}</span></span>
            </h1>
            <div className="rise d4">
              <p className="lead">{copy.lead}</p>
              <p className="offer">{ui.offer}</p>
            </div>
            <div className="cta rise d5">
              <a className="btn primary" href={`tel:${CONTACT.phone}`}>{Icon.call}{fmtPhone(CONTACT.phone)}</a>
              <a className="btn" href={`https://t.me/${CONTACT.telegram}?text=${msg}`} target="_blank" rel="noopener">{Icon.tg}@{CONTACT.telegram}</a>
              <a className="btn" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(site)}&body=${msg}`}>{Icon.mail}{CONTACT.email}</a>
            </div>
            <p className="note rise d5">{ui.note}</p>
          </div>
        </section>

        <section className="details" id="about">
          <div className="wrap grid">
            <article>
              <h2>{ui.aboutTitle}</h2>
              {copy.about.map((p, i) => <p key={i}>{p}</p>)}
            </article>
            <article>
              <h2>{ui.howTitle}</h2>
              <p>{ui.how}</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <nav className="others" aria-label={ui.others}>
            <b>{ui.others}:</b>
            {SITE_LIST.filter((s) => s !== site).map((s) => (
              <a key={s} href={siteUrl(s, lang)} hrefLang={lang}>{s}</a>
            ))}
          </nav>
          <div className="copy">© {new Date().getFullYear()} {site}</div>
        </div>
      </footer>
    </>
  );
}
