# Final QA Checklist

## Build and Static Checks
- [ ] `node -v` is `>=22.12.0`
- [ ] `npm ci` completed successfully
- [ ] `npm run check` passed without errors
- [ ] `npm run build` passed successfully

## Core Routes (DE)
- [ ] `/`
- [ ] `/projekte`
- [ ] `/blog`
- [ ] `/blog/cloudflare-migration-portfolio-domain`
- [ ] `/kontakt`
- [ ] `/impressum`
- [ ] `/datenschutz`

## Core Routes (EN)
- [ ] `/en`
- [ ] `/en/projects`
- [ ] `/en/blog`
- [ ] `/en/blog/cloudflare-portfolio-migration-custom-domain`
- [ ] `/en/contact`
- [ ] `/en/imprint`
- [ ] `/en/privacy`

## SEO / Technical
- [ ] `/robots.txt` returns sitemap URL for production domain
- [ ] `/sitemap.xml` includes DE/EN core routes and blog entries
- [ ] canonical and hreflang tags are present on key pages
- [ ] JSON-LD script is present on home and blog article pages

## UX / Content
- [ ] hero has two visible CTAs (primary + secondary button)
- [ ] project cards render with problem/solution/result blocks
- [ ] recruiter snapshot appears on home (DE/EN)
- [ ] contact CTA (`mailto`) works on DE/EN contact sections
- [ ] no broken characters or transliterated umlauts in visible German content

## Cloudflare Deployment
- [ ] `SITE_URL=https://ps-software-solutions.com` set in Pages environment
- [ ] deploy succeeded
- [ ] HTTPS works without warnings
- [ ] post-deploy smoke test completed on desktop + mobile
