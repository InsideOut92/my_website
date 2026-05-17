# Release Notes (2026-05-17)

## Scope

Professionalization pass for portfolio website:
- stronger hero hierarchy and CTA clarity
- curated project presentation with structured problem/solution/result blocks
- bilingual blog expansion with technical case study
- recruiter-focused homepage snapshot
- legal/privacy wording cleanup and language quality pass
- SEO/security baseline hardening

## Major Changes

1. Information Architecture and UX
- Hero redesigned as split layout with explicit next-step panel (DE/EN)
- homepage sequence optimized for visitor flow (offer -> proof -> contact)
- recruiter snapshot section added (DE/EN)

2. Project Positioning
- selected projects reduced and prioritized
- project cards normalized into problem/solution/result format
- secondary project experience kept as compact cards

3. Content and Editorial
- new bilingual case-study article on Cloudflare domain migration
- blog highlights now surface most recent high-signal entry
- German umlaut normalization and wording cleanup across key pages

4. Legal and Privacy Pages
- imprint wording adapted to private website context
- privacy page aligned with actual setup (no external analytics/tracking)
- localStorage language preference disclosed

5. Technical Quality
- structured data in place for homepage and blog posts
- sitemap and robots route coverage updated
- security headers via middleware

## Verification Status

- `npm run check`: passed (`0 errors / 0 warnings / 0 hints`)
- link and route consistency validated for DE/EN core pages
- local dev server/browser QA could not be executed in sandbox due to port binding restrictions

## Release Decision

Ready for production deployment with one operational caveat:
- perform final browser smoke test on your machine (desktop + mobile) before/after deploy.
