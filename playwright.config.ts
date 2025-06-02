import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* テストのランダム実行を無効化 - テストの順序依存性を防ぐ */
  globalSetup: './tests/e2e/global-setup.ts', // グローバルセットアップの設定ファイルを指定
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  /* ワーカー数 - パフォーマンス最適化のために明示的に設定 */
  workers: process.env.CI ? 1 : 2, // CIでは1、開発時は2ワーカーに設定
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:5173',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    /* トレース収集 - パフォーマンス向上のため失敗時のみ収集 */
    trace: 'on-first-retry',

    /* タイムアウト設定の最適化 - 速度改善のために短縮 */
    actionTimeout: 5000,
    navigationTimeout: 5000,

    /* パフォーマンス最適化のための設定 */
    launchOptions: {
      slowMo: 0, // テスト実行を遅延させない
    },
    /* 不要なリソースのロードをブロック */
    context: {
      serviceWorkers: 'block', // サービスワーカーをブロックして高速化
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // WebKitは復活（iPadテスト用に必須）
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // FirefoxはCI環境でのみ有効
    ...(process.env.CI
      ? [
          {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
          },
        ]
      : []),
  ],

  /* 開発サーバーの設定 */
  webServer: {
    command: process.env.PLAYWRIGHT_SKIP_WEBSERVER ? undefined : 'npm run dev1',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});
