/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.slideshow.directive', [])
        .directive('slideshow', ['$compile', 'Template', function ($compile, Template) {
            var callback, myScope, myElement;
            callback = function (data) {
                var compiled = $compile(data);
                myElement.append(compiled(myScope));
            };
            return {
                restrict: 'AE',
                replace: true,
                link: function (scope, element, attrs) {
                    myScope = scope;
                    myElement = element;
                    Template.get('templates/Global/slideshow.tpl.html', callback);
                }
            };
        }]);
}());
