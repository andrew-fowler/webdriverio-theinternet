/**
 * Created by billagee on 2/5/17.
 */
var expect = require('chai').expect;
var DynamicControlsPage = require('../../pageobjects/dynamic_controls.page');

describe('The dynamic controls page', function () {
    it('should remove a checkbox after the Remove button is pressed', function () {
        DynamicControlsPage.open();
        // The checkbox should exist on page load
        expect(DynamicControlsPage.checkboxFoo.isExisting()).to.equal(true);
        DynamicControlsPage.btnRemove.click();
        // Check that the checkbox is removed within 10 seconds, the
        // Add button appears, and the "It's gone!" message appeared
        DynamicControlsPage.checkboxFoo.waitForExist(10000, reverse=true);
        DynamicControlsPage.btnAdd.waitForExist();
        DynamicControlsPage.pItsGone.waitForExist();
    });
});
