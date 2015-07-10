/* global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.cars.controller', [])
        .controller('MemberCarCtrl', ['$scope', '$timeout', '$stateParams', '$ionicModal', 'Cars',
                                      function ($scope, $timeout, $stateParams, $ionicModal, Cars) {
                var _this;
                _this = this;
                _this.Username = $stateParams.username;
                _this.Cars = [];
                $timeout(function () {
                    _this.Cars = Cars.get(0);
                }, 2000);
                // Create the cars modal that we will use later
                $ionicModal.fromTemplateUrl('templates/BrowseMembers/Modals/cars-modal.html', {
                    scope: $scope
                }).then(function (modal) {
                    _this.carModal = modal;
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
