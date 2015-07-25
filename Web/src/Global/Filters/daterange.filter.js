/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.daterange.filter', [])
        .filter('daterange', [function () {
            return function (list, datePropertyName, start_date, end_date) {
                var result, item;
                result = [];
                // date filters
                start_date = (start_date && !isNaN(Date.parse(start_date))) ? Date.parse(start_date) : new Date('Jan 1 1900');
                end_date = (end_date && !isNaN(Date.parse(end_date))) ? Date.parse(end_date) : new Date('Dec 31 3000');
                for (item in list) {
                    if (list.hasOwnProperty(item)) {
                        if (list[item][datePropertyName] >= start_date && list[item][datePropertyName] <= end_date) {
                            result.push(list[item]);
                        }
                    }
                }
                return result;
            };
        }]);
}());
