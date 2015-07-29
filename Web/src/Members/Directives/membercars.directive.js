/*global angular */
(function () {
   'use strict';
    angular.module('CorvetteClub.membercar.directive', [])
        .directive('memberCars', ['$templateRequest', '$compile', function ($templateRequest, $compile) {
            return {
                restrict: 'AE',
                scope: {
                    src: "=src",
                    make: "=make",
                    model: "=model",
                    year: "=year"
                },
                link: function (scope, element, attrs) {
                    $templateRequest('templates/Members/member-car-list.tpl.html', [true])
                        .then(function (data) {
                        var compiled = $compile(data);
                        element.append(compiled(scope));
                    });
                }
            };
        }]);
}());
