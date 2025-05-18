# Test info

- Name: example test
- Location: C:\D\Kate\Code\git_test\Playwright\lesson-25\tests\env-check.spec.js:3:5

# Error details

```
Error: browserType.launch: Host system is missing dependencies!

Full list of missing libraries:
    chrome_elf.dll

```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 |
> 3 | test('example test', async ({ page }) => {
    |     ^ Error: browserType.launch: Host system is missing dependencies!
  4 |   await page.goto(process.env.BASE_URL);
  5 |   expect(await page.title()).not.toBeNull();
  6 | });
  7 |
  8 |
```