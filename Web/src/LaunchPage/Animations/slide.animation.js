/*global angular, TweenMax */
(function () {
    'use strict';
    angular.module('CorvetteClub.slide.animation', [])
        .animation('.slide-animation', function () {
            return {
                addClass: function (element, className, done) {
                    if (className == 'ng-hide') {
                        TweenMax.to(element, 1.5, {left: -element[0].parentElement.offsetWidth, onComplete: done });
                    }
                    else {
                        done();
                    }
                },
                removeClass: function (element, className, done) {
                    if (className == 'ng-hide') {
                        element.removeClass('ng-hide');

                        TweenMax.set(element, { left: element[0].parentElement.offsetWidth });
                        TweenMax.to(element, 1.5, {left: 0, onComplete: done });
                    }
                    else {
                        done();
                    }
                }
            };
    });
}());
