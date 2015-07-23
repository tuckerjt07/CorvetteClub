/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.documents.list.controller', [])
        .controller('DocumentsListController', ['Document', function (Document) {
            var documentsList, LoadDocuments;
            documentsList = this;
            documentsList.documents = [];
            documentsList.types = [
                {
                    text: 'Excel'
                },
                {
                    text: 'PowerPoint'
                },
                {
                    text: 'Word'
                }
            ];
            documentsList.LoadDocuments = function () {
                documentsList.documents = Document.getAll();
            };
        }]);
}());
