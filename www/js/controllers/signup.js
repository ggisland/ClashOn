(function () {
  'use strict';
  angular.module('clashon.controllers')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider.state('main.signup', {
        url: '/signup',
        views: {
          'main-content': {
            templateUrl: 'views/signup.html',
            controller: 'SignupCtrl'
          }
        }
      });
    }])
    .controller('SignupCtrl', ['$scope', '$state', 'UserManagement', function ($scope, $state, UserManagement) {
      $scope.vm = {};

      $scope.clearError = function () {
        $scope.vm.error = null;
      }

      $scope.doSignup = function () {
        if (!$scope.vm.form.$valid) {
          return;
        }

        UserManagement.signup($scope.vm.user.username, $scope.vm.user.password, $scope.vm.user.email).then(
          function (user) {
            $scope.$emit('loginStateChanged');
            $state.go('main.home');
          },
          function (err) {
            switch (err.code) {
              case 202:
                $scope.vm.error = 'This username is already in use.';
                break;
              case 203:
                $scope.vm.error = 'This email address is already in use.';
                break;
              default:
                $scope.vm.error = 'An error occurred during signup.<br />Please try again.';
                break;
            }
          });
      };
    }]);
})();