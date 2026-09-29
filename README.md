# domains-for-sale

Bitta Next.js loyihasi bir nechta domen uchun "domen sotuvda" sahifalarini beradi:
212.uz, 404-podcast.uz, toilet.uz, bookingtoilet.uz, siddiq.uz.

- Har domen × til (uz, ru, en) uchun statik (SSG) sahifa: `/`, `/ru`, `/en`
- `proxy.ts` host bo'yicha to'g'ri sahifaga rewrite qiladi, `www.` → 308, noma'lum hostlar `noindex`
- Har domenda o'z `robots.txt`, `sitemap.xml` (hreflang bilan), OG rasm (`/og/{lang}.png`), JSON-LD

## Kontent
Barcha matn va kontaktlar `lib/site.ts` da. Yangi domen qo'shish:
1. `SITES` ga uz/ru/en matnlarini qo'shing
2. `FIT` ga sarlavha koeffitsiyentini qo'shing
3. Vercel loyihasiga domenni ulang

## Buyruqlar
```
npm run dev
npm run build
npm run typecheck
```

Preview hostlarda domenni `?d=toilet.uz` bilan tanlash mumkin.
