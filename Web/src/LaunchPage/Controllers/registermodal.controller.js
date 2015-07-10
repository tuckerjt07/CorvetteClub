/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.register.modal.controller', [])
        .controller('RegisterModalCtrl', ['$scope', '$modalInstance', 'ErrorCondition',
                                          function ($scope, $modalInstance, ErrorCondition) {
                //Instantiate global variables
                var registerModal;
                //Assign this to registerModal
                registerModal = this;
                //Assign error messages to objects
                registerModal.UsernameMaster = ErrorCondition.UsernameMaster;
                registerModal.UsernameInvalidChar = ErrorCondition.UsernameInvalidChar;
                registerModal.UsernameInvalidLength = ErrorCondition.UsernameInvalidLength;
                registerModal.UsernameNonUnique = ErrorCondition.UsernameNonUnique;
                registerModal.UsernameRequired = ErrorCondition.UsernameIsRequired;
                registerModal.PasswordMaster = ErrorCondition.PasswordMaster;
                registerModal.PasswordInvalidLength = ErrorCondition.PasswordInvalidLength;
                registerModal.PasswordNonMatching = ErrorCondition.PasswordNonMatching;
                registerModal.PasswordRequired = ErrorCondition.PasswordRequired;
                registerModal.ConfirmPasswordRequired = ErrorCondition.ConfirmPasswordRequired;
                registerModal.FirstNameMaster = ErrorCondition.FirstNameMaster;
                registerModal.FirstNameInvalidChar = ErrorCondition.FirstNameInvalidChar;
                registerModal.FirstNameRequired = ErrorCondition.FirstNameRequired;
                registerModal.LastNameMaster = ErrorCondition.LastNameMaster;
                registerModal.LastNameInvalidChar = ErrorCondition.LastNameInvalidChar;
                registerModal.LastNameRequired = ErrorCondition.LastNameRequired;
                registerModal.EmailAddressMaster = ErrorCondition.EmailAddressMaster;
                registerModal.EmailAddressInvalid = ErrorCondition.EmailAddressInvalid;
                registerModal.EmailAddressNonUnique = ErrorCondition.EmailAddressNonUnique;
                registerModal.EmailAddressRequired = ErrorCondition.EmailAddressRequired;
                //On submit
                registerModal.ok = function () {
                    $modalInstance.close();
                };
                //On cancel
                registerModal.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
                //Validate username for special characters
                registerModal.validateUsername = function (value) {
                    var ck_username;
                    ck_username = /^[A-Za-z0-9_]*$/;
                    if (!ck_username.test(value)) {
                        registerModal.forms.Username.$setViewValue(value.substr(0, value.length - 1));
                        registerModal.forms.Username.$rollbackViewValue();
                        return false;
                    } else {
                        return true;
                    }
                };
                //Validate string for length
                registerModal.validateLength = function (value, fieldName, length) {
                    var lowerbound, upperbound;
                    if (length !== undefined && value !== undefined) {
                        lowerbound = length[0];
                        upperbound = length[1];
                        if (value.length < lowerbound || value.length > upperbound) {
                            if (value.length > upperbound) {
                                registerModal.forms[fieldName].$setViewValue(value.substr(0, value.length - 1));
                                registerModal.forms[fieldName].$rollbackViewValue();
                            }
                            return false;
                        } else {
                            return true;
                        }
                    }
                };
                //Validate username for uniqueness
                registerModal.validateUnique = function (value) {
                    var deleteMe = value;
                    value = deleteMe;
                    //Make service call to validate uniqueness
                };
                //Validate the passwords match
                registerModal.comparePasswords = function (value) {
                    if (value !== undefined) {
                        return value === registerModal.Password.substr(0, value.length);
                    }
                    return true;
                };
                //Validate the input validity of names
                registerModal.validateName = function (value, field) {
                    var username;
                    username = /^[A-Za-z]*$/;
                    if (!username.test(value)) {
                        registerModal.forms[field].$setViewValue(value.substr(0, value.length - 1));
                        registerModal.forms[field].$rollbackViewValue();
                        return false;
                    } else {
                        return true;
                    }
                };
                //Set the field is focused
                registerModal.setFocus = function (field) {
                    registerModal.forms[field].focus = true;
                };
                //Set the field is not focused
                registerModal.setBlur = function (field) {
                    registerModal.forms[field].focus = false;
                };
                //On page load
                $scope.$watch('$viewContentLoaded', function () {
                    //Set all focused inputs to true so that errors do not show on load
                    var key;
                    for (key in registerModal.forms) {
                        if (registerModal.forms.hasOwnProperty(key)) {
                            if (registerModal.forms[key] !== undefined && key.indexOf('$') < 0) {
                                registerModal.forms[key].focus = true;
                            }
                        }
                    }
                    registerModal.Password = '';
                });
        }]);
}());
