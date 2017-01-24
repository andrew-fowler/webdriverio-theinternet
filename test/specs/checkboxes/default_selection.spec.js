/**
 * Created by andrewfowler on 1/23/17.
 */
var expect = require('chai').expect;
var CheckboxPage = require('../../pageobjects/checkbox.page');

describe('The checkboxes page', function () {
    it('checkbox 2 should be selected by default', function () {
        CheckboxPage.open();
        expect(CheckboxPage.firstCheckbox.isSelected()).to.be.equal(false);
        expect(CheckboxPage.lastCheckbox.isSelected()).to.be.equal(true);
    });
});