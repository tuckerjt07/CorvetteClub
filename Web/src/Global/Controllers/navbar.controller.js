/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.navbar.controller', [])
        .controller('NavbarCtrl', ['$rootScope', 'UserShoppingCart', function ($rootScope, UserShoppingCart) {
            var self;
            self = this;
            self.numberOfItemsInCart = UserShoppingCart.length;
            $rootScope.$on('CartUpdated', function () {
                var item;
                self.numberOfItemsInCart = 0;
                for (item in UserShoppingCart) {
                    if (UserShoppingCart.hasOwnProperty(item)) {
                        self.numberOfItemsInCart += UserShoppingCart[item].quantity;
                    }
                }
            });
        }]);
}());
