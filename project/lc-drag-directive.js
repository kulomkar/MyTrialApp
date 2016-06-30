'use strict';

angular.module('dndWithD3App').directive('draggable', function() {
	return {
		restrict : "A",
		link : function(scope, element, attrs) {
			element[0].addEventListener("dragstart", scope.handleDragStart, false);
			element[0].addEventListener("dragend", scope.handleDragEnd, false);
			element[0].addEventListener("dragenter", scope.handleDragEnter, false);
			element[0].addEventListener("dragleave", scope.handleDragLeave, false);

		}
	}
});
