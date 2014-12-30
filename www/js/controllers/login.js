(function () {
  'use strict';
  angular.module('clashon.controllers')
    .config(['$stateProvider', function($stateProvider) {
      $stateProvider.state('main.login', {
        url: '/login',
        views: {
          'main-content': {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
          }
        }
      });
    }])
    .controller('LoginCtrl', ['$scope', '$state', 'UserManagement', function ($scope, $state, UserManagement) {
      $scope.vm = {};

      $scope.clearError = function () {
        $scope.vm.error = null;
      }

      $scope.doLogin = function () {
        if (!$scope.vm.form.$valid) {
          return;
        }

        UserManagement.login($scope.vm.user.username, $scope.vm.user.password).then(
          function (user) {
            $scope.$emit('loginStateChanged');
            $state.go('main.home');
          },
          function (err) {
            switch (err.code) {
              case 101:
                $scope.vm.error = 'Login failed. Please try again.';
                break;
              default:
                $scope.vm.error = 'An error occurred during login.<br />Please try again.';
                break;
            }
          });
      };
    }]);
})();