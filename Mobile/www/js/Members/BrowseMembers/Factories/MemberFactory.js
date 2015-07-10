/*global angular */
(function () {
    angular.module('CorvetteClub.member.factory', [])
    .factory('Member', [function () {
        var i, testMember, testImages, testImgUrl;
        testMember = {};
        testImages = [];
        testImgUrl = 'http://loremflickr.com/250/220/corvette?random=';
        for (i = 0; i < 7; i++) {
            testImages.push({
                Img: testImgUrl + i
            });
        }
        return {
            getMember: function (id) {
                id = null;
                return {
                    Id: 0,
                    Username: 'Corvette2007Z1',
                    FirstName: 'John',
                    LastName: 'Doe',
                    Birthday: '01/01/0001',
                    About: 'This is just some Lorem Ipsum text that I am entering at random so that I can see how it is going to look on the screen. It is nothing special but will take up space so that I can test. The main goal of this is so that I can test how that this looks on the screen.'
                };
            },
            getProfileImage: function (id) {
                id = null;
                return testImages[0].Img;
            },
            getMemberImages: function (id) {
                id = null;
                return testImages;
            }
        };
    }]);
}());
