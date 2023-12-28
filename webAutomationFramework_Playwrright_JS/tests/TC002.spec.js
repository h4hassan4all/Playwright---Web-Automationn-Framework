const {test} = require ('@playwright/test');
const {LoginPage} = require('../pageObjects/LoginPage')
const {PersonalInfo} = require('../pageObjects/PersonalInfo');
const personalInfoAssertions = require('../assertions/personalInfo');



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

test ('upadte DOB', async ({})=>{
  
  const personalInfo = new PersonalInfo(page);
  await personalInfo.navigateToMyInfoPage();
  personalInfoAssertions.verifyPageTitle(await personalInfo.veriyUserLandedOnMyInfoPage(), 'PIM');

const prevDOB = await personalInfo.checkDOBValue();
(prevDOB !=null) ? await personalInfo.fillDOBValue() : console.log('error dob is not filled in');

await personalInfo.clickOnSave();
personalInfoAssertions.assertSuccessMessage(await personalInfo.verifySuccessMessage(),'SuccessSuccessfully Updated×');

const newDOB =  await personalInfo.checkDOBValue();
personalInfoAssertions.assertDOBValue(newDOB, personalInfo.dob);

  }); 
});