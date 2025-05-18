// @ts-check
import { test, expect } from '@playwright/test';

test.describe('First test', () => {
  test.beforeAll(async() => {
    console.log('test');
    console.log('process.env.TEXT_ENVIRONMENT', process.env.TEXT_ENVIRONMENT);



  })
  test.beforeEach(async({ page }) => {
    await page.goto('https://playwright.dev/');
  })

})

test('has title', async ({ page }) => {
  

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.pause();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
