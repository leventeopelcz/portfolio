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

.controller('home_thumbs_ctrl', ['Images', '$scope', '$rootScope', 'Device', '$timeout', function(Images, $scope, $rootScope, Device, $timeout) {
  $scope.imageLoading = true;
  var image = 'img/' + $scope.project.imgdir + '/thumb/' + $scope.project.imgdir + '.jpg';
  Images.Preload(image, function() {
    $timeout(function() {
      $scope.imageLoading = false;
      $scope.stopSpinner(); 
    }, 0);
    if(!$scope.$$phase) {
      $scope.$digest();
    }
  });
  if(!Device.IsMobile() && $scope.$last) {
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

.controller('project_ctrl', ['Projects', 'ProjectImages', '$scope', '$routeParams', '$location', function(Projects, ProjectImages, $scope, $routeParams, $location) {
  $("[data-toggle='tooltip']").tooltip();
  var type = $location.path().split('/').reverse()[1];
  Projects.get(function(response) {
    $scope.projects = response;
    $scope.title 			= $scope.projects[type][$routeParams.projectId - 1].title;
    $scope.at 				= $scope.projects[type][$routeParams.projectId - 1].at;
    $scope.what 			= $scope.projects[type][$routeParams.projectId - 1].what;
    $scope.client 		    = $scope.projects[type][$routeParams.projectId - 1].client;
    $scope.info 			= $scope.projects[type][$routeParams.projectId - 1].info;
    $scope.imgdir			= $scope.projects[type][$routeParams.projectId - 1].imgdir;
    $scope.imgs				= $scope.projects[type][$routeParams.projectId - 1].imgs;
    $scope.dropdowns 	    = $scope.projects[type][$routeParams.projectId - 1].dropdowns;
    $scope.links 			= $scope.projects[type][$routeParams.projectId - 1].links;
    $scope.video            = $scope.projects[type][$routeParams.projectId - 1].video;
    $scope.imgonly          = $scope.projects[type][$routeParams.projectId - 1].imgonly;
    $scope.imgs = $scope.projects[type][$routeParams.projectId - 1].imgs;
    $scope.getNumber = function(num) {
        return new Array(num);   
    }

    console.log($scope.imgs);
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
//----- PROJECT IMAGES CONTROLLER -----//
//---------------------------------------------

.controller('project_images_ctrl', ['Images', 'ProjectImages', '$scope', '$routeParams', '$location', function(Images, ProjectImages, $scope, $routeParams, $location) {
  var type = $location.path().split('/').reverse()[1];
  ProjectImages.get($scope.projects[type][$routeParams.projectId - 1].imgdir, function(response) {
    $scope.projectImages = response;
    //$scope.imageLoading = true;
    var image = 'img/' + $scope.projects[type][$routeParams.projectId - 1].imgdir + '/' + $scope.projectImages[$scope.$index];
      /*
    Images.Preload(image, function() {
      $scope.stopSpinner();
      $scope.imageLoading = false;
      if(!$scope.$$phase) {
        $scope.$digest();
      }
    });
    */
  });
}]);
