/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.eventattendee.controller', [])
        .controller('EventAttendeeCtrl', ['Event', function (Event) {
            var _this;
            _this = this;
            _this.Members = Event.getAttendees(0);
        }]);
}());
