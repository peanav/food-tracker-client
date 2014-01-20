define(function(require) {
  function init() {
    angular.module('ftApp').config(function($routeProvider) {
      $routeProvider.
      when('/meals', {
        templateUrl: 'templates/meals.html',
        controller: 'mealCtrl'
      }).
      otherwise({
        redirectTo: '/meals'
      });
    });
  }

  return {
    init: init
  };
});
