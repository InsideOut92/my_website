export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  summary: string;
  tags: string[];
};

export const blogPostsDe: BlogPost[] = [
  {
    slug: 'api-integrationen-robust-designen',
    title: 'API-Integrationen robust designen: Was in Produktion wirklich zählt',
    date: '2026-05-10',
    readingTime: '6 min',
    summary:
      'Ein praxisnaher Blick auf Timeouts, Retries, Idempotenz und sauberes Fehlerhandling in geschäftskritischen Schnittstellen.',
    tags: ['API', 'Integration', 'Betrieb'],
  },
  {
    slug: 'datenmapping-ohne-chaos',
    title: 'Datenmapping ohne Chaos: 5 Regeln für stabile Übertragungen',
    date: '2026-05-02',
    readingTime: '5 min',
    summary:
      'Wie klare Mapping-Verträge und Validierungsregeln Folgefehler reduzieren und die Wartbarkeit in heterogenen Systemlandschaften erhöhen.',
    tags: ['Daten', 'Mapping', 'Qualität'],
  },
  {
    slug: 'legacy-modernisieren-ohne-risiko',
    title: 'Legacy-Systeme modernisieren ohne Betriebsrisiko',
    date: '2026-04-24',
    readingTime: '7 min',
    summary:
      'Ein schrittweiser Ansatz für Refactoring unter Last: Risiko klein halten, Transparenz hoch halten, Nutzen früh liefern.',
    tags: ['Legacy', 'Refactoring', 'Strategie'],
  },
];

export const blogPostsEn: BlogPost[] = [
  {
    slug: 'designing-production-grade-api-integrations',
    title: 'Designing Production-Grade API Integrations',
    date: '2026-05-10',
    readingTime: '6 min',
    summary:
      'A practical guide to timeouts, retries, idempotency, and predictable error handling in business-critical interfaces.',
    tags: ['API', 'Integration', 'Operations'],
  },
  {
    slug: 'data-mapping-without-fragility',
    title: 'Data Mapping Without Fragility: Five Practical Rules',
    date: '2026-05-02',
    readingTime: '5 min',
    summary:
      'How explicit mapping contracts and validation rules reduce downstream incidents across heterogeneous systems.',
    tags: ['Data', 'Mapping', 'Quality'],
  },
  {
    slug: 'modernizing-legacy-systems-safely',
    title: 'Modernizing Legacy Systems Safely',
    date: '2026-04-24',
    readingTime: '7 min',
    summary:
      'A phased modernization model that limits delivery risk while improving structure, observability, and change velocity.',
    tags: ['Legacy', 'Refactoring', 'Strategy'],
  },
];
