/*global angular */
(function () {
    'use strict';
    angular.module('TriLakesCorvetteClub', ['ui.router', 'ui.validate', 'ui.calendar', 'ngAnimate', 'angular-loading-bar', 'ngAnimate',
                                            'CorvetteClub.launchpage.package', 'ui.bootstrap', 'CorvetteClub.event.package',
                                            'smoothScroll', 'perfectParallax', 'CorvetteClub.global.package', 'CorvetteClub.members.package',
                                            'CorvetteClub.authorized.package', 'CorvetteClub.homepage.package',
                                            'CorvetteClub.documents.package', 'CorvetteClub.merchandise.package'])
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
                    })
                    .state('app.authorized.members', {
                        url: '/MembersList',
                        views: {
                            MembersList: {
                                templateUrl: 'templates/Members/members-list.html',
                                controller: 'MembersListCtrl as membersList'
                            }
                        }
                    })
                    .state('app.authorized.member', {
                        url: '/Member/:username',
                        views: {
                            Member: {
                                templateUrl: 'templates/Members/member.html',
                                controller: 'MemberCtrl as member'
                            }
                        }
                    })
                    .state('app.authorized.documents', {
                        url: '/Documents',
                        views: {
                            Documents: {
                                templateUrl: 'templates/Documents/documents.html',
                                controller: 'DocumentsListController as documentsList'
                            }
                        }
                    })
                    .state('app.authorized.merchandise', {
                        url: '/Merchandise',
                        views: {
                            Merchandise: {
                                templateUrl: 'templates/Merchandise/merchandise.html',
                                controller: 'MerchandiseCtrl as merchandise'
                            }
                        }
                    })
                    .state('app.authorized.item', {
                        url: '/Merchandise/:id',
                        views: {
                            SingleItem: {
                                templateUrl: 'templates/Merchandise/single-item.html',
                                controller: 'SingleItemCtrl as product'
                            }
                        }
                    })
                    .state('app.authorized.shoppingcart', {
                        url: '/ShoppingCart',
                        views: {
                            ShoppingCart: {
                                templateUrl: 'templates/Merchandise/shopping-cart.html',
                                controller: 'ShoppingCartCtrl as cart'
                            }
                        }
                    });
            }]);
}());
