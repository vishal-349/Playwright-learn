import {test , expect} from '@playwright/test';
import {LoginPage} from '../Pages/ecomLogin.js';


test ('validate login with valid creds' , async({page})=>{


const loginpage = new LoginPage(page);

await loginpage.navigateToLoginPage();

await loginpage.login("demo@demo.com","demo");

await expect(loginpage.home).toBeVisible();

})