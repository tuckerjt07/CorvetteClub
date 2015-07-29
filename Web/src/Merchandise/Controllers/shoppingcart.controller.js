/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.shoppingcart.controller', [])
        .controller('ShoppingCartCtrl', ['$rootScope', 'UserShoppingCart', function ($rootScope, UserShoppingCart) {
            var self;
            self = this;
            self.ItemsInCart = UserShoppingCart;
            self.RemoveFromCart = function (item) {
                var indexToRemove = self.ItemsInCart.map(function (x) { return x.id;}).indexOf(item.id);
                UserShoppingCart.splice(indexToRemove, 1);
                self.CalculateTotal();
                $rootScope.$broadcast('CartUpdated');
            };
            self.CalculateTotal = function () {
                var price, product;
                price = 0;
                for (product in self.ItemsInCart) {
                    if (self.ItemsInCart.hasOwnProperty(product)) {
                        price += self.ItemsInCart[product].price * self.ItemsInCart[product].quantity;
                    }
                }
                self.Total = price;
                $rootScope.$broadcast('CartUpdated');
            };
        }]);
}());
