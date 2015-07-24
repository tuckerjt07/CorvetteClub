/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.documenttype.filter', [])
        .filter('documenttype', [function () {
            return function (list, type, typePropertyName) {
                var result, item;
                result = [];
                for (item in list) {
                    if (list.hasOwnProperty(item) && type !== undefined && type !== null) {
                        if (list[item][typePropertyName].indexOf(type.text) > -1 && type !== undefined) {
                            result.push(list[item]);
                        }
                    }
                    else {
                        return list;
                    }
                }
                return result;
            };
        }]);
}());
