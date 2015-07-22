/*global angular */
(function () {
    'use strict';
    angular.module('CorvetteClub.documents.factory', [])
        .factory('Document', [function () {
            var i, tempData, getImage;
            tempData = [];
            getImage = function (i) {
                if (i % 3 === 0) {
                    return '../../assets/icon-images/Excel.png';
                } else if (i % 2 === 0) {
                    return '../../assets/icon-images/PowerPoint.png';
                } else {
                    return '../../assets/icon-images/Word.png';
                }
            }
            for (i = 1; i < 21; i++) {
                tempData.push({
                    id: i,
                    title: 'Document ' + i,
                    date: new Date('2015', '01', '0' + i),
                    icon: getImage(i)
                });
            }
            return {
                getAll: function () {
                    return tempData;
                }
            };
        }]);
}());
