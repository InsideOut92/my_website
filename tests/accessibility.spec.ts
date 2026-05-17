import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const auditRoutes = ['/', '/blog/', '/projekte/', '/kontakt/', '/en/', '/en/blog/'];

for (const route of auditRoutes) {
  test(`accessibility baseline ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'networkidle' });
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
