const{test , expect} = require('@playwright/test');

test('sign up correctly' , async ({page})=>{

await page.goto('https://rahulshettyacademy.com/client');


const registerHereBtn= page.locator('.text-reset');
await registerHereBtn.click();
const registerTxt = page.locator('.login-title');
await expect(registerTxt).toBeVisible();
const firstName = page.locator('#firstName');
const lastName = page.locator('#lastName');
const email = page.locator('#userEmail');
const PhoneNumber = page.locator('#userMobile');
const Occupation = page.locator('select.custom-select');
const genderMale = page.locator('input[value="Male"]');
const password = page.locator('#userPassword');
const confirmPassword = page.locator('#confirmPassword');
const checkbox = page.locator('input[type="checkbox"]');
const registerBtn =  page.locator('input[value="Register"]');
const confirmation = page.locator('h1.headcolor')

await firstName.fill('zishal');
await lastName.fill('zyagi');
await email.fill('znnnbnbn349@gmail.com');
await PhoneNumber.fill('9897000000');
await Occupation.selectOption({value: '3: Engineer'});
await genderMale.check();
await password.fill('Vishal#123');
await confirmPassword.fill('Vishal#123');
await checkbox.check();
await registerBtn.click();
await expect(confirmation).toHaveText('Account Created Successfully', {timeout:15000});


})


test.only('login with valid creds' , async({page})=>{

await page.goto('https://rahulshettyacademy.com/client');

const loginEmail= page.locator('#userEmail');
const loginPassword = page.locator('#userPassword');
const loginBtn = page.locator('#login');

await loginEmail.fill('znnnbnbn349@gmail.com');
await loginPassword.fill('Vishal#123');
await loginBtn.click();
await page.locator(".card-body").first().waitFor();
const titles = await page.locator('.card-body').allTextContents();
console.log(titles);


})
