// const{test, expect}=require('@playwright/test');


// test('first playwright test',async ({browser})=>{

// const context =await browser.newContext();

// const page =await context.newPage();

// await page.goto("https://rahulshettyacademy.com/");



// });


// test.only('page playwright test' , async ({page})=>{

// await page.goto("https://www.youtube.com/");
// await expect(page).toHaveTitle('YouTube')



// })



const{test ,expect}=require('@playwright/test')

test('first test' , async ({browser})=>{

const context = await browser.newContext();

const page = await context.newPage();

await page.goto('https://rahulshettyacademy.com/');
await page.locator("input#username").fill("rahulshettyacademy");
await page.locator("input#password").fill("Learning@830$3mK2");
await page.locator("input#checkbox").check();












});

test('visit youtube & match tab title' ,async ({page})=>{

    await page.goto('https://www.youtube.com/');
    await expect(page).toHaveTitle('YouTube');

} )