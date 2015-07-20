/*global angular */
(function () {
    angular.module('CorvetteClub.global.eventtype.directive', [])
        .directive('eventType', [function () {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    switch (parseInt(attr.eventType, 10)) {
                        case 1:
                            element.addClass('text-dark-blue');
                            break;
                        case 2:
                            element.addClass('text-bright-red');
                            break;
                        case 3:
                            element.addClass('text-yellow');
                            break;
                        case 4:
                            element.addClass('text-white');
                            break;
                    }
                    element.bind('mouseenter', function () {
                        element.addClass(element[0].classList[element[0].classList.length - 1] + '-highlight');
                        angular.element(element[0].children[4]).removeClass('hide-description');
                    });
                    element.bind('mouseleave', function () {
                        element.removeClass(element[0].classList[element[0].classList.length - 1]);
                        angular.element(element[0].children[4]).addClass('hide-description');
                    });
                }
            };
        }]);
}());
