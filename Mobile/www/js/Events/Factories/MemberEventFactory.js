/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.memberevent.factory', [])
        .factory('MemberEvent', [function () {
            var i, testEvents;
            testEvents = [];
            for (i = 0; i < 5; i++) {
                testEvents.push({
                        Id: i,
                        Title: 'Test Event ' + i,
                        Date: '0' + i + '/01/2016',
                        City: 'Test City',
                        State: 'Test State',
                        Address: '101 Test Blvd',
                        Zip: '11111',
                        Description: 'A brief description of the event will go here'
                    });
            }
            return {
                getFutureForMember: function (id) {
                    id = null;
                    return testEvents;
                }
            };
        }]);
}());
