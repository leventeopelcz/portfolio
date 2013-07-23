'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('home_ctrl', ['Projects', function(Projects) {
		Projects.getProjects();
	}])
	
  .controller('project_ctrl', ['$scope', '$routeParams', 'Projects', function($scope, $routeParams, Projects) {
		Projects.getProjects(function(data) {
			var projects = data;
			$scope.title 	= projects[$routeParams.projectId - 1].title;
			$scope.at 		= projects[$routeParams.projectId - 1].at;
			$scope.what 	= projects[$routeParams.projectId - 1].what;
			$scope.client = projects[$routeParams.projectId - 1].client;
			$scope.info 	= projects[$routeParams.projectId - 1].info;
			$scope.imgdir	= projects[$routeParams.projectId - 1].imgdir;
			$scope.imgs		= projects[$routeParams.projectId - 1].imgs;
			$(".fancybox").fancybox({
				padding: [0,0,0,0]
			});
		});
  }])
	
	.controller('projects_ctrl', ['$scope', function($scope) {
		//init scrollr
		if($scope.$last) {
			setTimeout(function() {
				skrollr.init({
					forceHeight: false
				});
			}, 0);
		}
  }]);