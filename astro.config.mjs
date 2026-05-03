// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

// https://astro.build/config
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const env = loadEnv(mode, process.cwd(), '');
const rawSite = env.SITE_URL ?? process.env.SITE_URL;
const rawVercelUrl = env.VERCEL_URL ?? process.env.VERCEL_URL;
const site = rawSite ?? (rawVercelUrl ? `https://${rawVercelUrl}` : undefined);
const normalizedSite = site?.replace(/\/$/, '');

export default defineConfig({
  ...(normalizedSite ? { site: normalizedSite } : {}),
});
