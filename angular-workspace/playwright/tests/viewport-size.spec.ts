import { test, expect } from '@playwright/test';

test('visualy look at screen sizes', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.goto('http://localhost:4200/stream/123');
});
