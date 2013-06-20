'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'home_ctrl'});
    $routeProvider.when('/project/:projectId', {templateUrl: 'partials/project.html', controller: 'project_ctrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);