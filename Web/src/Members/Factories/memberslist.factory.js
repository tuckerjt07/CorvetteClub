/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.members.list.factory', [])
        .factory('MembersList', [function () {
            var i, testData, populateImages, addCars;
            testData = [];
            for (i = 1; i < 130; i++) {
                testData.push({
                    id: i,
                    username: 'Username' + i,
                    firstName: 'FirstName' + i,
                    lastName: 'LastName' + i,
                    avatar: 'http://loremflickr.com/300/300/corvette?random=' + i,
                    location: 'Location ' + i,
                    birthday: '01/01/2000',
                    lastActive: '06/13/2015',
                    images: [],
                    cars: []
                });
            }
            populateImages = function () {
                var j, index;
                j = 0;
                for (index in testData) {
                    if (testData.hasOwnProperty(index)) {
                        for (j = 0; j < 15; j++) {
                            testData[index].images.push({
                                image: 'http://loremflickr.com/300/300/corvette?random=' + j,
                                description: 'Test Image ' + j
                            });
                        }
                    }
                }
            };
            addCars = function () {
                var k, index;
                k = 0;
                for (index in testData) {
                    if (testData.hasOwnProperty(index)) {
                        for (k = 0; k < 3; k++) {
                            testData[index].cars.push({
                                image: 'http://loremflickr.com/300/300/corvette?random=' + k,
                                make: 'Chevrolet',
                                model: 'Corvette',
                                year:  2014 + k
                            });
                        }
                    }
                }
            };
            populateImages();
            addCars();
            return {
                getAll: function () {
                    return testData;
                },
                getMember: function (username) {
                    return testData[testData.map(function (x) { return x.username; }).indexOf(username)];
                }
            };
        }]);
}());
