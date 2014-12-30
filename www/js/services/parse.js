(function () {
  'use strict';
  angular.module('clashon.services')
    .factory('ParseSdk', function () {
      Parse.initialize("NkAlPCwc994IwL0JCWicde6pqMyzor4F5Ac8GpjU", "rmkFmYIHSSSHQeTz9RpnBwcXOBXWgcVccZ9KmAhW");
    });
})();