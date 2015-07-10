/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.event.controller', [])
        .controller('EventCtrl', ['$scope', '$stateParams', '$ionicModal', 'Event', function ($scope, $stateParams, $ionicModal, Event) {
            var _this;
            _this = this;
            _this.Id = $stateParams.eventId;
            _this.Title = $stateParams.eventTitle;
            _this.Event = Event.getEvent(0);
            // Create the RSVPed events modal we will use later
            $ionicModal.fromTemplateUrl('templates/Events/Modals/attendee-modal.html', {
                scope: $scope
            }).then(function (modal) {
                _this.attendeeModal = modal;
            });
            // Close the modal
            _this.closeModal = function (modal) {
                modal.hide();
            };
            // Open the passed modal
            _this.openModal = function (modal) {
                modal.show();
            };
            $scope.closeModal = function () {
                _this.attendeeModal.hide();
            };
        }]);
}());
