// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const site = process.env.SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export default defineConfig({
  ...(site ? { site } : {}),
});
