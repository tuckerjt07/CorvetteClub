/*global angular */
(function () {
    'use strict';
    angular.module('TriLakesCorvetteClub', ['ui.router', 'ui.validate', 'ui.calendar', 'ngAnimate', 'angular-loading-bar', 'ngAnimate',
                                            'CorvetteClub.launchpage.package', 'ui.bootstrap', 'CorvetteClub.event.package',
                                            'smoothScroll', 'perfectParallax', 'CorvetteClub.global.package',
                                            'CorvetteClub.authorized.package', 'CorvetteClub.homepage.package'])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/CorvetteClub/Login');
                $stateProvider
                    .state('app', {
                        url: '/CorvetteClub',
                        abstract: true,
                        templateUrl: 'templates/Root/home.html'
                    })
                    .state('app.launch', {
                        url: '/Login',
                        views: {
                            mainContent: {
                                templateUrl: 'templates/LaunchPage/launch-page.html',
                                controller: 'LaunchPageCtrl as launchPage'
                            }
                        }
                    })
                    .state('app.authorized', {
                        url: '/Members',
                        abstract: true,
                        views: {
                            mainContent: {
                                templateUrl: 'templates/Authorized/content.html'
                            }
                        }
                    })
                    .state('app.authorized.home', {
                        url: '/Home',
                        views: {
                            HomePage: {
                                templateUrl: 'templates/HomePage/homepage.html'
                            }
                        }
                    })
                    .state('app.authorized.events', {
                        url: '/Events',
                        views: {
                            Calendar: {
                                templateUrl: 'templates/Events/events-calendar.tpl.html',
                                controller: 'CalendarCtrl as calendar'
                            }
                        }
                    });
        }]);
}());
