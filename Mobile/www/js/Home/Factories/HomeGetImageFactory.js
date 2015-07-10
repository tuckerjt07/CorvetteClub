/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.home.getimage.factory', [])
    .factory('GetHomeImages', [function () {
        var i, images, testImage;
        images = [];
        testImage = 'http://loremflickr.com/300/220/corvette?random=';
        for (i = 0; i < 10; i++) {
            images.push({
                Img: testImage + i
            });
        }
        return {
            get: function (callback) {
                if (callback !== undefined) {
                    callback(images);
                } else {
                    return images;
                }
            }
        };
    }]);
})();
