/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.memberevents.controller', [])
        .controller('MemberEventCtrl', ['$scope', '$timeout', '$stateParams', '$ionicModal', 'MemberEvent',
                                        function ($scope, $timeout, $stateParams, $ionicModal, MemberEvent) {
            var _this;
            _this = this;
            _this.Username = $stateParams.username;
            $timeout(function () {
                _this.Events = MemberEvent.getFutureForMember($stateParams.memberId);
            }, 2000);
            // Create the RSVPed events modal we will use later
            $ionicModal.fromTemplateUrl('templates/BrowseMembers/Modals/events-modal.html', {
                scope: $scope
            }).then(function (modal) {
                _this.eventModal = modal;
            });
            // Close the modal
            _this.closeModal = function (modal) {
                modal.hide();
            };
            // Open the passed modal
            _this.openModal = function (modal) {
                modal.show();
            };
        }]);
}());
