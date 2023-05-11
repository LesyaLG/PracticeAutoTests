const { BasePage } = require("./basePage");
exports.RegistrationPage = class RegistrationPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.fullName = page.locator("[placeholder='Full name']");
        this.email = page.locator("[type='email']");
        this.password = page.locator("[type='password']");
        this.registerButton = page.getByRole('button');
        this.signInLink = page.locator("[href='/sign-in']");

    }

    async register(userFullName, userEmail, userPassword) {
        await this.fullName.type(userFullName);
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.registerButton.click();
    }

    async openSignInPage() {
        await this.signInLink.click();
    }


}