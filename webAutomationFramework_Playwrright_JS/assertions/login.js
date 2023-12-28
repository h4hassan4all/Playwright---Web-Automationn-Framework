const {expect} = require ('@playwright/test');

 module.exports = {

    verifyPageTitle: (actual,expected) => {
        expect(actual).toBe(expected);
  },

  verifyTextAfterLogin: (actual,expected) => {
    expect(actual).toBe(expected);
  },


}; 
