define(function(require) {
  require('angular');
  require ('angular.route');
  angular.module('ftApp', ['ngRoute']);

  var router = require ('router');



  return {
    init: function() {
      router.init();
      angular.bootstrap(document, ['ftApp']);
    }
  };
});
