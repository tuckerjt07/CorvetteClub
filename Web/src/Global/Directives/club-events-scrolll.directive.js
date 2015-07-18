/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.clubeventsscroll.directive', [])
        .directive('clubEvents', ['$compile', 'Template', function ($compile, Template) {
            var callback, myScope, myElement;
            callback = function (data) {
                var compiled = $compile(data);
                myElement.append(compiled(myScope));
            };
            return {
                restrict: 'AE',
                replace: true,
                link: function (scope, element, attrs) {
                    myScope = scope;
                    myElement = element;
                    Template.get('templates/Global/club-events.tpl.html', callback);
                }
            };
        }]);
}());
