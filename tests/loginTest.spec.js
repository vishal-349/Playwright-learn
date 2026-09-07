const{test , expect} = require('@playwright/test')

test.only('login with valid cred', async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

await page.locator('input#username').fill('rahulshettyacademy');
await page.locator('input#password').fill('Learning@830$3mK2');
await page.locator('input#terms').check();
await page.locator('input#signInBtn').click();
const allTitles = page.locator ('h4.card-title');
await expect(allTitles.first()).toBeVisible();
console.log(await allTitles.allTextContents());

console.log(allTitles);


})

test('login with invalid creds' , async ({page})=>{

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
await page.locator('input#username').fill('rahulshettyacademy');
await page.locator('input#password').fill('Learning@830$3mK22');
await page.locator('input#terms').check();
await page.locator('input#signInBtn').click();
// console.log(await page.locator('.alert.alert-danger').textContent());
await expect(page.locator('.alert.alert-danger')).toContainText("Incorrect");




})


