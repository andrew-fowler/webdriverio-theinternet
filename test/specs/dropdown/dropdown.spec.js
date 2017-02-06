/**
 * Created by andrewfowler on 1/23/17.
 */
var expect = require('chai').expect;
var DropdownPage = require('../../pageobjects/dropdown.page');

describe('The dropdown form', function () {
    it('should perform selections correctly', function () {
        DropdownPage.open();
        DropdownPage.dropdown.selectByValue('1');

        /** NOTE: This is failing on Firefox
         * https://github.com/tourdedave/the-internet/issues/28
         */
        expect(DropdownPage.dropdown.getValue()).to.equal('1');
    });
});