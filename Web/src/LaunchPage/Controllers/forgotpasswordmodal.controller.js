/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.forgotpassword.modal.controller', [])
        .controller('ForgotPasswordModalCtrl', ['$modalInstance', 'ErrorCondition', function ($modalInstance, ErrorCondition) {
            var forgotPasswordModal;
            forgotPasswordModal = this;
            forgotPasswordModal.EmailAddressMaster = ErrorCondition.EmailAddressMaster;
            forgotPasswordModal.EmailAddressInvalid = ErrorCondition.EmailAddressInvalid;
            forgotPasswordModal.EmailAddressRequired = ErrorCondition.EmailAddressRequired;
            forgotPasswordModal.sendReminderEmail = function () {
                $modalInstance.close(forgotPasswordModal.EmailAddress);
            };
            forgotPasswordModal.cancel = function () {
                $modalInstance.dismiss();
            };
            //Set the field is focused
            forgotPasswordModal.setFocus = function (field) {
                forgotPasswordModal.forms[field].focus = true;
            };
            //Set the field is not focused
            forgotPasswordModal.setBlur = function (field) {
                forgotPasswordModal.forms[field].focus = false;
            };
        }]);
}());
