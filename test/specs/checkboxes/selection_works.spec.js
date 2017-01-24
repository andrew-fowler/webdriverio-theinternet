/**
 * Created by andrewfowler on 1/23/17.
 */
var expect = require('chai').expect;
var CheckboxPage = require('../../pageobjects/checkbox.page');

describe('The checkboxes page', function () {
    it('checkbox 1 should be selected after clicking on it', function () {
        CheckboxPage.open();
        expect(CheckboxPage.firstCheckbox.isSelected()).to.be.equal(false);
        CheckboxPage.firstCheckbox.click();
        expect(CheckboxPage.firstCheckbox.isSelected()).to.be.equal(true);
    });
});