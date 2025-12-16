import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const testEnv = process.env.TEST_ENV || 'dev';
dotenv.config({ path: path.resolve(__dirname, 'environment', '.env') });
dotenv.config({ path: path.resolve(__dirname, 'environment', `${testEnv}.env`) });

export default defineConfig({
  fullyParallel: true,

  timeout: 60 * 1000,
  expect: {
    timeout: 5000,
  },
  testDir: './tests',
  testMatch: '*.spec.ts',
  workers: 4,
  forbidOnly: !!process.env.CI,
  retries: 0,
  use: {
    headless: false,
    viewport: null,
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    testIdAttribute: 'data-test-id',
    navigationTimeout: 30 * 1000,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
  globalTimeout: 300 * 1000,
  reporter: [['list'], ['html', { open: 'never' }]],
});
