const {test} = require ('@playwright/test');
const { Dashboard } = require('../pageObjects/Dashboard');
const {LoginPage} = require('../pageObjects/LoginPage')
const dashboardAssertion = require ('../assertions/dashboard')





test.describe.serial('@Web Orange HRM test Cases', () => {
let page;
test.beforeAll(
    async ({browser}) =>{
        page = await browser.newPage();
        const loginPage = new LoginPage(page);

        //Navigate to Login Page
    await loginPage.goTo();
    //Login with valid creds:
    await loginPage.validLogin('Admin','admin123') ;
    }
)

test ('Log Out', async ({})=>{
   const dashboard = new Dashboard(page)
   await dashboard.logOut();
   await dashboardAssertion.verifyLandingPageTitle(await dashboard.verifyUserIsLoggedOut(),'Login');
  }); 
});