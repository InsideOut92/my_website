import type { APIRoute } from 'astro';
import { PAGE_ROUTES, type PageKey } from '../utils/i18n';
import { blogPostsDe, blogPostsEn } from '../data/blog';

const PAGE_KEYS: PageKey[] = ['home', 'blog', 'skills', 'projects', 'contact', 'imprint', 'privacy'];
const ROUTES = PAGE_KEYS.flatMap((key) => {
  const route = PAGE_ROUTES[key];
  return [
    { loc: route.de, de: route.de, en: route.en },
    { loc: route.en, de: route.de, en: route.en },
  ];
});

const BLOG_ROUTES = [
  ...blogPostsDe.map((post) => ({ loc: `/blog/${post.slug}` })),
  ...blogPostsEn.map((post) => ({ loc: `/en/blog/${post.slug}` })),
];

export const GET: APIRoute = ({ request }) => {
  const configuredSite =
    process.env.SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);
  const siteUrl = configuredSite?.replace(/\/$/, '');
  const origin = siteUrl ?? new URL(request.url).origin;
  const lastmod = new Date().toISOString().split('T')[0];

  const localizedUrls = ROUTES.map((route) => {
    const loc = `${origin}${route.loc}`;
    const de = `${origin}${route.de}`;
    const en = `${origin}${route.en}`;
    const xDefault = `${origin}/`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="de" href="${de}" />
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}" />
  </url>`;
  }).join('\n');

  const blogUrls = BLOG_ROUTES.map((route) => `  <url>
    <loc>${origin}${route.loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${localizedUrls}
${blogUrls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
