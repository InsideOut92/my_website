export type Locale = 'de' | 'en';

export type PageKey =
  | 'home'
  | 'blog'
  | 'skills'
  | 'projects'
  | 'contact'
  | 'imprint'
  | 'privacy';

export const PAGE_ROUTES: Record<PageKey, Record<Locale, string>> = {
  home: { de: '/', en: '/en' },
  blog: { de: '/blog', en: '/en/blog' },
  skills: { de: '/skills', en: '/en/skills' },
  projects: { de: '/projekte', en: '/en/projects' },
  contact: { de: '/kontakt', en: '/en/contact' },
  imprint: { de: '/impressum', en: '/en/imprint' },
  privacy: { de: '/datenschutz', en: '/en/privacy' },
};

const NAV_LABELS: Record<Locale, Record<PageKey, string>> = {
  de: {
    home: 'Start',
    blog: 'Blog',
    skills: 'Skills',
    projects: 'Projekte',
    contact: 'Kontakt',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
  },
  en: {
    home: 'Home',
    blog: 'Blog',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    imprint: 'Legal Notice',
    privacy: 'Privacy',
  },
};

export function normalizePath(path: string): string {
  if (!path) {
    return '/';
  }

  const normalized = path.replace(/\/+$/, '');
  return normalized || '/';
}

export function getLocaleFromPath(path: string): Locale {
  const normalized = normalizePath(path);
  return normalized === '/en' || normalized.startsWith('/en/') ? 'en' : 'de';
}

export function getPageKeyFromPath(path: string): PageKey | undefined {
  const normalized = normalizePath(path);

  for (const [key, routes] of Object.entries(PAGE_ROUTES) as [
    PageKey,
    Record<Locale, string>
  ][]) {
    if (normalizePath(routes.de) === normalized || normalizePath(routes.en) === normalized) {
      return key;
    }
  }

  return undefined;
}

export function getLocalizedPath(path: string, targetLocale: Locale): string {
  const key = getPageKeyFromPath(path);
  if (key) {
    return PAGE_ROUTES[key][targetLocale];
  }

  const normalized = normalizePath(path);
  if (targetLocale === 'en') {
    if (normalized === '/en' || normalized.startsWith('/en/')) {
      return normalized;
    }
    return normalized === '/' ? '/en' : `/en${normalized}`;
  }

  if (normalized === '/en') {
    return '/';
  }

  if (normalized.startsWith('/en/')) {
    return normalized.replace(/^\/en/, '') || '/';
  }

  return normalized;
}

export function getNavLinks(locale: Locale): Array<{ href: string; label: string }> {
  return [
    { href: PAGE_ROUTES.blog[locale], label: NAV_LABELS[locale].blog },
    { href: PAGE_ROUTES.skills[locale], label: NAV_LABELS[locale].skills },
    { href: PAGE_ROUTES.projects[locale], label: NAV_LABELS[locale].projects },
    { href: PAGE_ROUTES.contact[locale], label: NAV_LABELS[locale].contact },
    { href: PAGE_ROUTES.imprint[locale], label: NAV_LABELS[locale].imprint },
  ];
}

export function getAlternatePaths(path: string): { de: string; en: string } | null {
  const key = getPageKeyFromPath(path);
  if (!key) {
    return null;
  }

  return PAGE_ROUTES[key];
}
