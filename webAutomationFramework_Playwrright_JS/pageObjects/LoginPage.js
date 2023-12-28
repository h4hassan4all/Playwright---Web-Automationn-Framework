class LoginPage {

    constructor(page)
    {
        this.page = page;
        this.userNameField = page.getByPlaceholder('username');
        this.passwordField = page.getByPlaceholder('Password');
        this.signInButton = page.locator(`button[type='submit']`);
        this.textPresentAfterLogin = '.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module';
    }

    async  goTo ()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await this.page.waitForLoadState('networkidle');
       // await this.page.waitForSelector(username);
    }
    
    async getPageTitle()
    {
            const pageTitle = await this.page.title();
            return pageTitle;
    }

    async validLogin(username, password)
    {
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');

    }
    async getTextAfterLogin()
    {
       const textAfterLogin = await this.page.textContent(this.textPresentAfterLogin);
       return textAfterLogin;

    }
};

module.exports = {LoginPage};