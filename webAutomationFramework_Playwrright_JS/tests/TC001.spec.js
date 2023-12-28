const {test} = require ('@playwright/test');
const {LoginPage} = require('../pageObjects/LoginPage')
const loginAssertion = require('../assertions/login');
const { logintest } = require('../utils/test-options');


logintest('@Web validLoginCase', async ({page,testDataForLogin})=>{

    const loginPage = new LoginPage(page);
    //Navigate to Login Page
    await loginPage.goTo();
    //Login with valid creds:
    await loginPage.validLogin(testDataForLogin.username,testDataForLogin.password) ;
    //assert the pageTitle , Dashboard Text
    loginAssertion.verifyPageTitle(await loginPage.getPageTitle(),testDataForLogin.pageTitle);
    loginAssertion.verifyTextAfterLogin(await loginPage.getTextAfterLogin(),testDataForLogin.textAfterLogin);
});


