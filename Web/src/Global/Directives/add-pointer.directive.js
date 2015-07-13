/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.addpointer.directive', [])
        .directive('addPointer', [function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    element.bind('mouseenter', function () {
                        element.css('cursor', 'pointer');
                    });
                }
            };
        }]);
}());
