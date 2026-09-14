import  {test , expect} from '@playwright/test';
import { LoginPage } from '../../Pages/samplePages/loginPage';

test('login with valid credentials', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const loginPage = new LoginPage(page);

    await loginPage.login(
        'rahulshettyacademy',
        'Learning@830$3mK2'
    );
});