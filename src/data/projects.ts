export type ProjectFact = {
  label: string;
  text: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
  note: string;
};

export type ProjectCard = {
  title: string;
  subtitle: string;
  facts: ProjectFact[];
  metrics?: ProjectMetric[];
};

export type ProjectCompact = {
  title: string;
  subtitle: string;
};

export const selectedProjectsDe: ProjectCard[] = [
  {
    title: 'ERP-Integration über Lobster Data',
    subtitle: 'B2B-Integrationsstrecken zwischen ERP, Partner-Schnittstellen und datengetriebenen Folgeprozessen.',
    facts: [
      { label: 'Ausgangslage', text: 'Heterogene Quellformate, unterschiedliche Pflichtfeldlogik und inkonsistente Semantik zwischen beteiligten Systemen.' },
      { label: 'Technischer Ansatz', text: 'Explizite Mapping-Verträge, Validierung vor Verarbeitung, klar getrennte Fehlerklassen und reproduzierbare Routing-Pfade.' },
      { label: 'Betriebseffekt', text: 'Fehler wurden früher klassifizierbar, Nachbearbeitung besser priorisierbar und fachliche Rückfragen schneller auflösbar.' },
      { label: 'Warum das relevant ist', text: 'Die Integrationsstrecke blieb unter Änderungen steuerbar, statt bei jeder Formatabweichung operativ zu eskalieren.' },
    ],
    metrics: [
      { label: 'Manuelle Nacharbeit', value: 'spürbar reduziert', note: 'orientierende Beobachtung aus dem Tagesbetrieb, keine veröffentlichte Kundenzahl' },
      { label: 'Fehleranalysezeit', value: 'kürzere Triage-Zyklen', note: 'Trend durch klarere Fehlerklassen und strukturierte Logs' },
    ],
  },
  {
    title: 'Datenverarbeitung für Folgeprozesse',
    subtitle: 'Python- und SQL-basierte Normalisierung für belastbare Übergaben in nachgelagerte Systeme.',
    facts: [
      { label: 'Ausgangslage', text: 'Folgeprozesse litten unter Mischformaten, unklaren Feldkonventionen und uneinheitlicher Datenqualität.' },
      { label: 'Technischer Ansatz', text: 'Deterministische Transformationsketten mit Prüfregeln für Pflichtfelder, Datentypen, Duplikate und fachliche Plausibilität.' },
      { label: 'Betriebseffekt', text: 'Korrekturschleifen verschoben sich aus dem Tagesgeschäft in einen kontrollierten Vorverarbeitungsprozess.' },
      { label: 'Warum das relevant ist', text: 'Nachgelagerte Systeme erhielten verlässlichere Eingaben und wurden weniger durch Ausreißer belastet.' },
    ],
    metrics: [
      { label: 'Datenqualität', value: 'stabilere Eingabebasis', note: 'beobachteter Effekt in Folgeprozessen, ohne offengelegte interne KPI-Werte' },
      { label: 'Betriebsaufwand', value: 'weniger Ad-hoc-Korrekturen', note: 'Trendbewertung aus operativer Praxis' },
    ],
  },
  {
    title: 'Automatisierung wiederkehrender Betriebsaufgaben',
    subtitle: 'Standardisierte Skriptabläufe für wiederkehrende Betriebsaufgaben mit klaren Rollback-Pfaden.',
    facts: [
      { label: 'Ausgangslage', text: 'Manuelle Routinen waren personenabhängig, zeitkritisch und in Stoßzeiten fehleranfällig.' },
      { label: 'Technischer Ansatz', text: 'Containerisierte Ausführung, versionierte Konfiguration und feste Ausführungsfenster mit nachvollziehbarem Logging.' },
      { label: 'Betriebseffekt', text: 'Wiederkehrende Aufgaben liefen konsistenter und konnten auch bei Personalwechsel stabil fortgeführt werden.' },
      { label: 'Warum das relevant ist', text: 'Betriebszeit ging weniger in Routinepflege, mehr in gezielte Verbesserungsarbeit.' },
    ],
    metrics: [
      { label: 'Ausführungsstabilität', value: 'höher und reproduzierbar', note: 'auf Basis standardisierter Abläufe statt individueller Handarbeit' },
      { label: 'Planbarkeit', value: 'klarere Zeitfenster', note: 'operative Einschätzung aus wiederkehrenden Runs' },
    ],
  },
  {
    title: 'Monitoring und Fehleranalyse für Schnittstellen',
    subtitle: 'Monitoring-Modell mit technischen Signalen, Prozessindikatoren und strukturierten Eskalationspfaden.',
    facts: [
      { label: 'Ausgangslage', text: 'Störungen wurden oft erst bei fachlichen Auswirkungen sichtbar, Ursachenanalyse war reaktiv und lang.' },
      { label: 'Technischer Ansatz', text: 'Einheitliche Log-Korrelation, priorisierte Alerts und Trennung von Transport-, Validierungs- und Prozessfehlern.' },
      { label: 'Betriebseffekt', text: 'Incident-Triage wurde reproduzierbar, Übergaben zwischen Betrieb und Fachseite sauberer.' },
      { label: 'Warum das relevant ist', text: 'Störungsbearbeitung blieb auch unter Last strukturiert und weniger personenabhängig.' },
    ],
    metrics: [
      { label: 'Reaktionsfähigkeit', value: 'frühere Erkennung von Drift', note: 'durch zusätzliche Prozesssignale neben technischen Fehlern' },
      { label: 'Escalation Noise', value: 'geringer', note: 'weniger unklare Eskalationen durch bessere Priorisierung' },
    ],
  },
];

