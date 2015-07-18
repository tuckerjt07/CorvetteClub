/*global angular, document */
(function () {
    'use strict';
    angular.module('CorvetteClub.aboutscroll.directive', [])
        .directive('aboutScroll', ['smoothScroll', function (smoothScroll) {
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
                        smoothScroll(document.getElementById('about'), options);
                    });
                }
            };
        }]);
}());
