/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.authorizednavbar.directive', [])
        .directive('authorizedNavBar', ['$compile', 'Template', function ($compile, Template) {
            var callback, myScope, myElement;
            callback = function (data) {
                var compiled = $compile(data);
                myElement.append(compiled(myScope));
            };
            return {
                restrict: 'AE',
                replace: true,
                controller: 'NavbarCtrl as navbar',
                link: function (scope, element, attrs) {
                    myScope = scope;
                    myElement = element;
                    Template.get('templates/Authorized/authorized-navbar.tpl.html', callback);
                }
            };
        }]);
}());
