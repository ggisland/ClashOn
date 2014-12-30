(function () {
  'use strict';
  angular.module('clashon.controllers')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('main', {
        url: '',
        templateUrl: 'views/main.html',
        abstract: true,
        controller: 'MainCtrl'
      });
    }])
    .controller('MainCtrl', ['$scope', '$state', 'UserManagement', 'ParseSdk', function ($scope, $state, UserManagement, ParseServices) {
      $scope.loggedIn = UserManagement.isLoggedIn;

      $scope.$on('loginStateChanged', function () {
        $scope.loggedIn = UserManagement.isLoggedIn;
      });

      $scope.logout = function () {
        UserManagement.logout();
        $scope.loggedIn = false;
        $state.go('main.home');
      };
    }]);
})();