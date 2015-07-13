/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.register.modal.controller', [])
        .controller('RegisterModalCtrl', ['$scope', '$modalInstance', 'RegisterErrorCondition',
                                          function ($scope, $modalInstance, RegisterErrorCondition) {
                //Instantiate global variables
                var registerModal;
                //Assign this to registerModal
                registerModal = this;
                //Assign error messages to objects
                registerModal.UsernameMaster = RegisterErrorCondition.UsernameMaster;
                registerModal.UsernameInvalidChar = RegisterErrorCondition.UsernameInvalidChar;
                registerModal.UsernameInvalidLength = RegisterErrorCondition.UsernameInvalidLength;
                registerModal.UsernameNonUnique = RegisterErrorCondition.UsernameNonUnique;
                registerModal.UsernameRequired = RegisterErrorCondition.UsernameIsRequired;
                registerModal.PasswordMaster = RegisterErrorCondition.PasswordMaster;
                registerModal.PasswordInvalidLength = RegisterErrorCondition.PasswordInvalidLength;
                registerModal.PasswordNonMatching = RegisterErrorCondition.PasswordNonMatching;
                registerModal.PasswordRequired = RegisterErrorCondition.PasswordRequired;
                registerModal.ConfirmPasswordRequired = RegisterErrorCondition.ConfirmPasswordRequired;
                registerModal.FirstNameMaster = RegisterErrorCondition.FirstNameMaster;
                registerModal.FirstNameInvalidChar = RegisterErrorCondition.FirstNameInvalidChar;
                registerModal.FirstNameRequired = RegisterErrorCondition.FirstNameRequired;
                registerModal.LastNameMaster = RegisterErrorCondition.LastNameMaster;
                registerModal.LastNameInvalidChar = RegisterErrorCondition.LastNameInvalidChar;
                registerModal.LastNameRequired = RegisterErrorCondition.LastNameRequired;
                registerModal.EmailAddressMaster = RegisterErrorCondition.EmailAddressMaster;
                registerModal.EmailAddressInvalid = RegisterErrorCondition.EmailAddressInvalid;
                registerModal.EmailAddressNonUnique = RegisterErrorCondition.EmailAddressNonUnique;
                registerModal.EmailAddressRequired = RegisterErrorCondition.EmailAddressRequired;
                registerModal.UsernameCharsEntered = 0;
                registerModal.UsernameCharsMin = 3;
                registerModal.UsernameCharsMax = 20;
                registerModal.PasswordCharsMin = 7;
                registerModal.PasswordCharsEntered = 0;
                //On submit
                registerModal.ok = function (form) {
                    if (Object.keys(form.$error).length <= 0) {
                        $modalInstance.close();
                        $scope.$broadcast('CloseModal');
                    }
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
                        registerModal.UsernameCharsEntered = value === undefined ? 0 : value.length;
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
                //Update the length of the current password for counter display
                registerModal.UpdatePasswordLength = function () {
                    registerModal.PasswordCharsEntered = registerModal.Password.length;
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
                //On page load
                $scope.$watch('$viewContentLoaded', function () {
                    //Set all focused inputs to true so that errors do not show on load
                    var key;
                    for (key in registerModal.forms) {
                        if (registerModal.forms.hasOwnProperty(key)) {
                            if (registerModal.forms[key] !== undefined && key.indexOf('$') < 0) {
                                registerModal.forms[key].focus = false;
                            }
                        }
                    }
                    registerModal.Password = '';
                });
        }]);
}());
