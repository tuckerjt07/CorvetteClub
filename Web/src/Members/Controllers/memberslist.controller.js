/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.members.list.controller', [])
        .controller('MembersListCtrl', ['MembersList', function (MembersList) {
            var membersList;
            membersList = this;
            membersList.loadMembers = function () {
                membersList.members = MembersList.getAll();
            };
            membersList.searchUsers = function (searchParams, searchArray) {
                alert(searchParams);
            };
            membersList.parameters = [
                {
                    text: 'Username A - Z',
                    value: 'username',
                    reverse: false
                },
                {
                    text: 'Username Z - A',
                    value: 'username',
                    reverse: true
                },
                {
                    text: 'First Name A - Z',
                    value: 'firstName',
                    reverse: false
                },
                {
                    text: 'First Name Z - A',
                    value: 'firstName',
                    reverse: true
                },
                {
                    text: 'Last Name A - Z',
                    value: 'lastName',
                    reverse: false
                },
                {
                    text: 'Last Name Z - A',
                    value: 'lastName',
                    reverse: true
                }
            ];
        }]);
}());
