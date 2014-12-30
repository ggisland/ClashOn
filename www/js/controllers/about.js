(function () {
  'use strict';
  angular.module('clashon.controllers')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('main.about', {
        url: '/about',
        views: {
          'main-content': {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          }
        }
      });
    }])
    .controller('AboutCtrl', ['$scope', function ($scope) {
      //$scope.loggedIn = false;
    }]);
})();