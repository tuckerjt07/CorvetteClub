/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.merchandise.controlller', [])
        .controller('MerchandiseCtrl', ['$rootScope', 'MerchandiseItem', 'UserShoppingCart',
                                        function ($rootScope, MerchandiseItem, UserShoppingCart) {
            var self;
            self = this;
            self.getProducts = function () {
                self.products = MerchandiseItem.getAll();
            };
            self.addItemToCart = function (item) {
                MerchandiseItem.checkIfItemInCart(item, UserShoppingCart, $rootScope);
            };
        }]);
}());
