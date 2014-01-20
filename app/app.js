require.config({
    "baseUrl": "app",
    "paths": {
      "angular": "../bower_components/angular/angular",
      "angular.route": "../bower_components/angular-route/angular-route"
    },
    "shim": {
      "angular.route": ['angular'],
      "controllers": ['bootstrap']
    }
});

require(['bootstrap', 'controllers'], function(bootstrap) {
  bootstrap.init();
});
