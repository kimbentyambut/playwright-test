
const { test, expect } = require('@playwright/test');

test('Submit form and display result', async ({ page }) => {

  await page.goto('http://localhost:3000');


  await expect(page).toHaveTitle('Playwright Test Site');

  await page.fill('#name', 'Playwright');

  await page.click('button[type="submit"]');


  const result = await page.locator('li').first();
  
  await expect(result).toHaveText('Hello, Playwright! Your data was submitted successfully.');
});
