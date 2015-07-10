/*global angular, document */
(function () {
    'use strict';
    angular.module('CorvetteClub.loginscroll.directive', [])
        .directive('loginScroll', ['smoothScroll', function (smoothScroll) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', function () {
                    var options, attr;
                    attr = attrs;
                    options = {
                        duration: 1200,
                        easing: 'easeInQuad'
                    };
                    smoothScroll(document.getElementById('login'), options);
                });
            }
        };
    }]);
}());
