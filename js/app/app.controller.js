
angular
    .module('app')
    .controller('MainController', function($scope) {

        $scope.images = [
            { url: '../../img/paintings/EyeSchool.jpg', thumbUrl: '../../img/thumb/EyeSchool.jpg' },
            { url: '../../img/paintings/EyeSchool.jpg', thumbUrl: '../../img/thumb/EyeSchool.jpg' }

        ];

    });