/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.home.newsticker.controller', [])
        .controller('HomeNewsTickerCtrl', ['$scope', '$timeout', '$ionicScrollDelegate',
                                           function ($scope, $timeout, $ionicScrollDelegate) {
                var _this, newsfeed, i;
                _this = this;
                newsfeed = [];
                i = Number;
                for (i = 0; i < 8; i++) {
                    newsfeed.push({
                        Id: i + 1,
                        Date: '6/2' + i + '/2015',
                        Title: 'Item ' + i,
                        Text: 'Just a bunch of Lorem Ipsum text to act like a news blurb'
                    });
                }
                _this.newsfeed = newsfeed;
                _this.recycleList = function () {
                    $timeout(function () {
                        var moveToBottom = _this.newsfeed.shift();
                        _this.newsfeed.push(moveToBottom);
                        $scope.$broadcast('scroll.infiniteScrollComplete');
                        $scope.$broadcast('scroll.resize');
                        $scope.$broadcast('scroll.resize');
                    }, 0);
                };
                $scope.$on('$viewContentLoaded', function () {
                    $ionicScrollDelegate.$getByHandle('newsticker').scrollBottom([]);
                });
        }]);
})();
