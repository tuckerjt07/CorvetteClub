/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.events.controller', [])
        .controller('HomepageEventsCtrl', ['HomePageEvents', function (HomePageEvents) {
            var homepageEvents;
            homepageEvents = this;
            homepageEvents.loadEvents = function () {
                homepageEvents.events = HomePageEvents.getHomepageEvents();
            };
        }]);
}());
