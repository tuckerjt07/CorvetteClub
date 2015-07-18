/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.hidescroll.directive', [])
        .directive('hideScroll', ['$window','$document',
                                  function ($window, $document) {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        angular.element($window).bind('scroll', function () {
                            if (parseInt(($window.scrollY - element[0].offsetTop), 10) < parseInt(-600, 10)) {
                                element.css('visbility', 'hidden');
                            } else {
                                //alert(parseInt($window.scrollY - element[0].offsetTop, 10));
                                angular.element(document.getElementById('dLoginContainer')).css('visibility', 'visible');
                                return true;
                            }
                                angular.element(document.getElementById('dLoginContainer')).css('visibility', 'hidden');
                        });
                    }
                };
    }]);
}());
