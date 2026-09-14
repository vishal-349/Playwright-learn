const{test, expect} =require('@playwright/test');

test('validate new window' , async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');


const blikingText = page.getByText('Free Access to InterviewQues/ResumeAssistance/Material');


const[newPage]=await Promise.all([context.waitForEvent('page'),
 await blikingText.click()]);



await newPage.waitForLoadState();
const newPageText = newPage.getByText(' Website in which you have enrolled');
await expect(newPageText).toContainText(' Website in which you have enrolled');


const username = page.locator('input#username');
await username.fill('rahulshettyacademy');
const value = await username.inputValue();

console.log(value);







});
