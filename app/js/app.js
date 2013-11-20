'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'home_ctrl'});
    $routeProvider.when('/project/:projectId', {templateUrl: 'partials/project.html', controller: 'project_ctrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }])
	.run(function($rootScope, $anchorScroll) {
		$rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
			//scroll to top of page as per every other god damn page on the web :/
			$anchorScroll();  
		});
	});