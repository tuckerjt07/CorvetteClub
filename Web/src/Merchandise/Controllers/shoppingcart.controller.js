/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.shoppingcart.controller', [])
        .controller('ShoppingCartCtrl', ['UserShoppingCart', function (UserShoppingCart) {
            var self;
            self = this;
            self.ItemsInCart = UserShoppingCart;
        }]);
}());
