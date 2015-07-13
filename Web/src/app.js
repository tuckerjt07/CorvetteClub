/*global angular */
(function () {
    'use strict';
    angular.module('TriLakesCorvetteClub', ['ui.router', 'ui.utils', 'ngAnimate', 'CorvetteClub.launchpage.package', 'ui.bootstrap',
                                            'smoothScroll', 'perfectParallax', 'CorvetteClub.global.package'])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/CorvetteClub/Home');
                $stateProvider
                    .state('app', {
                        url: '/CorvetteClub',
                        abstract: true,
                        templateUrl: 'templates/Root/home.html'
                    })
                    .state('app.home', {
                        url: '/Home',
                        views: {
                            mainContent: {
                                templateUrl: 'templates/LaunchPage/launch-page.html',
                                controller: 'LaunchPageCtrl as launchPage'
                            }
                        }
                    });
        }]);
}());
