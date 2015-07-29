/*global angular*/
(function () {
    'use strict';
    angular.module('CorvetteClub.merchandise.singleitem.controller', [])
        .controller('SingleItemCtrl', ['$rootScope', '$stateParams', 'MerchandiseItem', 'UserShoppingCart',
                                       function ($rootScope, $stateParams, MerchandiseItem, UserShoppingCart) {
            var self;
            self = this;
            self.Product = MerchandiseItem.getItem($stateParams.id);
            self.addItemToCart = function (item) {
                MerchandiseItem.checkIfItemInCart(item, UserShoppingCart, $rootScope);
            };
        }]);
}());
