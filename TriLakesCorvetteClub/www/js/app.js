/*global angular, window, cordova, StatusBar */
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers','CorvetteClub.home.package', 'CorvetteClub.global.package',
                           'CorvetteClub.members.package', 'CorvetteClub.cars.package', 'CorvetteClub.events.package'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.home', {
        url: '/home',
        abstract: true,
        views: {
            'menuContent': {
                templateUrl: "templates/Home/homepage.html"
            }
        }
    })

    .state('app.home.slideshow', {
        url: '/slideshow',
        abstract: false,
        views: {
            'Slideshow': {
                templateUrl: "templates/Widgets/slideshow.html",
                controller: 'HomeSlideShowCtrl as slideshow'
            },
            'NewsTicker': {
                templateUrl: "templates/Widgets/news-ticker.html",
                controller: 'HomeNewsTickerCtrl as homeNewsTicker'
            }
        }
    })

//    .state('app.members', {
//        url: '/members',
//        abstract: true,
//        views: {
//            'menuContent': {
//                templateUrl: "templates/BrowseMembers/members.html"
//            }
//        }
//    })

    .state('app.members', {
        url: '/browse',
        views: {
            'menuContent' : {
                templateUrl: "templates/BrowseMembers/list-members.html",
                controller: "BrowseMembersCtrl as browseMembers"
            }
        }
    })

    .state('app.single', {
        url: '/browse/:memberId/:username/:firstName/:lastName',
        params: {
            memberId: null,
            username: null,
            firstName: null,
            lastName: null
        },
        views: {
            'menuContent': {
                templateUrl: "templates/BrowseMembers/single-member.html",
                controller: "SingleMemberCtrl as singleMember",
            }
        }
    })

    .state('app.events', {
        url: '/events',
        views: {
            'menuContent': {
                templateUrl: 'templates/Events/events.html',
                controller: "EventsCtrl as events"
            }
        }
    })

    .state('app.event', {
        url: '/events/:eventId/:eventTitle',
        params: {
            eventId: null,
            eventTitle: null
        },
        views: {
            'menuContent': {
                templateUrl: 'templates/Events/event.html',
                controller: 'EventCtrl as event'
            }
        }
    })

    .state('app.search', {
        url: "/search",
        views: {
            'menuContent': {
                templateUrl: "templates/search.html"
            }
        }
    })

    .state('app.browse', {
        url: "/browse",
        views: {
            'menuContent': {
                templateUrl: "templates/browse.html"
            }
        }
    })

    .state('app.playlists', {
        url: "/playlists",
        views: {
            'menuContent': {
                templateUrl: "templates/playlists.html",
                controller: 'PlaylistsCtrl'
            }
        }
    })

    .state('app.singlexxx', {
        url: "/playlists/:playlistId",
        views: {
            'menuContent': {
                templateUrl: "templates/playlist.html",
                controller: 'PlaylistCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home/slideshow');
});
