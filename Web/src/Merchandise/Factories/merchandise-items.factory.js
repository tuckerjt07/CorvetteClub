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
                    image: "http://www.loremflickr.com/150/120/corvette?random=" + i,
                    price: i < 10 ? '$1' + i + '.99' : '$20.00',
                    title: 'Product ' + i,
                    quantity: 0
                });
            }
            return {
                getAll: function () {
                    return tempData;
                }
            };
        }]);
}());
