// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const site = process.env.SITE_URL;

export default defineConfig({
  ...(site ? { site } : {}),
});
