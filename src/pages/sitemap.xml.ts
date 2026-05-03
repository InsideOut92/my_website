import type { APIRoute } from 'astro';

const ROUTES = ['/', '/skills', '/projekte', '/kontakt', '/impressum', '/datenschutz'];

export const GET: APIRoute = ({ request }) => {
  const configuredSite =
    process.env.SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);
  const siteUrl = configuredSite?.replace(/\/$/, '');
  const origin = siteUrl ?? new URL(request.url).origin;
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = ROUTES.map((route) => {
    const loc = `${origin}${route}`;
    return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
