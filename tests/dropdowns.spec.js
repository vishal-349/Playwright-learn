const {test , expect}=require('@playwright/test');

test('test for select type dropdown' , async({page})=>{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const username =  page.locator('#username');
const password = page.locator('#password');
const radio = page.locator('input[type=radio][value=user]')
const popup = page.locator('.modal-content #okayBtn');
const selectDropdown = page.locator('select.form-control');
const checkbox = page.locator('.text-info #terms');
const signinBtn = page.locator('#signInBtn');

await username.fill('rahulshettyacademy');
await password.fill('Learning@830$3mK2');
await radio.check();
await selectDropdown.selectOption('Consultant');

console.log(await checkbox.check().isChecked());

await signinBtn.click();

await page.waitForURL(/rahulshettyacademy.com\/angularpractice\/shop/);



})



test.only('login test with valid cred'  , async({page})=>{

const loginPage = await page.goto('https://rahulshettyacademy.com/loginpagePractise/');


const blinkingText= page.locator('div.float-right > a.blinkingText:first-child');
const username =  page.locator('#username');
const password = page.locator('#password');
const radio = page.locator('input[type=radio][value=user]')
const popup = page.locator('.modal-content #okayBtn');
const selectDropdown = page.locator('select.form-control');
const checkbox = page.locator('.text-info #terms');
const signinBtn = page.locator('#signInBtn');
const exptectedUrl ='https://rahulshettyacademy.com/angularpractice/shop';
const expectedElement = page.locator('h1.my-4');


await expect (blinkingText).toHaveAttribute('href' , 'https://rahulshettyacademy.com/documents-request');
await username.fill ('rahulshettyacademy');
await password.fill('Learning@830$3mK2');
await radio.check();
await popup.click();
await selectDropdown.selectOption ('Consultant')
await checkbox.check();
await signinBtn.click();

await expect(page).toHaveURL(exptectedUrl);
await expect(expectedElement).toBeVisible();
await expect (expectedElement).toHaveText('Shop Name');






})













