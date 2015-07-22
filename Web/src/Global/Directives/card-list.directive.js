/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.listcard.directive', [])
        .directive('listCard', ['$templateRequest', '$compile', function ($templateRequest, $compile) {
            return {
                restrict: 'AE',
                scope: {
                    image: "=image",
                    title: "=title",
                    subtitle: "=subtitle"
                },
                link: function (scope, element, attrs) {
                    $templateRequest('templates/Global/list-card.tpl.html', [true])
                        .then(function (data) {
                            var compiled = $compile(data);
                            element.append(compiled(scope));
                        });
                }
            };
        }]);
}());
