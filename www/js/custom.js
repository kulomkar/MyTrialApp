angular.module('myApp',['ngDragDrop'])
.controller('DragDropController',['$scope',function($scope){
	
	$scope.list1=[
	{
		'title':'acid',
		'drag':'true'
	},
	{
		'title':'Base',
		'drag':'true'
	},
	{
		'title':'Mercury',
		'drag':'true'
	},
	{
		'title':'Earth',
		'drag':'true'
	}
		
	];
	$scope.list1=[];
	$scope.startCallback=function(event,ui,title){
		console.log('You started dragging'+title.title);
		$scope.draggedTitle=title.title;
	};
	
	
	
}]);