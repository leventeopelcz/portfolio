'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('home_ctrl', ['$rootScope', '$scope', function($rootScope, $scope) {
		
		//projects
		$rootScope.projects = [
			{ title: 'Project 1 Title', at: 'Ayogo'},
			{ title: 'Project 2 Title', at: 'Nowhere'},
			{ title: 'Project 3 Title', at: 'Home'},
			{ title: 'Project 4 Title', at: 'At my moms'},
			{ title: 'Project 5 Title', at: 'Nan'},
			{ title: 'Project 6 Title', at: 'Are u kidding me?'}
		]
  
	}])
	
  .controller('project_ctrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {
		
		$scope.title = $rootScope.projects[$routeParams.projectId - 1].title;
		
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