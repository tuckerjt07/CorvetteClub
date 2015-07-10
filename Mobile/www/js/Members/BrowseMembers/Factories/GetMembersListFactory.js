/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.getmemberslist.factory', [])
    .factory('GetMembersList', [function () {
        var i, testMembers, testImgUrl;
        testMembers = [];
        testImgUrl = 'http://loremflickr.com/320/240/corvette';
        for (i = 0; i < 25; i++) {
            testMembers.push({
                Id: i,
                Username: 'User' + i,
                FirstName: 'FirstName' + i,
                LastName: 'LastName' + i,
                Img: testImgUrl + '?random=' + i
            });
        }
        return {
            get: function () {
                return testMembers;
            }
        };
    }]);
})();
