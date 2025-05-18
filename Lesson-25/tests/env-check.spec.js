import { test, expect } from '@playwright/test';

test('basic page checks', async ({ page }) => {
   await page.goto(process.env.BASE_URL);

  const response = await page.waitForResponse(response => response.url() === process.env.BASE_URL && response.status() === 200);
  expect(response.ok()).toBeTruthy();

  const title = await page.title();
  expect(title).not.toBeNull();
  expect(title.length).toBeGreaterThan(0);

  await expect(page.locator('body')).toContainText('Welcome');
});
