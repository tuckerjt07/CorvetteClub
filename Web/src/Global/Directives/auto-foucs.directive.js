/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.autofocus.directive', [])
        .directive('autoFocus', [function () {
            return  {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attrs, ngModelCtrl) {
                    element.bind('focus', function () {
                        ngModelCtrl.focus = true;
                    });
                    element.bind('blur', function () {
                        ngModelCtrl.focus = false;
                    });
                }
            };
        }]);
}());
