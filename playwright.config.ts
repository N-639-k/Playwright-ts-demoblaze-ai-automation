import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 40000,

  use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    actionTimeout: 8000,
    navigationTimeout: 15000
  },

  reporter: [['html', { open: 'on-failure' }]]
});
