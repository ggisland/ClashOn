(function () {
  'use strict';

  var core = angular.module('clashon.core');

  core.directive('webfontLoader', ['$rootScope', '$window', function ($rootScope, $window) {
    return {
      link: function (scope, elem, attrs) {

        function onActive() {
          $rootScope.$broadcast('webfontLoader.loaded');
        }

        function onInactive() {
          $rootScope.$broadcast('webfontLoader.error');
        }

        if (typeof ($window.WebFont) !== 'undefined') {
          $window.WebFont.load({
            google: {
              families: [attrs.webfontLoader]
            },
            active: onActive,
            inactive: onInactive
          });
        }
      }
    };
  }]);
}());