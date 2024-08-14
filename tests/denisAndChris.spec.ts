import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByPlaceholder('What needs to be done?').click();
    await page.getByPlaceholder('What needs to be done?').click();
    await page.getByPlaceholder('What needs to be done?').fill('Denis and Chris');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Chris and Denis ');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Login');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Logout');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.locator('li').filter({ hasText: 'Logout' }).getByLabel('Toggle Todo').check();
    await page.locator('li').filter({ hasText: 'Login' }).getByLabel('Toggle Todo').check();
    await page.locator('li').filter({ hasText: 'Chris and Denis' }).getByLabel('Toggle Todo').check();
    await page.locator('li').filter({ hasText: 'Denis and Chris' }).getByLabel('Toggle Todo').check();
    await page.getByText('Mark all as complete').click();
});