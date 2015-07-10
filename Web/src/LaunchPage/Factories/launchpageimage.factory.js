/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.launchpage.images.factory', [])
        .factory('LaunchPageImages', [function () {
            var testImages, i;
            testImages = [];
            for (i = 0; i < 5; i++) {
                testImages.push({
                    Id: i,
                    Path: 'images/Corvette' + i + '.jpg'
                });
            }
            return {
                getImages: function () {
                    return testImages;
                }
            };
        }]);
}());
