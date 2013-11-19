'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

//---------------------------------------------
//----- HOME CONTROLLER -----//
//---------------------------------------------

.controller('home_ctrl', ['Projects', '$scope', function(Projects, $scope) {
	$("[data-toggle='tooltip']").tooltip();
	Projects.get(function(response) {
		$scope.projects = response;
	});
}])

//---------------------------------------------
//----- HOME THUMBS CONTROLLER -----//
//---------------------------------------------

.controller('home_thumbs_ctrl', ['ProjectImages', 'Images', '$scope', '$rootScope', function(ProjectImages, Images, $scope, $rootScope) {
	ProjectImages.get($scope.projects[$scope.$index].imgdir, function(response) {
		$scope.projectImages = response;
		$scope.imageLoading = true;
		var image = 'img/' + $scope.projects[$scope.$index].imgdir + '/' + $scope.projectImages[0];
		Images.Preload(image, function() {
			$scope.stopSpinner();
			$scope.imageLoading = false;
			if(!$scope.$$phase) {
				$scope.$digest();
			}
		});
	});
	if($scope.$last) {
		if(typeof $rootScope.skrollr === 'undefined') {
			$rootScope.skrollr = skrollr.init({
				forceHeight: false
			});
		} else {
			$rootScope.skrollr.refresh();
		}
	}
}])

//---------------------------------------------
//----- PROJECT CONTROLLER -----//
//---------------------------------------------

.controller('project_ctrl', ['Projects', 'ProjectImages', '$scope', '$routeParams', function(Projects, ProjectImages, $scope, $routeParams) {
	$("[data-toggle='tooltip']").tooltip();
	Projects.get(function(response) {
		$scope.projects = response;
		$scope.title 			= $scope.projects[$routeParams.projectId - 1].title;
		$scope.at 				= $scope.projects[$routeParams.projectId - 1].at;
		$scope.what 			= $scope.projects[$routeParams.projectId - 1].what;
		$scope.client 		= $scope.projects[$routeParams.projectId - 1].client;
		$scope.info 			= $scope.projects[$routeParams.projectId - 1].info;
		$scope.imgdir			= $scope.projects[$routeParams.projectId - 1].imgdir;
		$scope.imgs				= $scope.projects[$routeParams.projectId - 1].imgs;
		$scope.dropdowns 	= $scope.projects[$routeParams.projectId - 1].dropdowns;
		$scope.links 			= $scope.projects[$routeParams.projectId - 1].links;
		ProjectImages.get($scope.projects[$routeParams.projectId - 1].imgdir, function(response) {
			$scope.imgs = response;
		});
	});
	
	var computeWidth = function() {
			return window.innerWidth;
	};
	
	$scope.screenWidth = computeWidth();
	
	angular.element(window).bind('resize', function() {
			$scope.screenWidth = computeWidth();
			$scope.$digest();
	});
}])

//---------------------------------------------
//----- PROJECT THUMBS CONTROLLER -----//
//---------------------------------------------

.controller('project_thumbs_ctrl', ['Images', 'ProjectImages', '$scope', '$routeParams', function(Images, ProjectImages, $scope, $routeParams) {
	ProjectImages.get($scope.projects[$routeParams.projectId - 1].imgdir, function(response) {
		$scope.projectImages = response;
		$scope.imageLoading = true;
		var image = 'img/' + $scope.projects[$routeParams.projectId - 1].imgdir + '/' + $scope.projectImages[$scope.$index];
		Images.Preload(image, function() {
			$scope.stopSpinner();
			$scope.imageLoading = false;
			if(!$scope.$$phase) {
				$scope.$digest();
			}
		});
		$(".fancybox").fancybox({
			padding: [0,0,0,0]
		});
	});
}]);
