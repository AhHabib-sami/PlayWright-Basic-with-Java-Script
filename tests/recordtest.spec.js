import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://syfmart.com/');
  await page.getByRole('listitem').filter({ hasText: 'Guest User Sign in to your' }).getByRole('button').click();
  await page.getByRole('link', { name: ' Sign In' }).click();
  await page.getByRole('textbox', { name: 'Enter your email address' }).click();
  await page.getByRole('textbox', { name: 'Enter your email address' }).fill('16541560');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('54851651');
  await page.locator('.checkmark').click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  await page.locator('.btn-group-flex').click();
  await expect(page.getByRole('textbox', { name: 'Enter your password' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.locator('#page')).toContainText('Welcome Back!');
  await expect(page.locator('#page')).toContainText('Welcome Back!');
});