'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'myApp.core',
    'myApp.config',
    'myApp.security',
    'myApp.home',
    'myApp.account',
    'myApp.chat',
    'myApp.login',
    'myApp.randomJson'
  ])
  
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/random', {
        templateUrl: 'random_json/random_json.html',
        controller: 'RandomJsonController'
      })
      .otherwise({
        redirectTo: '/home'
      })

  }])
  
  .run(['$rootScope', 'Auth', function($rootScope, Auth) {
    // track status of authentication
    Auth.$onAuth(function(user) {
      $rootScope.loggedIn = !!user;
    });
  }]);
