class Dashboard{

    constructor(page)
    {
        this.page = page;
        this.profileIcon = `//span[@class='oxd-userdropdown-tab']`;
        this.logOutButton = `(//a[normalize-space()='Logout'])[1]`;
        this.landingPage = `//h5[normalize-space()='Login']`;
    }

    async logOut()
    {
        await this.page.waitForSelector(this.profileIcon)
        await this.page.locator(this.profileIcon).click();
        await this.page.waitForSelector(this.logOutButton);
        await this.page.locator(this.logOutButton).click();
    }

    async verifyUserIsLoggedOut()
    { 
        await this.page.waitForSelector(this.landingPage);
        return await this.page.locator(this.landingPage).textContent();

    }
    
    
}

module.exports = {Dashboard};