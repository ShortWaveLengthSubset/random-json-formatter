(function (angular) {
    'use strict';

    angular
        .module('myApp.randomJson', [
            'ngRoute', 'firebase.utils', 'firebase'
        ])
        .controller('RandomJsonController', RandomJsonController)

        RandomJsonController.$inject = ['$scope', 'RandomJsonService', '$firebaseArray', 'FBURL'];

        function RandomJsonController($scope, RandomJsonService, $firebaseArray, FBURL) {
            console.log(FBURL);
            var ref = new Firebase(FBURL)

            $scope.getRandomJson = function() {
                $scope.data = RandomJsonService.getRandomJson().get(function() {
                    
                });
            }

            angular.element(document).ready(function() {
                $scope.getRandomJson();
            })

        }

})(angular);