(function () {
  'use strict';
  angular.module('clashon.services')
    .factory('UserManagement', ['ParseSdk', function (ParseService) {
      var userManagement = {};
      var _currentUser = null;

      userManagement.isLoggedIn = Parse.User.current() !== null;

      userManagement.login = function (username, password) {
        return Parse.User.logIn(username, password).then(function (result) {
          _currentUser = result;
          userManagement.isLoggedIn = true;
          return result;
        }, function (error) {
          _currentUser = null;
          userManagement.isLoggedIn = false;
          return error;
        });
      };

      userManagement.logout = function () {
        _currentUser = null;
        userManagement.isLoggedIn = false;
        Parse.User.logOut();
      };

      userManagement.signup = function (username, password, email) {
        var user = new Parse.User();
        user.set('username', username);
        user.set('password', password);
        user.set('email', email);
        return user.signUp().then(function (result) {
          userManagement.login(username, password);
          return result;
        }, function (error) {
          return error;
        });
      };

      return userManagement;
    }]);
})();