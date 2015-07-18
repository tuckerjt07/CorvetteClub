/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.global.setcarouselitemscustom.directive', [])
        .directive('setCarouselItemsCustom', [function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var list, children, childElement;
                    list = angular.element(element[0].querySelector('.carousel-indicators'));
                    list.removeClass('carousel-indicators');
                    list.addClass('carousel-indicators-custom');
                }
            };
        }])
        .directive('setCarouselIndicatorImage', [function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var node, nodes;
                    nodes = angular.element(document.querySelectorAll('li'));
                    for (node in nodes) {
                        if (nodes.hasOwnProperty(node)) {
                            //return nodes[node].innerHTML('<p>Test</p>');
                        }
                    }
                }
            };
        }])
        .directive('slideClick', [function () {
            return {
                link: function (scope, element, attrs) {
                    element.bind('click', function () {
                        alert('Here');
                    });
                }
            };
        }])
        .directive('activeSlide', [function () {
            return {
                link: function (scope, element, attrs) {
                    scope.$watch(function () {
                        return element.attr('class');
                    }, function(newValue){
                        var classes;
                        classes = [];
                        classes = element[0].classList;
                        if (classes.contains('active')) {
                            scope.activeSlide = attrs.activeSlide;
                        }
                    });
                }
            };
        }])
}());
