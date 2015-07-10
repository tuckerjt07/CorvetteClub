/*global angular */
(function () {
    'use strict';
    angular.module('Cookbook.global.newsticker.directive', [])
    .directive('newsTicker', function () {
        var elementArray;
        elementArray = [];
        return {
            restrict: 'A',
            link: function (scope, element) {
                elementArray.push(element);
            }
        };
    });
})();
