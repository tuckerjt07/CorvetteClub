/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.range.filter', [])
        .filter('range', [function () {
            return function (input, min, max) {
                var i;
                for (i = parseInt(min, 10); i < parseInt(max, 10) + 1; i++) {
                    input.push(i);
                }
                return input;
            };
        }]);
}());
