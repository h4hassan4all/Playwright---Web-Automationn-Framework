const faker  =  require ('@faker-js/faker');
class PersonalInfo{

    constructor(page){
        this.page =page;
        this.myInfo = `//span[normalize-space()='My Info']`;
        this.infoPageTitle = 'body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)';
        this.dateOfBirthSelector = 'body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)';
        this.saveButton = page.locator(`div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] button[type='submit']`);
        this.successMessage = `//div[@id='oxd-toaster_1']`;
        this.dob = '1996-12-12';

    }

    async navigateToMyInfoPage ()
    {
    
        await this.page.waitForSelector(this.myInfo);
        await this.page.locator(this.myInfo).click();
        await this.page.waitForLoadState();
        
    }

    async veriyUserLandedOnMyInfoPage ()
    {
            const myInfoText = await this.page.textContent(this.infoPageTitle);
            return myInfoText;
    }

    async verifyDOBFieldIsPresentOnPage()
    {
        await this.page.waitForSelector(this.dateOfBirthSelector);
    }

    async checkDOBValue ()
    {
        await this.page.waitForSelector(this.dateOfBirthSelector);
        const dateOfBirthValue = await this.page.$eval(
            this.dateOfBirthSelector,
            (input) => input.value
          );
         return dateOfBirthValue;
    }

    async fillDOBValue()
    {
        await this.page.locator(this.dateOfBirthSelector).fill(this.dob);
        
    }
    async clickOnSave()
    {
        await this.saveButton.click();
    }

    async verifySuccessMessage()
    {
        await this.page.waitForSelector(this.successMessage);
        const successMessageValue = await this.page.locator(this.successMessage).textContent(); 
        return successMessageValue;
    }


};
module.exports = {PersonalInfo};