/* global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.memberslideshow.controller', [])
        .controller('MemberSlideShowCtrl', ['$scope','$timeout', '$ionicSlideBoxDelegate', 'Member',
                                            function ($scope, $timeout, $ionicSlideBoxDelegate, Member) {
            var _this;
            _this = this;
            _this.Images = [];
            _this.Images = Member.getMemberImages(0);
            $timeout(function () {
                _this.show = true;
                $ionicSlideBoxDelegate.$getByHandle('slideshow').update();
                $ionicSlideBoxDelegate.$getByHandle('slideshow').start();
            }, 1000);
    }]);
}());
