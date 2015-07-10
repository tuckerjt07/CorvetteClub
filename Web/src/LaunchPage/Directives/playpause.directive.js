/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.playpause.directive', [])
        .directive('playPause', ['$templateRequest', '$compile', function ($templateRequest, $compile) {
            return {
                restrict: 'AE',
                replace: true,
                transclude: true,
                link: function (scope, element, attrs) {
                    var attr = attrs;
                    attrs = attr;
                    $templateRequest('../../templates/LaunchPage/play-pause.tpl.html', [true])
                        .then(function (data) {
                        var compiled = $compile(data);
                        element.append(compiled(scope));
                    });
                }
            };
        }]);
}());
