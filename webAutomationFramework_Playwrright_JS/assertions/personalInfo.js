const {expect} = require ('@playwright/test');

 module.exports = {

    verifyPageTitle: (actual,expected) => {
        expect(actual).toBe(expected);
  },

  assertSuccessMessage: (actual,expected) => {
    expect(actual).toBe(expected);
  },

  assertDOBValue: (actual,expected) => {
    expect(actual).toBe(expected);
  }
  
}; 