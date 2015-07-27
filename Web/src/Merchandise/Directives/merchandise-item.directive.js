/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.merchandiseitem.directive', [])
        .directive('merchandiseItem', ['$compile', '$templateRequest', function ($compile, $templateRequest) {
            return {
                restrict: 'AE',
                scope: {
                    item: '=item'
                },
                controller: 'MerchandiseCtrl as merchandise',
                link: function (scope, element, attrs) {
                    $templateRequest('templates/Merchandise/merchandise-item.tpl.html', [true])
                        .then(function (data) {
                        var compiled = $compile(data);
                        element.append(compiled(scope));
                    });
                }
            };
        }]);
}());
