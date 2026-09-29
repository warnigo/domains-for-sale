export const LANGS = ["uz", "ru", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "uz";

export const CONTACT = {
  telegram: "warnigo",
  phone: "+998889794414",
  email: "thewarnigo@gmail.com",
};

/** Asosiy domen: noma'lum host (preview, localhost) shu domenga tushadi */
export const DEFAULT_SITE = "212.uz";

type Copy = {
  /** <title> — 60 belgigacha */
  title: string;
  /** meta description — 150–160 belgigacha */
  description: string;
  /** Birinchi ekrandagi bitta jumla */
  lead: string;
  /** "Domen haqida" bo'limidagi paragraflar */
  about: string[];
  keywords: string[];
};

export const SITES: Record<string, Record<Lang, Copy>> = {
  "212.uz": {
    uz: {
      title: "212.uz — domen sotuvda | Qisqa uch raqamli .uz domen",
      description:
        "212.uz domeni sotuvda. Qisqa, uch raqamli va oson eslab qolinadigan .uz manzil — brend, xizmat yoki loyiha uchun. Egasi bilan bevosita bog'laning.",
      lead: "Qisqa, uch raqamli manzil. Lo'nda brend, xizmat yoki loyiha uchun.",
      about: [
        "212.uz — atigi uchta raqamdan iborat .uz domeni. Uni aytish, yozish va eslab qolish oson: reklamada, vizitkada yoki telefon orqali aytilganda ham xato qilinmaydi.",
        "Raqamli qisqa nomlar xizmat ko'rsatish, yetkazib berish, ma'lumot markazi yoki mobil ilova kabi loyihalarga mos keladi. Domen faol va egasi tomonidan to'g'ridan-to'g'ri sotiladi.",
      ],
      keywords: ["212.uz", "212 uz", "domen sotuvda", "uz domen sotish", "qisqa domen", "raqamli domen", "premium domen"],
    },
    ru: {
      title: "212.uz — домен продаётся | Короткий трёхзначный домен .uz",
      description:
        "Домен 212.uz продаётся. Короткий, трёхзначный и легко запоминающийся адрес в зоне .uz — для бренда, сервиса или проекта. Свяжитесь с владельцем напрямую.",
      lead: "Короткий трёхзначный адрес. Для лаконичного бренда, сервиса или проекта.",
      about: [
        "212.uz — домен в зоне .uz, состоящий всего из трёх цифр. Его легко произнести, написать и запомнить: в рекламе, на визитке или по телефону он не вызывает ошибок.",
        "Короткие цифровые имена подходят для сервисов, доставки, справочных центров и мобильных приложений. Домен активен и продаётся напрямую владельцем.",
      ],
      keywords: ["212.uz", "купить домен uz", "домен продается", "короткий домен", "цифровой домен", "премиум домен"],
    },
    en: {
      title: "212.uz — domain for sale | Short three-digit .uz domain",
      description:
        "The domain 212.uz is for sale. A short, three-digit, easy-to-remember .uz address for a brand, service or project. Contact the owner directly.",
      lead: "A short three-digit address. For a concise brand, service or project.",
      about: [
        "212.uz is a .uz domain made of just three digits. It is easy to say, type and remember — in advertising, on a business card or over the phone.",
        "Short numeric names suit services, delivery, information centres and mobile apps. The domain is active and sold directly by its owner.",
      ],
      keywords: ["212.uz", "uz domain for sale", "short domain", "numeric domain", "premium domain"],
    },
  },
  "404-podcast.uz": {
    uz: {
      title: "404-podcast.uz — domen sotuvda | IT podkast uchun nom",
      description:
        "404-podcast.uz domeni sotuvda. Texnologiya va IT mavzusidagi podkast yoki media loyiha uchun tayyor nom. Egasi bilan bevosita bog'laning.",
      lead: "Texnologiya va IT mavzusidagi podkast yoki media loyiha uchun tayyor nom.",
      about: [
        "«404» — internetdagi eng mashhur xato kodi, uni har bir dasturchi va texnologiya ishqibozi taniydi. Nom podkast formatini aniq ko'rsatadi va IT auditoriyasi uchun darhol tushunarli.",
        "Domen podkast sayti, epizodlar arxivi, YouTube yoki Telegram kanalining rasmiy sahifasi, shuningdek dasturchilar hamjamiyati uchun mos. Domen faol va egasi tomonidan to'g'ridan-to'g'ri sotiladi.",
      ],
      keywords: ["404-podcast.uz", "404 podcast", "podkast domen", "IT podkast", "domen sotuvda", "uz domen"],
    },
    ru: {
      title: "404-podcast.uz — домен продаётся | Имя для IT-подкаста",
      description:
        "Домен 404-podcast.uz продаётся. Готовое имя для подкаста или медиапроекта о технологиях и IT. Свяжитесь с владельцем напрямую.",
      lead: "Готовое имя для подкаста или медиапроекта о технологиях и IT.",
      about: [
        "«404» — самый известный код ошибки в интернете, его узнаёт каждый разработчик и любитель технологий. Имя сразу обозначает формат подкаста и понятно IT-аудитории.",
        "Домен подойдёт для сайта подкаста, архива выпусков, официальной страницы YouTube или Telegram-канала, а также сообщества разработчиков. Домен активен и продаётся напрямую владельцем.",
      ],
      keywords: ["404-podcast.uz", "404 подкаст", "домен для подкаста", "IT подкаст", "домен продается"],
    },
    en: {
      title: "404-podcast.uz — domain for sale | Name for a tech podcast",
      description:
        "The domain 404-podcast.uz is for sale. A ready name for a technology podcast or media project. Contact the owner directly.",
      lead: "A ready name for a technology podcast or media project.",
      about: [
        "“404” is the best-known error code on the web, recognised by every developer and tech enthusiast. The name signals the podcast format and speaks directly to an IT audience.",
        "It fits a podcast website, an episode archive, the official page of a video or messaging channel, or a developer community. The domain is active and sold directly by its owner.",
      ],
      keywords: ["404-podcast.uz", "404 podcast", "podcast domain", "tech podcast", "domain for sale"],
    },
  },
  "toilet.uz": {
    uz: {
      title: "toilet.uz — domen sotuvda | Santexnika sohasi uchun nom",
      description:
        "toilet.uz domeni sotuvda. Santexnika va vannaxona jihozlari sohasi uchun aniq, bir so'zli .uz domen. Egasi bilan bevosita bog'laning.",
      lead: "Santexnika va vannaxona jihozlari sohasi uchun aniq va tushunarli nom.",
      about: [
        "toilet.uz — butun bir mahsulot toifasini bitta so'z bilan ifodalaydigan domen. Bunday umumiy nomlar xaridor qidiradigan so'zning o'zi bo'lgani uchun sayt manzilini eslab qolishni osonlashtiradi.",
        "Domen santexnika do'koni, unitaz, rakovina va dush kabinalari ishlab chiqaruvchisi yoki soha bo'yicha katalog uchun mos. Domen faol va egasi tomonidan to'g'ridan-to'g'ri sotiladi.",
      ],
      keywords: ["toilet.uz", "toilet uz", "santexnika domen", "unitaz", "vannaxona jihozlari", "domen sotuvda"],
    },
    ru: {
      title: "toilet.uz — домен продаётся | Имя для рынка сантехники",
      description:
        "Домен toilet.uz продаётся. Ясное однословное имя в зоне .uz для сферы сантехники и оборудования для ванных комнат. Свяжитесь с владельцем напрямую.",
      lead: "Ясное и точное имя для сферы сантехники и оборудования для ванных комнат.",
      about: [
        "toilet.uz — домен, который одним словом обозначает целую товарную категорию. Такие родовые имена совпадают с тем, что ищет покупатель, и легко запоминаются.",
        "Домен подойдёт магазину сантехники, производителю унитазов, раковин и душевых кабин или отраслевому каталогу. Домен активен и продаётся напрямую владельцем.",
      ],
      keywords: ["toilet.uz", "домен сантехника", "унитазы", "оборудование для ванной", "домен продается"],
    },
    en: {
      title: "toilet.uz — domain for sale | Name for the sanitary-ware market",
      description:
        "The domain toilet.uz is for sale. A clear one-word .uz name for the sanitary-ware and bathroom industry. Contact the owner directly.",
      lead: "A clear, direct name for the sanitary-ware and bathroom industry.",
      about: [
        "toilet.uz names an entire product category in a single word. Generic names like this match what customers search for and are easy to remember.",
        "It suits a plumbing store, a manufacturer of toilets, sinks and shower cabins, or an industry catalogue. The domain is active and sold directly by its owner.",
      ],
      keywords: ["toilet.uz", "sanitary ware domain", "plumbing domain", "bathroom", "domain for sale"],
    },
  },
  "bookingtoilet.uz": {
    uz: {
      title: "bookingtoilet.uz — domen sotuvda | Hojatxona bron xizmati",
      description:
        "bookingtoilet.uz domeni sotuvda. Jamoat hojatxonalarini topish va band qilish xizmati uchun tayyor nom. Egasi bilan bevosita bog'laning.",
      lead: "Jamoat hojatxonalarini topish va band qilish xizmati uchun tayyor nom.",
      about: [
        "bookingtoilet.uz nomi xizmat mohiyatini to'liq ochib beradi: foydalanuvchi shahar bo'ylab toza hojatxonani topadi va oldindan band qiladi. Nom lotin yozuvida bo'lgani uchun sayyohlar uchun ham tushunarli.",
        "Domen pullik jamoat hojatxonalari tarmog'i, xarita va bron qilish ilovasi yoki tadbirlar uchun mobil hojatxona ijarasi xizmatiga mos. Domen faol va egasi tomonidan to'g'ridan-to'g'ri sotiladi.",
      ],
      keywords: ["bookingtoilet.uz", "hojatxona bron", "jamoat hojatxonasi", "mobil hojatxona ijarasi", "domen sotuvda"],
    },
    ru: {
      title: "bookingtoilet.uz — домен продаётся | Сервис бронирования туалетов",
      description:
        "Домен bookingtoilet.uz продаётся. Готовое имя для сервиса поиска и бронирования общественных туалетов. Свяжитесь с владельцем напрямую.",
      lead: "Готовое имя для сервиса поиска и бронирования общественных туалетов.",
      about: [
        "Имя bookingtoilet.uz полностью раскрывает суть сервиса: пользователь находит чистый туалет в городе и бронирует его заранее. Название на латинице понятно и туристам.",
        "Домен подойдёт сети платных общественных туалетов, приложению с картой и бронированием или сервису аренды мобильных туалетов для мероприятий. Домен активен и продаётся напрямую владельцем.",
      ],
      keywords: ["bookingtoilet.uz", "бронирование туалетов", "общественный туалет", "аренда мобильных туалетов", "домен продается"],
    },
    en: {
      title: "bookingtoilet.uz — domain for sale | Restroom booking service",
      description:
        "The domain bookingtoilet.uz is for sale. A ready name for a service to find and book public restrooms. Contact the owner directly.",
      lead: "A ready name for a service to find and book public restrooms.",
      about: [
        "The name bookingtoilet.uz states the service plainly: find a clean restroom in the city and book it in advance. Written in Latin script, it is clear to tourists as well.",
        "It suits a network of paid public restrooms, a map-and-booking app, or portable toilet rental for events. The domain is active and sold directly by its owner.",
      ],
      keywords: ["bookingtoilet.uz", "restroom booking", "public toilets", "portable toilet rental", "domain for sale"],
    },
  },
  "siddiq.uz": {
    uz: {
      title: "siddiq.uz — domen sotuvda | Qisqa va ma'noli .uz domen",
      description:
        "siddiq.uz domeni sotuvda. «Siddiq» — rostgo'y, sodiq degan ma'noni anglatadi. Shaxsiy brend yoki ishonchga asoslangan biznes uchun qisqa .uz domen.",
      lead: "«Siddiq» — rostgo'y, sodiq. Shaxsiy brend yoki ishonchga asoslangan biznes uchun.",
      about: [
        "«Siddiq» so'zi rostgo'y, sodiq va ishonchli degan ma'nolarni anglatadi, shuningdek keng tarqalgan ism hamdir. Olti harfdan iborat nom qisqa, chiroyli va talaffuzi oson.",
        "Domen shaxsiy sayt yoki portfolio, moliya, savdo va ta'lim sohasidagi kompaniya yoki xayriya loyihasi uchun mos. Domen faol va egasi tomonidan to'g'ridan-to'g'ri sotiladi.",
      ],
      keywords: ["siddiq.uz", "siddiq uz", "siddiq", "ism domen", "qisqa domen", "domen sotuvda"],
    },
    ru: {
      title: "siddiq.uz — домен продаётся | Короткий домен со смыслом",
      description:
        "Домен siddiq.uz продаётся. «Сиддик» означает «правдивый, верный». Короткий домен .uz для личного бренда или бизнеса, построенного на доверии.",
      lead: "«Сиддик» — правдивый, верный. Для личного бренда или бизнеса, построенного на доверии.",
      about: [
        "Слово «Сиддик» означает «правдивый, верный, надёжный» и также является распространённым именем. Имя из шести букв короткое, красивое и легко произносится.",
        "Домен подойдёт для личного сайта или портфолио, компании в сфере финансов, торговли или образования, а также благотворительного проекта. Домен активен и продаётся напрямую владельцем.",
      ],
      keywords: ["siddiq.uz", "сиддик", "домен имя", "короткий домен", "домен продается"],
    },
    en: {
      title: "siddiq.uz — domain for sale | Short .uz name with meaning",
      description:
        "The domain siddiq.uz is for sale. “Siddiq” means truthful and faithful. A short .uz domain for a personal brand or a business built on trust.",
      lead: "“Siddiq” means truthful and faithful. For a personal brand or a business built on trust.",
      about: [
        "The word “Siddiq” means truthful, faithful and trustworthy, and it is also a common given name. At six letters it is short, elegant and easy to pronounce.",
        "It suits a personal website or portfolio, a company in finance, trade or education, or a charity project. The domain is active and sold directly by its owner.",
      ],
      keywords: ["siddiq.uz", "siddiq", "name domain", "short domain", "domain for sale"],
    },
  },
};

export const SITE_LIST = Object.keys(SITES);

export const UI: Record<
  Lang,
  {
    status: string; eyebrow: string; offer: string; note: string; aboutTitle: string; howTitle: string;
    how: string; others: string; langName: string; msg: (d: string) => string; ogTag: string;
  }
> = {
  uz: {
    status: "Sotuvda", eyebrow: "Domen sotuvda",
    offer: "Ushbu domen egasi tomonidan sotuvga qo'yilgan. Takliflaringizni kutib qolamiz.",
    note: "Domen ro'yxatdan o'tkazuvchi orqali rasmiy tartibda topshiriladi.",
    aboutTitle: "Domen haqida", howTitle: "Qanday sotib olinadi",
    how: "Taklifingizni telefon, Telegram yoki elektron pochta orqali yuboring. Shartlar kelishilgach, domen ro'yxatdan o'tkazuvchi (registrator) orqali rasmiy tartibda yangi egasiga o'tkaziladi.",
    others: "Boshqa domenlar", langName: "O'zbekcha", ogTag: "DOMEN SOTUVDA",
    msg: (d) => `Assalomu alaykum. ${d} domeni bo'yicha murojaat qilyapman.`,
  },
  ru: {
    status: "В продаже", eyebrow: "Домен продаётся",
    offer: "Этот домен выставлен на продажу владельцем. Будем рады вашему предложению.",
    note: "Передача домена осуществляется официально, через регистратора.",
    aboutTitle: "О домене", howTitle: "Как купить",
    how: "Отправьте предложение по телефону, в Telegram или по электронной почте. После согласования условий домен официально передаётся новому владельцу через регистратора.",
    others: "Другие домены", langName: "Русский", ogTag: "ДОМЕН ПРОДАЁТСЯ",
    msg: (d) => `Здравствуйте. Обращаюсь по поводу домена ${d}.`,
  },
  en: {
    status: "For sale", eyebrow: "Domain for sale",
    offer: "This domain is offered for sale by its owner. We welcome your offer.",
    note: "The domain is transferred officially through the registrar.",
    aboutTitle: "About the domain", howTitle: "How to buy",
    how: "Send your offer by phone, Telegram or email. Once terms are agreed, the domain is transferred to the new owner officially through the registrar.",
    others: "Other domains", langName: "English", ogTag: "DOMAIN FOR SALE",
    msg: (d) => `Hello. I'm reaching out regarding the domain ${d}.`,
  },
};

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);

/** Tilga mos kanonik yo'l: uz → "/", boshqalar → "/ru", "/en" */
export const langPath = (lang: Lang) => (lang === DEFAULT_LANG ? "/" : `/${lang}`);
export const siteUrl = (site: string, lang: Lang = DEFAULT_LANG) =>
  `https://${site}${lang === DEFAULT_LANG ? "" : `/${lang}`}`;

export const fmtPhone = (p: string) => p.replace(/^\+998(\d{2})(\d{3})(\d{2})(\d{2})$/, "+998 $1 $2 $3 $4");

/**
 * Domen nomini bitta qatorga sig'dirish koeffitsiyenti: 0.98 / (matn kengligi em'da).
 * Unbounded 700/300, letter-spacing -0.045em bilan brauzerda o'lchangan. Yangi domen qo'shilsa qayta o'lchang.
 */
export const FIT: Record<string, number> = {
  "212.uz": 0.2825,
  "404-podcast.uz": 0.1054,
  "toilet.uz": 0.2187,
  "bookingtoilet.uz": 0.1062,
  "siddiq.uz": 0.1961,
};