export const additionalProjectsDe: ProjectCompact[] = [
  { title: 'Betriebsstabile Mapping-Strecken mit Lobster Data', subtitle: 'Regelbasierte Datenflüsse mit klaren Fehlerklassen und nachvollziehbarer Nachbearbeitung.' },
  { title: 'Datenmigration bei Systemwechsel', subtitle: 'Bereinigung von Altdaten und verlässliches Mapping ins Zielsystem.' },
  { title: 'Standardisierung von Import- und Export-Prozessen', subtitle: 'Dateiformate vereinheitlicht und Validierung vor der Verarbeitung etabliert.' },
  { title: 'Self-hosted Server-Infrastruktur', subtitle: 'Containerisierte Dienste, Reverse Proxy und automatisiertes Backup.' },
  { title: 'Zentrales Device-Management-System', subtitle: 'Eigenprojekt mit Fokus auf Inventarisierung, Richtlinienlogik und nachvollziehbarer Gerätehistorie.' },
  { title: 'Modernisierung einer gewachsenen Webanwendung', subtitle: 'Strukturierte Weiterentwicklung eines jahrelang gewachsenen PHP/MySQL-Systems.' },
  { title: 'Interaktive Echtzeit-Kartenansicht', subtitle: 'Leaflet.js-basierte Live-Ansicht mit periodischem Refresh und klarer Trennung von Datenquelle und UI.' },
];

