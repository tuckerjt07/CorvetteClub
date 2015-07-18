/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.homepage.slideshow.controller', [])
        .controller('CarouselDemoCtrl', ['$rootScope', '$scope', '$timeout', 'GetImages',
                                         function ($rootScope, $scope, $timeout, GetImages) {
        $scope.myInterval = 5000;
        $rootScope.activeSlide = {};
        $scope.copiedSlides = {};
        var slides = $scope.slides = [];
        var slidesFromService = [];
        slidesFromService = GetImages.getRecentForSlideShow();
        $scope.addSlide = function (slide) {
            slides.push(slide);
        };
        var slideItem;
        for (slideItem in slidesFromService) {
            if (slidesFromService.hasOwnProperty(slideItem)) {
                $scope.addSlide(slidesFromService[slideItem]);
            }
        }
//        $timeout(function () {
//            for (var i=0; i<4; i++) {
//                $scope.addSlide();
//            }
//        }, 1000);
    }]);
}());
