'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])

//---------------------------------------------
//----- PROJECTS SERVICE -----//
//---------------------------------------------

.service('Projects', function($http) {
	var httpConfig = {
  	cache: true
	}; 
	this.get = function(callback) {
		$http.get('projects.json', httpConfig).then(function(response) {
			callback(response.data);
		});
	}
})

//---------------------------------------------
//----- PROJECT IMAGES SERVICE -----//
//---------------------------------------------

.service('ProjectImages', function($http) {
	var httpConfig = {
  	cache: true
	};
	this.get = function(imgdir, callback) {
		$http.get('php/getProjectImages.php?imgdir=' + imgdir, httpConfig).then(function(response) {
			callback(response.data);
		});
	}
})

//---------------------------------------------
//----- IMAGES SERVICE -----//
//---------------------------------------------

.service('Images', function() {
	return {
		preload : function (imgSrc, callback) {
			var objImagePreloader = new Image();
			objImagePreloader.src = imgSrc;
			if(objImagePreloader.complete) {
				callback();
				objImagePreloader.onload = function() {};
			} else {
				objImagePreloader.onload = function() {
					callback();
					//clear onLoad, IE behaves irratically with animated gifs otherwise
					objImagePreloader.onload = function() {};
				}
			}
		}
	}
});
