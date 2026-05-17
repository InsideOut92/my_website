# PS Software Solutions Website

Zweisprachige Portfolio-Website (Deutsch/Englisch) auf Basis von Astro.

## Voraussetzungen

- Node.js `>=22.12.0`
- npm `>=10`

## Lokale Entwicklung

1. Abhängigkeiten installieren:
   - `npm ci`
2. Entwicklungsserver starten:
   - `npm run dev`
3. Produktionsbuild prüfen:
   - `npm run build`
4. Typen/Projektcheck:
   - `npm run check`

## Wichtige Umgebungsvariable

In `.env`:

```bash
SITE_URL=https://ps-software-solutions.com
```

Diese URL wird für Canonical-URLs, `sitemap.xml` und `robots.txt` genutzt.

## Deployment auf Cloudflare Pages

Build-Konfiguration:
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22.12.0` oder neuer

Empfohlen:
- `SITE_URL` als Environment Variable in Cloudflare Pages setzen auf:
  - `https://ps-software-solutions.com`

## Inhaltliche Struktur

- Deutsche Seiten unter `/`
- Englische Seiten unter `/en`
- Blog:
  - Deutsch: `/blog`
  - Englisch: `/en/blog`
