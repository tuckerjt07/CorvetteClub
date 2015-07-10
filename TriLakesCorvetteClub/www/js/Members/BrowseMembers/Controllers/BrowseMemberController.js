/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.browsemembers.controller', [])
        .controller('BrowseMembersCtrl', ['GetMembersList', function (GetMembersList) {
        var _this;
        _this = this;
        _this.Members = GetMembersList.get();
    }]);
})();
