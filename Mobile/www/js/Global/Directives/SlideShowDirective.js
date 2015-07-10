/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.slideshow.directive', [])
        .directive('slideShow', ['$templateRequest', '$compile',
            function ($templateRequest, $compile) {
                return {
                    restrict: 'AE',
                    link: function (scope, element, attrs) {
                        $templateRequest(attrs.slideshow, [true])
                            .then(function (data) {
                                var compiled = $compile(data);
                                element.append(compiled(scope));
                            });
                    }
                };
        }]);
}());
