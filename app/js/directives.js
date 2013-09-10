'use strict';

/* Directives */


angular.module('myApp.directives', [])
	.directive('ngTarget', function() {
    return	{
			restrict: 'A',
			link: function(scope, elm, attrs) {
				attrs.$observe('ngTarget', function() {
					if(attrs.ngTarget) attrs.$set('target', attrs.ngTarget);
				});
			} 
		}
  });
