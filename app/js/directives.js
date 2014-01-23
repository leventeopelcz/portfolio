'use strict';

/* Directives */


angular.module('myApp.directives', [])

//---------------------------------------------
//----- DROPDOWN -----//
//---------------------------------------------

.directive('randomquote', function(Random) {
	return	{
		restrict: 'A',
		link: function(scope, element, attrs) {
			// better to read quotes from json, put it in ng repeat and we can use $index, would be much nicer
			scope.quoteId = Random.Range(0, 2);
		} 
	}
})

//---------------------------------------------
//----- DROPDOWN -----//
//---------------------------------------------

.directive('dropdown', function() {
	return	{
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.on('show.bs.dropdown', function () {
				element.find('.dropdown-menu').slideToggle(100);
			});
			element.on('hide.bs.dropdown', function () {
				element.find('.dropdown-menu').slideToggle(100);
			});
		} 
	}
})


//---------------------------------------------
//----- NGTARGET -----//
//---------------------------------------------

.directive('ngTarget', function() {
	return	{
		restrict: 'A',
		link: function(scope, element, attrs) {
			attrs.$observe('ngTarget', function() {
				if(attrs.ngTarget) attrs.$set('target', attrs.ngTarget);
			});
		} 
	}
})

//---------------------------------------------
//----- SPINNER -----//
//---------------------------------------------

.directive('spinner', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			
			// initialise spinner parameters
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
				
			// start the spinner on current element
			var spinner = new Spinner(opts).spin(element[0]);
			
			// stop the pinner (from controller)
			scope.stopSpinner = function() {
				spinner.stop();
				element.addClass('scaleUp');
				element.find('img').addClass('fadeIn');
			};
		}
	}
})

//---------------------------------------------
//----- SKROLLR -----//
//---------------------------------------------

.directive('skrollr', function(Device) {
	return	{
		restrict: 'A',
		link: function(scope, element, attrs) {
			if(!Device.IsMobile()) {
				if(typeof scope.skrollr === 'undefined') {
					scope.skrollr = skrollr.init({
						forceHeight: false
					});
				} else {
					scope.skrollr.refresh();
				}
			}
		} 
	}
});

