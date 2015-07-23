/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.documents.factory', [])
        .factory('Document', [function () {
            var i, tempData, getImage, type;
            tempData = [];
            getImage = function (i) {
                if (i % 3 === 0) {
                    type = 'Excel';
                    return '../../assets/icon-images/Excel.png';
                } else if (i % 2 === 0) {
                    type= "PowerPoint";
                    return '../../assets/icon-images/PowerPoint.png';
                } else {
                    type = 'Word';
                    return '../../assets/icon-images/Word.png';
                }
            }
            for (i = 1; i < 21; i++) {
                type = '';
                tempData.push({
                    id: i,
                    title: 'Document ' + i,
                    date: new Date('2015', '01', '0' + i),
                    icon: getImage(i),
                    type: type
                });
            }
            return {
                getAll: function () {
                    return tempData;
                }
            };
        }]);
}());