export const selectedProjectsEn: ProjectCard[] = [
  {
    title: 'ERP Integration via Lobster Data',
    subtitle: 'B2B integration flows between ERP, partner interfaces, and downstream data processes.',
    facts: [
      { label: 'Starting point', text: 'Heterogeneous source formats, conflicting required-field logic, and inconsistent semantics across systems.' },
      { label: 'Technical approach', text: 'Explicit mapping contracts, validation-before-processing, clear error classes, and reproducible routing paths.' },
      { label: 'Operational effect', text: 'Failures became easier to classify early, rework became easier to prioritize, and functional clarifications got faster.' },
      { label: 'Why it matters', text: 'The integration flow stayed controllable under change instead of escalating on each format deviation.' },
    ],
    metrics: [
      { label: 'Manual rework', value: 'noticeably reduced', note: 'operational observation, not a published client KPI' },
      { label: 'Failure triage time', value: 'shorter cycles', note: 'trend after clearer error classes and structured logs' },
    ],
  },
  {
    title: 'Data Processing for Downstream Systems',
    subtitle: 'Python- and SQL-based normalization for reliable handover to downstream systems.',
    facts: [
      { label: 'Starting point', text: 'Downstream flows were affected by mixed formats, unclear field conventions, and inconsistent data quality.' },
      { label: 'Technical approach', text: 'Deterministic transformation chains with checks for required fields, data types, duplicates, and business plausibility.' },
      { label: 'Operational effect', text: 'Correction loops moved from live operations into a controlled pre-processing stage.' },
      { label: 'Why it matters', text: 'Dependent systems received more reliable inputs and were less disrupted by outliers.' },
    ],
    metrics: [
      { label: 'Data quality', value: 'more stable input baseline', note: 'observed impact in downstream operations without disclosing internal KPI figures' },
      { label: 'Operational effort', value: 'fewer ad-hoc corrections', note: 'trend-level assessment from day-to-day operation' },
    ],
  },
  {
    title: 'Automation of Repetitive Operational Tasks',
    subtitle: 'Standardized script operations for repetitive tasks with clear rollback paths.',
    facts: [
      { label: 'Starting point', text: 'Manual routines were person-dependent, time-critical, and error-prone in peak situations.' },
      { label: 'Technical approach', text: 'Containerized execution, versioned configuration, and fixed execution windows with traceable logging.' },
      { label: 'Operational effect', text: 'Recurring tasks ran more consistently and remained stable across staffing changes.' },
      { label: 'Why it matters', text: 'Less operational time went into routine handling, more into targeted improvements.' },
    ],
    metrics: [
      { label: 'Execution stability', value: 'higher and repeatable', note: 'based on standardized runs instead of manual variance' },
      { label: 'Planning reliability', value: 'clearer execution windows', note: 'operational estimate from recurring workload' },
    ],
  },
  {
    title: 'Monitoring and Interface Incident Analysis',
    subtitle: 'Monitoring model with technical signals, process indicators, and structured escalation paths.',
    facts: [
      { label: 'Starting point', text: 'Incidents often became visible only after business impact, with reactive and lengthy diagnosis loops.' },
      { label: 'Technical approach', text: 'Unified log correlation, prioritized alerts, and separation of transport, validation, and process failures.' },
      { label: 'Operational effect', text: 'Incident triage became reproducible and handovers between operations and business teams improved.' },
      { label: 'Why it matters', text: 'Incident handling remained structured even under sustained load.' },
    ],
    metrics: [
      { label: 'Response readiness', value: 'earlier drift detection', note: 'through process-level signals in addition to technical errors' },
      { label: 'Escalation noise', value: 'lower', note: 'fewer ambiguous escalations after alert prioritization' },
    ],
  },
];

export const additionalProjectsEn: ProjectCompact[] = [
  { title: 'Operationally Stable Mapping Flows with Lobster Data', subtitle: 'Rule-based data flows with clear error classes and traceable correction paths.' },
  { title: 'Data Migration During System Transition', subtitle: 'Legacy data cleanup and reliable mapping into the target system.' },
  { title: 'Standardized Import and Export Pipelines', subtitle: 'Unified file standards with pre-processing validation gates.' },
  { title: 'Self-hosted Server Infrastructure', subtitle: 'Containerized services, reverse proxy, and automated backups.' },
  { title: 'Central Device Management System', subtitle: 'Custom-built MDM solution for heterogeneous device environments.' },
  { title: 'Modernization of a Long-Grown Web Application', subtitle: 'Structured evolution of a PHP/MySQL system that had grown over many years.' },
  { title: 'Interactive Real-Time Map View', subtitle: 'Leaflet-based live map display with automatic refresh.' },
];
