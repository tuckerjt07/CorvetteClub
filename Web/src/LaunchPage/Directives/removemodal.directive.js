/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.removemodal.directive', [])
        .directive('removeModal', ['$document', '$timeout', function ($document, $timeout) {
            var removeClasses;
            removeClasses = function () {
                $timeout(function() {
                    $document[0].body.classList.remove('modal-open');
                    angular.element($document[0].getElementsByClassName('modal-backdrop')).remove();
                    angular.element($document[0].getElementsByClassName('modal')).remove();
                },50);
            };
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    element.bind('click', function () {
                        removeClasses();
                    });
                    scope.$on('CloseModal', function () {
                        removeClasses();
                    });
                }
            };
        }]);
}());
//$('div.modal').removeClass('fade').addClass('hidden');
//$('body').removeClass('modal-open');
//$('.modal-backdrop').remove();
