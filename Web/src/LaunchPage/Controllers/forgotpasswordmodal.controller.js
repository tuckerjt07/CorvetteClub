/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.forgotpassword.modal.controller', [])
        .controller('ForgotPasswordModalCtrl', ['$scope', '$modalInstance', 'ForgotPasswordErrorCondition',
                                                function ($scope, $modalInstance, ForgotPasswordErrorCondition) {
                var forgotPasswordModal;
                forgotPasswordModal = this;
                forgotPasswordModal.form = {};
                forgotPasswordModal.EmailAddressMaster = ForgotPasswordErrorCondition.EmailAddressMaster;
                forgotPasswordModal.EmailAddressInvalid = ForgotPasswordErrorCondition.EmailAddressInvalid;
                forgotPasswordModal.EmailAddressRequired = ForgotPasswordErrorCondition.EmailAddressRequired;
                forgotPasswordModal.ok = function (form) {
                    if (Object.keys(form.$error).length <= 0) {
                        $modalInstance.close(forgotPasswordModal.EmailAddress);
                        $scope.$broadcast('CloseModal');
                    }
                };
                forgotPasswordModal.cancel = function () {
                    $modalInstance.dismiss();
                };
                //On page load
                $scope.$watch('$viewContentLoaded', function () {
                    //Set all focused inputs to true so that errors do not show on load
                    var key;
                    for (key in forgotPasswordModal.forms) {
                        if (forgotPasswordModal.forms.hasOwnProperty(key)) {
                            if (forgotPasswordModal.forms[key] !== undefined && key.indexOf('$') < 0) {
                                forgotPasswordModal.forms[key].focus = false;
                            }
                        }
                    }
                });
        }]);
}());
