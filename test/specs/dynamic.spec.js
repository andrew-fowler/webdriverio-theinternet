/**
 * Created by andrewfowler on 1/23/17.
 */
var expect = require('chai').expect;
var DynamicPage = require('../pageobjects/dynamic.page');

describe('dynamic loading page', function () {
    it('should show a Hello World label after that Start button is pressed', function () {
        DynamicPage.open();
        DynamicPage.btnStart.click();
        DynamicPage.lblDone.waitForExist(10000); /** Default is 500 according to docs **/
        expect(DynamicPage.lblDone.isExisting()).to.be.equal(true);
    });
});