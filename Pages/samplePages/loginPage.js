export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('input#username');
        this.password = page.locator('input#password');
        this.terms = page.locator('input#terms');
        this.signInButton = page.locator('input#signInBtn');
    }

  

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.terms.check();
        await this.signInButton.click();
    }
}