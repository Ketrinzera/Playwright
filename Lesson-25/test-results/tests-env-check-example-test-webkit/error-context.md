# Test info

- Name: example test
- Location: C:\D\Kate\Code\git_test\Playwright\lesson-25\tests\env-check.spec.js:3:5

# Error details

```
Error: browserType.launch: Host system is missing dependencies!

Full list of missing libraries:
    brotlicommon.dll
    libpng16.dll
    harfbuzz.dll
    icuuc76.dll
    icuin76.dll
    icutu76.dll
    icudt76.dll
    brotlidec.dll
    brotlienc.dll
    jxl_cms.dll
    lcms2-2.dll
    crypto-55.dll
    nghttp2.dll
    nghttp3.dll
    ngtcp2.dll
    ngtcp2_crypto_quictls.dll
    ssl-58.dll
    zlib1.dll
    libglesv2.dll
    libxml2.dll
    libxslt.dll
    libsharpyuv.dll
    libwebp.dll
    javascriptcore.dll
    webcore.dll
    webkit2.dll
    harfbuzz-icu.dll
    jpeg62.dll
    jxl.dll
    libegl.dll
    libcurl.dll
    libwebpdemux.dll
    libwebpmux.dll
    psl-5.dll
    sqlite3.dll

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