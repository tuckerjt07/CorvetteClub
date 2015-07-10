/*global angular */
(function () {
    'use strict';
    var usernameInvalidChar, usernameInvalidLength, usernameNonUnique, usernameRequired, passwordInvalidLength, passwordNonMatching, passwordRequired, confirmPasswordRequired, firstNameInvalidChar, firstNameRequired, lastNameInvalidChar, lastNameRequired, invalidEmailAddress, emailAddressNonUnique, emailAddressRequired, setFocus, setDirty;
    usernameInvalidChar = 'registerModal.forms.Username.$error.invalidChar';
    usernameInvalidLength = 'registerModal.forms.Username.$error.invalidLength';
    usernameNonUnique = 'registerModal.forms.Username.$error.nonunique';
    usernameRequired = 'registerModal.forms.Username.$error.required';
    passwordInvalidLength = 'registerModal.forms.Password.$error.invalidLength';
    passwordRequired = 'registerModal.forms.Password.$error.required';
    passwordNonMatching = 'registerModal.forms.ConfirmPassword.$error.nonmatching';
    confirmPasswordRequired = 'registerModal.forms.ConfirmPassword.$error.required';
    firstNameInvalidChar = 'registerModal.forms.FirstName.$error.invalidChar';
    firstNameRequired = 'registerModal.forms.FirstName.$error.required';
    lastNameInvalidChar = 'registerModal.forms.LastName.$error.invalidChar';
    lastNameRequired = 'registerModal.forms.LastName.$error.required';
    invalidEmailAddress = 'registerModal.forms.EmailAddress.$error.email';
    emailAddressNonUnique = 'registerModal.forms.EmailAddress.$error.nonunique';
    emailAddressRequired = 'registerModal.forms.EmailAddress.$error.required';
    setFocus = function (field) {
        return '!registerModal.forms["' + field + '"].focus';
    };
    setDirty = function (field) {
        return 'registerModal.forms["' + field + '"].$dirty';
    };
    angular.module('CorvetteClub.errorcondition.model', [])
        .value('ErrorCondition', {
            UsernameMaster: '((' + usernameInvalidChar + ' || ' + usernameInvalidLength + ') && ' + setDirty('Username') + ') || ' + usernameNonUnique + ' || (' + usernameRequired + ' && ' + setFocus('Username') + ')',
            UsernameInvalidChar: usernameInvalidChar + ' && ' + setDirty('Username'),
            UsernameInvalidLength: usernameInvalidLength + ' && ' + setDirty('Username'),
            UsernameNonUnique: usernameNonUnique,
            UsernameIsRequired: usernameRequired + ' && ' + setFocus('Username'),
            PasswordMaster: '(' + passwordInvalidLength + ' && ' + setDirty('Password') + ') || ' + passwordNonMatching + ' || (' +
                passwordRequired + ' && ' + setFocus('Password') + ') || (' + confirmPasswordRequired + ' && ' + setFocus('ConfirmPassword') + ')',
            PasswordInvalidLength: passwordInvalidLength + ' && ' + setDirty('Password'),
            PasswordNonMatching: passwordNonMatching,
            PasswordRequired: passwordRequired + ' && ' + setFocus('Password'),
            ConfirmPasswordRequired: confirmPasswordRequired + ' && ' + setFocus('ConfirmPassword'),
            FirstNameMaster: '(' + firstNameInvalidChar + ' && ' + setDirty('FirstName') + ') || (' + firstNameRequired + ' && ' + setFocus('FirstName') + ' )',
            FirstNameInvalidChar: firstNameInvalidChar + ' && ' + setDirty('FirstName'),
            FirstNameRequired: firstNameRequired + ' && ' + setFocus('FirstName'),
            LastNameMaster: '(' + lastNameInvalidChar + ' && ' + setFocus('LastName') + ') || (' + lastNameRequired + ' && ' + setFocus('LastName') + ' )',
            LastNameInvalidChar: lastNameInvalidChar + ' && ' + setDirty('LastName'),
            LastNameRequired: lastNameRequired + ' && ' + setFocus('LastName'),
            EmailAddressMaster: '((' + invalidEmailAddress + ' || ' + emailAddressNonUnique + ') && ' + setDirty('EmailAddress') + ') || (' + emailAddressRequired + ' && ' + setFocus('EmailAddress') + ' )',
            EmailAddressInvalid: invalidEmailAddress + ' && ' + setDirty('EmailAddress'),
            EmailAddressNonUnique: emailAddressNonUnique + ' && ' + setDirty('EmailAddress'),
            EmailAddressRequired: emailAddressRequired + ' && ' + setFocus('EmailAddress')
        });
}());
