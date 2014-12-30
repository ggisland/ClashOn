(function () {
  'use strict';
  angular.module('clashon.controllers')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('main.home', {
        url: '/home',
        views: {
          'main-content': {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
          }
        }
      });
    }])
    .controller('HomeCtrl', ['$scope', function ($scope) {
      //$scope.loggedIn = false;
    }]);
})();