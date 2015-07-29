/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.merchandiseitem.factory', [])
        .factory('MerchandiseItem', [function () {
            var i, tempData;
            tempData = [];
            for (i = 1; i < 11; i++) {
                tempData.push({
                    id: i,
                    image: "http://www.loremflickr.com/300/300/corvette?random=" + i,
                    price: i < 10 ? '1' + i + '.99' : '20.00',
                    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
                    title: 'Product ' + i,
                    quantity: 0
                });
            }
            return {
                getAll: function () {
                    return tempData;
                },
                getItem: function (id) {
                    return tempData[tempData.map(function (x) {return x.id.toString();}).indexOf(id.toString())];
                },
                checkIfItemInCart: function (item, UserShoppingCart, rootScope) {
                        var indexOfItem = UserShoppingCart.map(function (x) {return x.id;} ).indexOf(item.id);
                        if ( indexOfItem > -1) {
                            UserShoppingCart[indexOfItem].quantity = UserShoppingCart[indexOfItem].quantity + 1;
                        } else {
                            item.quantity = 1;
                            UserShoppingCart.push(item);
                        }
                        rootScope.$broadcast('CartUpdated');
                }
            };
        }]);
}());
