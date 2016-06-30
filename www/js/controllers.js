


angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {
	 
	  
    $scope.loadPeople = function() {
	    var jsonPeople=[ {"firstName":"ABC", "lastName":"ABC"},
		{"firstName":"EFG", "lastName":"EFG"},
		{"firstName":"HIJ", "lastName":"HIJ"},
		{"firstName":"LMN", "lastName":"LMN"}];
        $scope.people = jsonPeople;
	};
	$scope.loadPeople2 = function() {
		   var jsonPeople=[ {"firstName":"OPQ", "lastName":"OPQ"},
    {"firstName":"RST", "lastName":"RST"},
    {"firstName":"UVW", "lastName":"UVW"},
	{"firstName":"XYZ", "lastName":"XYZ"},
    {"firstName":"ABC", "lastName":"ABC"},
	{"firstName":"LMN", "lastName":"LMN"}];
          $scope.people = jsonPeople;
	  };	
})

.controller('ChatsCtrl',function($scope,$http,$q){
				$scope.inputs=[];
				$scope.loadPeople = function(event) {
				$scope.outputs = {};
					
				var object1=  $http.get('js/link1.json').success(function(response){
						$scope.inputs=response;
				});
				
				};
				$scope.loadPeople2 = function(event) {
						var object2=$http.get('js/text.json').success(function(response){
						$scope.inputs = [].concat($scope.inputs , response)
				});
		}
	
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function($scope,$http,$compile) {

    $scope.draggableObjects = [{name:'one'}, {name:'two'}, {name:'three'}, {name:'no-clone', allowClone:false}];
        $scope.droppedObjects1 = [];
        $scope.droppedObjects2= [];
        $scope.onDropComplete1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index == -1)
            $scope.droppedObjects1.push(data);
        }
        $scope.onDragSuccess1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
        }
        $scope.onDragSuccess2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects2.splice(index, 1);
            }
        }
        $scope.onDropComplete2=function(data,evt){
            var index = $scope.droppedObjects2.indexOf(data);
            if (index == -1) {
                $scope.droppedObjects2.push(data);
            }
        }
        var inArray = function(array, obj) {
            var index = array.indexOf(obj);
        }

	
	
});



