(function (angular) {
    'use strict';

    angular
        .module('myApp.randomJson')

        .factory('RandomJsonService', RandomJsonService)

        RandomJsonService.$inject = ['$resource', 'CONSTANTS'];

        function RandomJsonService($resource, CONSTANTS) {

            var randomJsonFactory = {};
            var randomJsonRestEndpoint = CONSTANTS.MOCKAROO_API;

            randomJsonFactory.getRandomJson = function() {
                return $resource(randomJsonRestEndpoint, 
                    {
                        key : CONSTANTS.MOCKAROO_KEY,
                        schema : 'business_users',
                        count : 10
                    }, 
                    {
                        get : {
                            method : 'POST',
                            isArray : true
                        }
                    }
                )
            };

            return randomJsonFactory;
        }


})(angular);