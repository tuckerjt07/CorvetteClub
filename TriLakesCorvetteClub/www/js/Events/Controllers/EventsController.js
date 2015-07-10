/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.events.controller', [])
        .controller('EventsCtrl', ['Event', function (Event) {
            var _this;
            _this = this;
            _this.Events = Event.getFuture();
        }]);
}());
