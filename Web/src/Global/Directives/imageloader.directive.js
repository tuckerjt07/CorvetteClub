/*global angular, document */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.imageloading.directive', [])
        .directive('imageLoader', ['LoadImage', 'Base64Encode', function (LoadImage, Base64Encode) {
                var progressBar, showProgressBar, updateProgressBar, showImage, hideProgressBar, removeQuotes;
                showProgressBar = function () {
                    progressBar = document.createElement("progress");
                    progressBar.value = 0;
                    progressBar.max = 100;
                    progressBar.removeAttribute("value");
                    document.body.appendChild(progressBar);
                };

                updateProgressBar = function (e) {
                    if (e.lengthComputable) {
                        progressBar.value = e.loaded / e.total * 100;
                    } else {
                        progressBar.removeAttribute("value");
                    }
                };

                showImage = function (response, element) {
                    //var imageElement = document.createElement("img");
                    //imageElement.src = "data:image/jpeg;base64," + base64Encode(request.responseText);
                    element[0].src = "data:image/jpeg;base64," + Base64Encode.encode(response.srcElement.responseText);
                    //document.body.appendChild(imageElement);
                };

                hideProgressBar = function () {
                    //document.body.removeChild(progressBar);
                };

                removeQuotes = function (string) {
                    return string.replace(/'/g, "");
                };
                return {
                    restrict: 'A',
                    link: function (scope, element, attr) {
                        scope.$watch(attr.source, function () {
                            LoadImage.getImage(showProgressBar, updateProgressBar, showImage, hideProgressBar, element, removeQuotes(attr.source));
                        });
                    }
                };
    }]);
}());
