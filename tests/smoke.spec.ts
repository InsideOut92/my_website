import { expect, test } from '@playwright/test';

const routes = [
  '/',
  '/projekte/',
  '/blog/',
  '/blog/lobster-data-mapping-und-validierung-im-betrieb/',
  '/kontakt/',
  '/impressum/',
  '/datenschutz/',
  '/en/',
  '/en/projects/',
  '/en/blog/',
  '/en/blog/lobster-data-mapping-and-validation-in-production/',
  '/en/contact/',
  '/en/imprint/',
  '/en/privacy/',
];

test.describe('Core routes', () => {
  for (const route of routes) {
    test(`loads ${route}`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
      expect(response?.ok()).toBeTruthy();
      await expect(page.locator('main')).toBeVisible();
    });
  }
});
