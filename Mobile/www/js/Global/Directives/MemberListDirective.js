/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.memberlist.directive', [])
        .directive('memberList', ['$templateRequest', '$compile',
                                  function ($templateRequest, $compile) {
            return {
                restrict: 'AE',
                replace: true,
                link: function (scope, element, attrs) {
                    $templateRequest('../../templates/Widgets/member-list.html', [true])
                        .then(function (data) {
                        var compiled = $compile(data);
                        element.append(compiled(scope));
                    });
                }
            };
        }]);
}());
