/** Created by andrewfowler on 1/23/17. */
var expect = require('chai').expect;
var ForgottenPasswordPage = require('../../pageobjects/forgotten_password.page');

describe('The forgotten password form', function () {
    it('should send reminder for valid email', function () {

        ForgottenPasswordPage.open();
        ForgottenPasswordPage.email_box.setValue("a@b.com");
        ForgottenPasswordPage.submit_button.click();

        var response_text = ForgottenPasswordPage.content_label.getText();

        expect(response_text).to.contain("Your e-mail's been sent!");
    });
});