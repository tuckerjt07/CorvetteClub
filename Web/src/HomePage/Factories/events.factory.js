/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.homepage.event.factory', [])
        .factory('HomePageEvents', [function () {
            var i, testData;
            testData = [];
            for (i = 1; i < 5; i++) {
                testData.push({
                    id: i,
                    name: 'Event ' + i,
                    location: 'TBD',
                    date: '01/0' + i + '/2016',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    type: i
                });
            }
            return {
                getHomepageEvents: function () {
                    return testData;
                }
            };
        }]);
}());
