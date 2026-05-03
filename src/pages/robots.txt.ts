import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
  const configuredSite =
    process.env.SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);
  const siteUrl = configuredSite?.replace(/\/$/, '') ?? new URL(request.url).origin;
  const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
