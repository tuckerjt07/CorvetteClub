/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.removemodal.directive', [])
        .directive('removeModal', ['$document', function ($document) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    element.bind('click', function () {
                        $document[0].body.classList.remove('modal-open');
                        angular.element($document[0].getElementsByClassName('modal-backdrop')).remove();
                        angular.element($document[0].getElementsByClassName('modal')).remove();
                    });
                }
            };
        }]);
}());
//$('div.modal').removeClass('fade').addClass('hidden');
//$('body').removeClass('modal-open');
//$('.modal-backdrop').remove();
