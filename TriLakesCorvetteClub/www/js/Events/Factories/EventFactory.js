/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.event.factory', [])
        .factory('Event', [function () {
            var i, testEvents, testEvent, testAttendees, testImgUrl;
            testEvents = [];
            for (i = 0; i < 20; i++) {
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
            testEvent = testEvents[1];
            testEvent.NumberGoing = 5;
            testEvent.Images = [];
            testAttendees = [];
            testImgUrl = 'http://loremflickr.com/320/240/corvette';
            for (i = 0; i < 25; i++) {
                testAttendees.push({
                    Id: i,
                    Username: 'User' + i,
                    FirstName: 'FirstName' + i,
                    LastName: 'LastName' + i,
                    Img: testImgUrl + '?random=' + i
                });
            }
            return {
                getFuture: function () {
                    return testEvents;
                },
                getPast: function () {
                    return testEvents;
                },
                getAll: function () {
                    return testEvents;
                },
                getEvent: function (id) {
                    id = null;
                    return testEvent;
                },
                getAttendees: function (id) {
                    id = null;
                    return testAttendees;
                }
            };
        }]);
}());
