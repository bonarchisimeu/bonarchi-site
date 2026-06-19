// Shared chrome translations (nav, footer, common labels). Page prose lives
// inline in each page file. EN is the default; FR falls back to EN per key.

export const defaultLang = 'en';
export const locales = ['en', 'fr'] as const;
export type Lang = (typeof locales)[number];

export const ui = {
  en: {
    'brand.ledger': 'The Logbook',
    'brand.sub': 'Software engineer · Central Africa',
    'nav.work': 'Work',
    'nav.writing': 'Writing',
    'nav.about': 'About',
    'nav.now': 'Now',
    'nav.contact': 'Contact',
    'lang.switch': 'FR',
    'lang.switch.label': 'Lire en français',
    'footer.colophon': "A software builder's notebook, written from Central Africa.",
    'footer.email': 'Email',
  },
  fr: {
    'brand.ledger': 'Le Carnet',
    'brand.sub': 'Ingénieur logiciel · Afrique centrale',
    'nav.work': 'Réalisations',
    'nav.writing': 'Écrits',
    'nav.about': 'À propos',
    'nav.now': 'En ce moment',
    'nav.contact': 'Contact',
    'lang.switch': 'EN',
    'lang.switch.label': 'Read in English',
    'footer.colophon': "Le carnet d'un concepteur logiciel, écrit depuis l'Afrique centrale.",
    'footer.email': 'E-mail',
  },
} as const;

/** Detect the active language from the URL path (/fr/... → 'fr'). */
export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return seg === 'fr' ? 'fr' : 'en';
}

/** Translator bound to a language, with EN fallback. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return ui[lang][key] ?? ui.en[key];
  };
}

/** Given a pathname, return its EN and FR counterparts. */
export function altPaths(pathname: string) {
  const isFr = pathname === '/fr' || pathname.startsWith('/fr/');
  const en = isFr ? pathname.replace(/^\/fr/, '') || '/' : pathname;
  const fr = isFr ? pathname : '/fr' + (pathname === '/' ? '' : pathname);
  return { en, fr };
}
