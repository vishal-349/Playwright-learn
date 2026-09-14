export class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginPageUrl = 'https://shop.qaautomationlabs.com/';

        this.email = page.locator('input#email');
        this.password = page.locator('input#password');
        this.loginBtn = page.locator('button#loginBtn');
        this.home = page.locator('a.breadcrumb-item.text-dark[href="#"]');
    }

    async navigateToLoginPage() {
        await this.page.goto(this.loginPageUrl);
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
}