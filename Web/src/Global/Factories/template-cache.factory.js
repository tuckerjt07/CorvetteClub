/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.templatecache.factory', [])
        .factory('Template', ['$templateRequest', function ($templateRequest) {
            return {
                get: function (url, callback) {
                    $templateRequest(url, [true])
                        .then(function (data) {
                        if (callback !== undefined) {
                            callback(data);
                        }
                    });
                }
            };
        }]);
}());
