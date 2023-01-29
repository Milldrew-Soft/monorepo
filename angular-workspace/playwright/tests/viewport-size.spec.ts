import { test } from '@playwright/test';

test('visualy look at screen sizes', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  type ViewPort = { width: number; height: number };
  const viewPorts: ViewPort[] = [
    { width: 1920, height: 1080 },
    { width: 1440, height: 900 },
    { width: 2560, height: 1440 },
    { width: 1536, height: 864 },
    { width: 1280, height: 720 },
  ];
  const viewPortCount = viewPorts.length;
  for (let viewPortId = 0; viewPortId < viewPortCount; viewPortId += 1) {
    const currentViewPort = viewPorts[viewPortId];
    await page.setViewportSize(currentViewPort);
  }

  await page.goto('http://localhost:4200/stream/123');
  for (let viewPortId = 0; viewPortId < viewPortCount; viewPortId += 1) {
    const currentViewPort = viewPorts[viewPortId];
    await page.setViewportSize(currentViewPort);
  }
});
