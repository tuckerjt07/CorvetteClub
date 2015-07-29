/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.thumbnails.directive', [])
        .directive('thumbnails', ['$templateRequest', '$compile',function ($templateRequest, $compile) {
            return {
                restrict: 'AE',
                scope: {
                    click: '=click',
                    src: '=src',
                    description: '=description'
                },
                link: function (scope, element, attrs) {
                    $templateRequest('templates/Global/thumbnails.tpl.html', [true])
                        .then(function (data) {
                        var compiled = $compile(data);
                        element.append(compiled(scope));
                    });
                }
            };
        }]);
}());
