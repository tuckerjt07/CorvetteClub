/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.merchandise.controlller', [])
        .controller('MerchandiseCtrl', ['$rootScope', 'MerchandiseItem', 'UserShoppingCart',
                                        function ($rootScope, MerchandiseItem, UserShoppingCart) {
            var self, checkIfItemInCart;
            self = this;
            checkIfItemInCart = function (item) {
                var indexOfItem = UserShoppingCart.map(function (x) {return x.id;} ).indexOf(item.id);
                if ( indexOfItem > -1) {
                    UserShoppingCart[indexOfItem].quantity = UserShoppingCart[indexOfItem].quantity + 1;
                } else {
                    item.quantity = 1;
                    UserShoppingCart.push(item);
                }
                $rootScope.$broadcast('CartUpdated');
            };
            self.getProducts = function () {
                self.products = MerchandiseItem.getAll();
            };
            self.addItemToCart = function (item) {
                checkIfItemInCart(item);
            };
        }]);
}());
