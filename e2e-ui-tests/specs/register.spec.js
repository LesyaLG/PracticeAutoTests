const { test, expect, request } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
//const { EditProfilePage } = require('../pages/editProfilePage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let loginPage;
const env = config.default.use.env;


test.describe('Login tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    });

 
    test('Login with valid data', async ({ page }) => {
        await loginPage.login('lesya@gmail.com', 't_1234');
        //await expect(page.locator("[class='logo']")).toBeVisible;
       await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/vertical/default-dashboard');
    });
    
    test('Open SignUp Page', async ({ page }) => {
        await loginPage.openSignUpPage();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-up');
    });

});