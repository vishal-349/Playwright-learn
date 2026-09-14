
import {Signup} from '../Pages/signUp.js';
import {test , expect} from '@playwright/test';

test ('user registration with valid details' , async({page})=>{

await page.goto('https://shop.qaautomationlabs.com/register.php');
await page.locator('button#registerBtn').click();

const signup = new Signup(page);


await signup.register(
    'Vishal',
        'Tyagi',
        'vishal.test@gmail.com',
        '9999999999',
        'Male',
        '1998-01-01',
        'India',
        'Fashion',
        './test-data/profile.jpg',
        'Test@123'
);

await expect(page).toHaveURL(
        'https://shop.qaautomationlabs.com/index.php'
    );


} )