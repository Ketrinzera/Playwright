// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // testMatch: 'tests/*.spec.js',
  //testIgnore: '/tests/test.spec.js',
  //globalSetup: './globalSetup.js',
  //globalTeardown: './globalTeardown.js',
 // timeout: 40_000,
  //fullyParallel: false,
 // forbidOnly: !!process.env.CI,
//retries: process.env.CI ? 2 : 0,
 // workers: process.env.CI ? 1 : undefined,
  //reporter: 'html',

  use: {
    actionTimeout: 70000,
    baseURL: process.env.BASE_URL,
    viewport: {
      width: 1080,
      height: 720
    },
    headless: false,
    httpCredentials: {
      username: process.env.HTTP_CREDENTIALS_USERNAME || '',
      password: process.env.HTTP_CREDENTIALS_PASSWORD || '',
    },
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ]

  });
