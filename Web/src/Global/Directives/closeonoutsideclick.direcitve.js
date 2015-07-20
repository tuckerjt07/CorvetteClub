/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.closeonclick.directive', [])
        .directive('closeOnOutsideClick', ['$parse',
            function ($parse) {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        scope.$watch(attrs.closeOnOutsideClick, function () {
                            if ($parse(!attrs.closeOnOutsideClick)) {
                                element.bind('click', function (e) {
                                    e.stopPropagation();
                                });
                                angular.element(document.querySelector('body')).bind('click', function () {
                                    scope.$apply(function () {
                                        attrs.closeOnOutsideClick = true;
                                    });
                                });
                            }
                        });
                    }
                };
        }]);
}());
