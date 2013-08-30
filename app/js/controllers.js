'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('home_ctrl', ['Projects', '$timeout', '$rootScope', function(Projects, $timeout, $rootScope) {
		 $("[data-toggle='tooltip']").tooltip();
		 
		Projects.getProjects(function() {
			$timeout(function() {
				console.log('scrollr refresh');
				$rootScope.scrollr.refresh();
			}, 0);
		});
	}])
	
  .controller('project_ctrl', ['$scope', '$routeParams', 'Projects', '$rootScope', function($scope, $routeParams, Projects, $rootScope) {
		Projects.getProjects(function() {
			$scope.title 	= $rootScope.projects[$routeParams.projectId - 1].title;
			$scope.at 		= $rootScope.projects[$routeParams.projectId - 1].at;
			$scope.what 	= $rootScope.projects[$routeParams.projectId - 1].what;
			$scope.client = $rootScope.projects[$routeParams.projectId - 1].client;
			$scope.info 	= $rootScope.projects[$routeParams.projectId - 1].info;
			$scope.imgdir	= $rootScope.projects[$routeParams.projectId - 1].imgdir;
			$scope.imgs		= $rootScope.projects[$routeParams.projectId - 1].imgs;
			
			$(".fancybox").fancybox({
				padding: [0,0,0,0]
			});
		});
  }]);