/**
 * Created by andrewfowler on 1/23/17.
 */
var expect = require('chai').expect;
var DynamicPage = require('../../pageobjects/dynamic.page');

describe('The dynamic loading page', function () {
    it('should show a Hello World label after that Start button is pressed', function () {
        DynamicPage.open();
        DynamicPage.btnStart.click();
        DynamicPage.lblDone.waitForExist(); /** Default is 500 according to docs, but config _should_ override it to 15sec **/

        expect(DynamicPage.lblDone.isExisting()).to.equal(true);
    });
});
