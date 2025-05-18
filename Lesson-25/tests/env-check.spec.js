import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  expect(await page.title()).not.toBeNull();
});

