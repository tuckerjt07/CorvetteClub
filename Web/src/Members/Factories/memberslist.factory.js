/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.members.list.factory', [])
        .factory('MembersList', [function () {
            var i, testData;
            testData = [];
            for (i = 1; i < 130; i++) {
                testData.push({
                    id: i,
                    username: 'Username' + i,
                    firstName: 'FirstName' + i,
                    lastName: 'lastName' + i,
                    avatar: 'http://loremflickr.com/60/60/corvette?random=' + i
                });
            }
            return {
                getAll: function () {
                    return testData;
                }
            };
        }]);
}());
