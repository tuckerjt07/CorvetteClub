/*global angular */
(function () {
    angular.module('CorvetteClub.global.photomodal.controller', [])
        .controller('PhotoModalCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate',
                                       function ($scope, $ionicModal, $ionicSlideBoxDelegate) {
                var _this;
                _this = this;
                $ionicModal.fromTemplateUrl('templates/Widgets/image-modal.html', {
                    scope: $scope
                }).then(function (modal) {
                    _this.photoModal = modal;
                });
                _this.launchModal = function (images, title, activePhoto) {
                    _this.Images = images;
                    _this.Title = title;
                    _this.photoModal.show();
                    $ionicSlideBoxDelegate.$getByHandle('photos').slide(activePhoto);
                };
                _this.closeModal = function () {
                    _this.photoModal.hide();
                };
        }]);
}());
