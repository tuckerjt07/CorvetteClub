/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.member.controller', [])
        .controller('MemberCtrl', ['$stateParams', 'MembersList', function ($stateParams, MembersList) {
            var self;
            self = this;
            self.getMember = function () {
                 self.Member = MembersList.getMember($stateParams.username);
            };
        }]);
}());
