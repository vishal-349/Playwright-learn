const{test} =require('@playwright/test');

test('validate new window' , async({page})=>{

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

const blikingText = page.locator('.blinkingText');
await blikingText.nth(1).click();



})

