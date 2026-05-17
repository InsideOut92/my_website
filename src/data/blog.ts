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
    slug: 'automatisierung-im-bestand-stabil-ausrollen',
    title: 'Automatisierung im Bestand: klein starten, stabil ausrollen',
    date: '2026-05-15',
    readingTime: '7 min',
    summary:
      'Wie wiederkehrende Betriebsaufgaben schrittweise automatisiert werden können, ohne laufende Prozesse zu destabilisieren.',
    tags: ['Automatisierung', 'Betrieb', 'Bestandssysteme'],
  },
  {
    slug: 'monitoring-fuer-schnittstellen-welche-signale-zaehlen',
    title: 'Monitoring für Schnittstellen: Welche Signale im Betrieb wirklich zählen',
    date: '2026-05-16',
    readingTime: '7 min',
    summary:
      'Praxisorientierter Überblick zu Monitoring-Signalen für Integrationen – von technischen Fehlern bis zu prozessrelevanten Frühindikatoren.',
    tags: ['Monitoring', 'Integration', 'Betrieb'],
  },
  {
    slug: 'entwicklungspfad-von-lobster-data-zu-sap-naher-integration',
    title: 'Vom Lobster-Data-Schwerpunkt zur SAP-nahen Integrationsentwicklung',
    date: '2026-05-08',
    readingTime: '8 min',
    summary:
      'Wie sich vorhandene Integrationspraxis strukturiert in Richtung SAP-naher Entwicklungsrollen ausbauen lässt, ohne unhaltbare Erfahrungsclaims.',
    tags: ['SAP', 'Lobster Data', 'Karrierepfad'],
  },
  {
    slug: 'lobster-data-mapping-und-validierung-im-betrieb',
    title: 'Lobster Data in der Praxis: Mapping und Validierung im laufenden Betrieb',
    date: '2026-05-03',
    readingTime: '8 min',
    summary:
      'Praxisorientierter Überblick, wie Mapping-, Routing- und Validierungslogik in Lobster Data strukturiert werden kann, um Integrationsprozesse stabil zu betreiben.',
    tags: ['Lobster Data', 'Mapping', 'Betrieb'],
  },
  {
    slug: 'datenqualitaet-validierung-vor-verarbeitung',
    title: 'Datenqualität in Integrationen: Validierung vor Verarbeitung',
    date: '2026-05-13',
    readingTime: '7 min',
    summary:
      'Warum Vorvalidierung in Integrationsprozessen Folgefehler reduziert und operative Stabilität in heterogenen Datenlandschaften verbessert.',
    tags: ['Datenqualität', 'Validierung', 'Integration'],
  },
  {
    slug: 'legacy-modernisierung-ohne-produktionsstillstand',
    title: 'Legacy-Modernisierung ohne Produktionsstillstand',
    date: '2026-05-14',
    readingTime: '7 min',
    summary:
      'Praxisleitfaden für schrittweise Modernisierung im Bestand mit Fokus auf Betriebsstabilität, Änderbarkeit und nachvollziehbare Risiken.',
    tags: ['Legacy', 'Modernisierung', 'Betrieb'],
  },
  {
    slug: 'cloudflare-migration-portfolio-domain',
    title: 'Portfolio-Migration auf Cloudflare: Von pages.dev zur eigenen Domain',
    date: '2026-04-28',
    readingTime: '8 min',
    summary:
      'Technische Fallstudie zur Migration auf eine eigene Domain mit Fokus auf SEO-Konsistenz, saubere Auslieferung und wartbare Basis.',
    tags: ['Cloudflare', 'SEO', 'Deployment'],
  },
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
    slug: 'automation-in-existing-systems-start-small-roll-out-stable',
    title: 'Automation in Existing Systems: Start Small, Roll Out Stable',
    date: '2026-05-15',
    readingTime: '7 min',
    summary:
      'How recurring operational tasks can be automated incrementally without destabilizing live production processes.',
    tags: ['Automation', 'Operations', 'Legacy Systems'],
  },
  {
    slug: 'interface-monitoring-which-signals-matter-in-operations',
    title: 'Interface Monitoring: Which Signals Actually Matter in Operations',
    date: '2026-05-16',
    readingTime: '7 min',
    summary:
      'Practical overview of monitoring signals for integrations, from technical failures to process-level early indicators.',
    tags: ['Monitoring', 'Integration', 'Operations'],
  },
  {
    slug: 'from-lobster-data-to-sap-adjacent-integration-engineering',
    title: 'From Lobster Data to SAP-Adjacent Integration Engineering',
    date: '2026-05-08',
    readingTime: '8 min',
    summary:
      'How existing integration practice can be expanded toward SAP-adjacent engineering roles without overstating experience.',
    tags: ['SAP', 'Lobster Data', 'Career Path'],
  },
  {
    slug: 'lobster-data-mapping-and-validation-in-production',
    title: 'Lobster Data in Practice: Mapping and Validation in Production',
    date: '2026-05-03',
    readingTime: '8 min',
    summary:
      'Practical overview of structuring mapping, routing, and validation logic in Lobster Data for stable integration operations.',
    tags: ['Lobster Data', 'Mapping', 'Operations'],
  },
  {
    slug: 'data-quality-validation-before-processing',
    title: 'Data Quality in Integrations: Validation Before Processing',
    date: '2026-05-13',
    readingTime: '7 min',
    summary:
      'Why pre-processing validation reduces downstream incidents and improves operational stability across heterogeneous data sources.',
    tags: ['Data Quality', 'Validation', 'Integration'],
  },
  {
    slug: 'legacy-modernization-without-production-downtime',
    title: 'Legacy Modernization Without Production Downtime',
    date: '2026-05-14',
    readingTime: '7 min',
    summary:
      'Practical guide for phased modernization in existing systems with focus on operational stability, maintainability, and transparent risk.',
    tags: ['Legacy', 'Modernization', 'Operations'],
  },
  {
    slug: 'cloudflare-portfolio-migration-custom-domain',
    title: 'Portfolio Migration on Cloudflare: From pages.dev to a Custom Domain',
    date: '2026-04-28',
    readingTime: '8 min',
    summary:
      'Technical case study on moving to a custom domain with emphasis on SEO consistency, clean delivery, and maintainable structure.',
    tags: ['Cloudflare', 'SEO', 'Deployment'],
  },
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

const sortByDateDesc = (a: BlogPost, b: BlogPost) => {
  if (a.date === b.date) return a.title.localeCompare(b.title, 'de');
  return a.date < b.date ? 1 : -1;
};

export const blogPostsDeSorted = [...blogPostsDe].sort(sortByDateDesc);
export const blogPostsEnSorted = [...blogPostsEn].sort(sortByDateDesc);
