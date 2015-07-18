/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.launchpage.controller', [])
        .controller('LaunchPageCtrl', ['$interval', '$state', '$modal', 'LaunchPageImages', 'LaunchPageFooter',
                                       function ($interval, $state, $modal, LaunchPageImages, LaunchPageFooter) {
                //Create a global this
                var launchPage;
                launchPage = this;
                launchPage.Images = [];
                launchPage.Images = LaunchPageImages.getImages();
                launchPage.currentIndex = 0;
                launchPage.play = true;
                launchPage.playPauseTooltip = 'Pause Slideshow';
                launchPage.navBarCollapsed = true;
                launchPage.footer = LaunchPageFooter;
                launchPage.setCurrentSlideIndex = function (index) {
                    launchPage.currentIndex = index;
                };
                launchPage.animationsEnabled = true;

                launchPage.open = function (size) {
                    var modalInstance = $modal.open({
                        animation: launchPage.animationsEnabled,
                        templateUrl: '../templates/LaunchPage/register.modal.html',
                        controller: 'RegisterModalCtrl',
                        controllerAs: 'registerModal',
                        size: size,
                        backdrop: 'static',
                        modal: 'lg'
                    });
                    modalInstance.result.then(function (object) {
                        alert(object);
                        launchPage.registerObject = object;
                    }, function () {
                        console.log('Closed');
                    });
                };
                launchPage.forgotPassword = function () {
                    var modalInstance = $modal.open({
                        animation: launchPage.animationsEnabled,
                        templateUrl: '../templates/LaunchPage/forgot-password.modal.html',
                        controller: 'ForgotPasswordModalCtrl',
                        controllerAs: 'forgotPasswordModal',
                        backdrop: 'static',
                        modal: 'lg'
                    });
                    modalInstance.result.then(function (object) {
                        alert(object);
                        launchPage.passwordRetrievalEmailAddress = object;
                    }, function () {
                        //Call factory here
                        console.log(launchPage.passwordRetrievalEmailAddress);
                    });
                };
                launchPage.playPause = function (bool) {
                    launchPage.play = bool ? false : true;
                    launchPage.playPauseTooltip = bool ? 'Start Slideshow' : 'Pause Slideshow';
                };

                launchPage.isCurrentSlideIndex = function (index) {
                    return launchPage.currentIndex === index;
                };
                launchPage.prevSlide = function () {
                    launchPage.currentIndex = (launchPage.currentIndex < launchPage.Images.length - 1) ? ++launchPage.currentIndex : 0;
                };
                launchPage.nextSlide = function () {
                    launchPage.currentIndex = (launchPage.currentIndex > 0) ? --launchPage.currentIndex : launchPage.Images.length - 1;
                };
                $interval(function () {
                    if (launchPage.play) {
                        launchPage.nextSlide();
                    }
                }, 6000);
                launchPage.login = function () {
                    $state.go('app.authorized.home');
                };
        }]);
}());
