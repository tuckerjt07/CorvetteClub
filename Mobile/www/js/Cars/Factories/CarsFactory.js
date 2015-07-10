/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.cars.factory', [])
        .factory('Cars', [function () {
            var i, testCars, testImgUrl, baseYear;
            testCars = [];
            testImgUrl = 'http://loremflickr.com/250/220/corvette?random=';
            baseYear = 1959;
            for (i = 0; i < 4; i++) {
                testCars.push({
                    Id: i,
                    Make: 'Chevrolet',
                    Model: 'Corvette',
                    Year: baseYear + i,
                    Img: testImgUrl + i
                });
                baseYear = baseYear + i;
            }
            return {
                get: function (id) {
                    id = null;
                    return testCars;
                }
            };
        }]);
}());
