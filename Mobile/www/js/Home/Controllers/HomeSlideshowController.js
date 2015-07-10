/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.home.slideshow.controller', [])
        .controller('HomeSlideShowCtrl', ['$ionicSlideBoxDelegate', '$timeout', 'GetHomeImages',
                                          function ($ionicSlideBoxDelegate, $timeout, GetHomeImages) {
            var _this;
            _this = this;
//            callback = function (data) {
//                _this.Images = data;
//                $timeout(function () {
//                    $ionicSlideBoxDelegate.$getByHandle('homeSlideshow').update();
//                    $ionicSlideBoxDelegate.$getByHandle('homeSlideshow').start();
//                }, 10000);
//            };
            _this.Images = GetHomeImages.get();
            $timeout(function () {
                _this.show = true;
                $ionicSlideBoxDelegate.$getByHandle('slideshow').update();
                $ionicSlideBoxDelegate.$getByHandle('slideshow').start();
            }, 1000);
    }]);
})();
