const { test, expect, request } = require('@playwright/test');
//const { LoginPage } = require('../pages/loginPage');
//const { EditProfilePage } = require('../pages/editProfilePage');
const { RegistrationPage } = require('../pages/registrationPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let registrationPage;
const env = config.default.use.env;


test.describe('Registration tests', () => {

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.open();
    });

 
    test('Register with valid data', async ({ page }) => {
       // await registrationPage.register('LG','lesya558@gmail.com', 't_1234');
       await registrationPage.register(userData.generatedFullName, userData.generatedEmail, userData.password);
       
        //await registrationPage.register('LG',chance.email({domain: 'gmail.com'}), 't_1234');
        
        //await expect(page.locator("[class='logo']")).toBeVisible;
       await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });
    
    test('Open SignIn Page', async ({ page }) => {
        await registrationPage.openSignInPage();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });

});
