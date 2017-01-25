/** Created by andrewfowler on 1/23/17. */
var page = require('./page');

var forgottenPasswordPage = Object.create(page, {
    email_box:     { get: function () {return browser.element("//input[@id='email']"); } },
    submit_button: { get: function () { return browser.element("//button[@type='submit']"); } },
    content_label: { get: function () { return browser.element("//div[@id='content']"); } },

    open: { value: function() {
        page.open.call(this, 'forgot_password');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = forgottenPasswordPage;