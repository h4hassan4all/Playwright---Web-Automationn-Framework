const {expect} = require ('@playwright/test');

 module.exports = {

    verifyLandingPageTitle: (actual,expected) => {
        expect(actual).toBe(expected);
  },

}; 
