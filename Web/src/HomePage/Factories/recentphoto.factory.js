/*global angular */
/*jslint plusplus: true */
(function () {
    'use strict';
    angular.module('CorvetteClub.homepage.recentpictures.factory', [])
        .factory('GetImages', [function () {
            var i, testImages;
            testImages = [];
            for (i = 0; i < 10; i++) {
                testImages.push({
                    ImageId: i,
                    image: 'http://loremflickr.com/500/300/corvette?random=' + i,
                    description: 'This is simply a test image with an Id of ' + i + '.',
                    owner: 'User' + i
                });
            }
            return {
                getRecentForSlideShow: function () {
                    return testImages;
                }
            };
        }]);
}());
