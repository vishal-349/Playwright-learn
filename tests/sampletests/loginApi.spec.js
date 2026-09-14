import { test } from '@playwright/test';

test('inspect login network requests', async ({ page }) => {

    page.on('request', request => {
        console.log(
            'REQUEST:',
            request.method(),
            request.url()
        );
    });

    page.on('response', response => {
        console.log(
            'RESPONSE:',
            response.status(),
            response.url()
        );
    });

    await page.goto('https://shop.qaautomationlabs.com/');

    await page.locator('#email').fill('demo@demo.com');
    await page.locator('#password').fill('demo');

    await page.locator('#loginBtn').click();

    await page.waitForTimeout(2000);
});