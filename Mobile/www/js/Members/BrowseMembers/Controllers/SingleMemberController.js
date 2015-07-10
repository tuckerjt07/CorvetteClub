/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.singlemember.controller', [])
        .controller('SingleMemberCtrl', ['$scope', '$stateParams', '$timeout', '$ionicSlideBoxDelegate', 'Member',
                                         function ($scope, $stateParams, $timeout, $ionicSlideBoxDelegate, Member) {
            var _this;
            _this = this;
            _this.Id = $stateParams.memberId;
            _this.Username = $stateParams.username;
            _this.FirstName = $stateParams.firstName;
            _this.LastName = $stateParams.lastName;
            _this.Member = Member.getMember($stateParams.memberId);
            _this.Member.ProfileImage = undefined;
            _this.Member.ProfileImage = Member.getProfileImage($stateParams.memberId);
    }]);
}());
