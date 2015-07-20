/*global angular, XMLHttpRequest */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.loadimage.factory', [])
        .factory('LoadImage', [function () {
            var request, loadImage, imageLoaded;
            loadImage = function (showProgressBar, updateProgressBar, showImage, hideProgressBar, element, imageURI) {
                request = new XMLHttpRequest();
                request.onloadstart = showProgressBar;
                request.onprogress = updateProgressBar;
                request.onload = imageLoaded;
                request.onloadend = hideProgressBar;
                request.open("GET", imageURI, true);
                request.overrideMimeType('text/plain; charset=x-user-defined');
                request.send(null);
                imageLoaded = function (response) {
                    showImage(response, element);
                };
            };
            return {
                getImage: function (showProgressBar, updateProgressBar, showImage, hideProgressBar, element, imageURI) {
                    loadImage(showProgressBar, updateProgressBar, showImage, hideProgressBar, element, imageURI);
                }
            };
        }]);
}());
