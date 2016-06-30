'use strict';

angular.module('dndWithD3App').directive('droppable', function() {
	return {
		restrict : "A",
		link : function(scope, element, attrs) {
			element[0].addEventListener("drop", scope.handleDrop, false);
			element[0].addEventListener("dragover", scope.handleDragOver, false);

		}
	}
});
