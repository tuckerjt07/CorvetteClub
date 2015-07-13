/*global angular */
(function () {
    'use strict';
    var invalidEmailAddress, emailAddressRequired, formSubmittedInvalid, setFocus, setDirty, setSubmitted, setTouched;
    invalidEmailAddress = 'forgotPasswordModal.forms.EmailAddress.$error.email';
    emailAddressRequired = 'forgotPasswordModal.forms.EmailAddress.$error.required';
    formSubmittedInvalid = '(forgotPasswordModal.forms.$submitted && forgotPasswordModal.forms.$invalid)';
    setFocus = function (field) {
        return '!forgotPasswordModal.forms["' + field + '"].focus';
    };
    setDirty = function (field) {
        return 'forgotPasswordModal.forms["' + field + '"].$dirty';
    };
    setSubmitted = function () {
        return 'forgotPasswordModal.forms.$submitted';
    };
    setTouched = function (field) {
        return 'forgotPasswordModal.forms["' + field + '"].$touched';
    };
    angular.module('CorvetteClub.forgotpassword.errorcondition.model', [])
        .value('ForgotPasswordErrorCondition', {
            EmailAddressInvalid: invalidEmailAddress + ' && ' + setDirty('EmailAddress'),
            EmailAddressRequired: '(' + emailAddressRequired + ' && ' + setFocus('EmailAddress') + ') && (' + setSubmitted() + ' || ' + setTouched('EmailAddress') + ')',
            EmailAddressMaster: '(' + invalidEmailAddress + ' && ' + setDirty('EmailAddress') + ') || (' + emailAddressRequired + ' && ' + setFocus('EmailAddress') + ') && (' + setSubmitted() + ' || ' + setTouched('EmailAddress') + ')'
        });
}());
