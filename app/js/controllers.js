'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

//---------------------------------------------
//----- HOME CONTROLLER -----//
//---------------------------------------------

.controller('home_ctrl', ['Projects', function(Projects) {
	$("[data-toggle='tooltip']").tooltip();
}])

//---------------------------------------------
//----- PROJECTS CONTROLLER -----//
//---------------------------------------------

.controller('projects_ctrl', ['Projects', 'Images', '$timeout', '$rootScope', '$scope', function(Projects, Images, $timeout, $rootScope, $scope) {
	Projects.getProjects(function() {
		var image = 'img/' + $rootScope.projects[$scope.$index].imgdir + '/' + $rootScope.projects[$scope.$index].imgs[0];
		$scope.imageLoading = true;
		Images.preload(image, function() {
			$scope.stopSpinner();
			$scope.imageLoading = false;
			$scope.$apply();
		});
	});
}])

//---------------------------------------------
//----- PROJECT CONTROLLER -----//
//---------------------------------------------

.controller('project_ctrl', ['$scope', '$routeParams', 'Projects', '$rootScope', '$timeout', function($scope, $routeParams, Projects, $rootScope, $timeout) {
	Projects.getProjects(function() {
		$scope.title 	= $rootScope.projects[$routeParams.projectId - 1].title;
		$scope.at 		= $rootScope.projects[$routeParams.projectId - 1].at;
		$scope.what 	= $rootScope.projects[$routeParams.projectId - 1].what;
		$scope.client = $rootScope.projects[$routeParams.projectId - 1].client;
		$scope.info 	= $rootScope.projects[$routeParams.projectId - 1].info;
		$scope.imgdir	= $rootScope.projects[$routeParams.projectId - 1].imgdir;
		$scope.imgs		= $rootScope.projects[$routeParams.projectId - 1].imgs;
		
		$scope.dropdowns 	= $rootScope.projects[$routeParams.projectId - 1].dropdowns;
		$scope.links 			= $rootScope.projects[$routeParams.projectId - 1].links;
		
		$(".fancybox").fancybox({
			padding: [0,0,0,0]
		});
		
		$("[data-toggle='tooltip']").tooltip();
		
		$timeout(function() {
			
			//initialise spinner
			var opts = {
				lines: 5, // The number of lines to draw
				length: 0, // The length of each line
				width: 10, // The line thickness
				radius: 16, // The radius of the inner circle
				corners: 0, // Corner roundness (0..1)
				rotate: 0, // The rotation offset
				direction: 1, // 1: clockwise, -1: counterclockwise
				color: '#49adf6', // #rgb or #rrggbb or array of colors
				speed: 1, // Rounds per second
				trail: 68, // Afterglow percentage
				shadow: false, // Whether to render a shadow
				hwaccel: true, // Whether to use hardware acceleration
				className: 'spinner', // The CSS class to assign to the spinner
				zIndex: 2e9, // The z-index (defaults to 2000000000)
				top: 'auto', // Top position relative to parent in px
				left: 'auto' // Left position relative to parent in px
			};
			var targets = $('.image-placeholder');
			var spinners = [];
			for(var i = 0; i < targets.length; i++) {
				spinners[i] = new Spinner(opts).spin(targets[i]);
			}
			
			function PreloadImage(imgSrc, callback, imgs, spinners, idx){
				var objImagePreloader = new Image();
			
				objImagePreloader.src = imgSrc;
				if(objImagePreloader.complete){
					callback(imgs, spinners, idx);
					objImagePreloader.onload=function(){};
				}
				else{
					objImagePreloader.onload = function() {
						callback(imgs, spinners, idx);
						//    clear onLoad, IE behaves irratically with animated gifs otherwise
						objImagePreloader.onload=function(){};
					}
				}
			}
			
			$scope.imgsLoading = [];
			
			var imgcallback = function(imgs, spinners, idx) {
				spinners[idx].stop();
				imgs[idx] = false;
				$scope.$apply();
				//console.log('finished loading... ' + idx);
				//console.log(imgs);
			};
			
			for(var i = 0; i < $rootScope.projects[$routeParams.projectId - 1].imgs.length; i++) {
				var img = 'img/' + $rootScope.projects[$routeParams.projectId - 1].imgdir + '/' + 	$rootScope.projects[$routeParams.projectId - 1].imgs[i];
				//console.log('started loading... ' + i);
				$scope.imgsLoading[i] = true;
				//console.log($scope.imgsLoading);
				PreloadImage(img, imgcallback, $scope.imgsLoading, spinners, i);
			}
			
		}, 0);
	});
}]);