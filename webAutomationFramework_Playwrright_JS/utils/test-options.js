const base = require ('@playwright/test');


exports.logintest = base.test.extend(
    {
        testDataForLogin: {
            username: 'Admin',
            password: 'admin123',
            pageTitle: 'OrangeHRM',
            textAfterLogin: 'Dashboard',
        }
    }
)