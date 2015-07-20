/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.events.calendar.controller', [])
        .controller('CalendarCtrl', [function () {
            var calendar, eventSource, events, eventsF;
            eventSource = {};
            events = [];
            var date = new Date();
            var day = date.getDate();
            var month = date.getMonth();
            var year = date.getFullYear();
            eventSource = {
                url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
                className: 'gcal-event',           // an option!
                currentTimezone: 'America/Chicago' // an option!
            };
            /* event source that calls a function on every view switch */
            eventsF = function (start, end, timezone, callback) {
                var s = new Date(start).getTime() / 1000;
                var e = new Date(end).getTime() / 1000;
                var m = new Date(start).getMonth();
                var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
                callback(events);
            };
            calendar = this;
            /* config object */
            calendar.uiConfig = {
                calendarOptions:{
                    height: 650,
                    editable: false,
                    header:{
                        left: 'month basicWeek basicDay agendaWeek agendaDay',
                        center: 'title',
                        right: 'today prev,next'
                    },
                    dayClick: calendar.alertEventOnClick,
                    eventDrop: calendar.alertOnDrop,
                    eventResize: calendar.alertOnResize
                }
            };
            events = [
                {title: 'All Day Event',start: new Date(year, month, 1)},
                {title: 'Long Event',start: new Date(year, month, day - 5),end: new Date(year, month, day - 2)},
                {id: 999,title: 'Repeating Event',start: new Date(year, month, day - 3, 16, 0),allDay: false},
                {id: 999,title: 'Repeating Event',start: new Date(year, month, day + 4, 16, 0),allDay: false},
                {title: 'Birthday Party',start: new Date(year, month, day + 1, 19, 0),end: new Date(year, month, day + 1, 22, 30),allDay: false},
                {title: 'Click for Google',start: new Date(year, month, 28),end: new Date(year, month, 29),url: 'http://google.com/'}
            ];
            calendar.events = [events, eventSource, eventsF];
        }]);
}());
