



angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {
	 //$scope.people = [];
	  
    $scope.loadPeople = function() {
		//$scope.people={};
		    var jsonPeople=[ {"firstName":"ABC", "lastName":"ABC"},
    {"firstName":"EFG", "lastName":"EFG"},
    {"firstName":"HIJ", "lastName":"HIJ"},
	 {"firstName":"LMN", "lastName":"LMN"}];
       
           $scope.people = jsonPeople;
	 
	 
    };
	$scope.loadPeople2 = function() {
		//$scope.people ={};
		    var jsonPeoplee=[ {"firstName":"OPQ", "lastName":"OPQ"},
    {"firstName":"RST", "lastName":"RST"},
    {"firstName":"UVW", "lastName":"UVW"},
	{"firstName":"XYZ", "lastName":"XYZ"},
    {"firstName":"ABC", "lastName":"ABC"},
	{"firstName":"LMN", "lastName":"LMN"}];
       
           $scope.people = jsonPeoplee;
	 
	 
     

    };

})

.controller('ChatsCtrl',function($scope,$http){
  
  $scope.loadPeople = function(event) {
	 
		 $scope.outputs = [];
			 $scope.inputs = [];
		 if(event.target.id==1)
		 {
		var object=  $http.get('js/link1.json').success(function(response){
			$scope.inputs = response;
			 });
		 }
	 else{
	var object=$http.get('js/text.json').success(function(response){
		$scope.inputs = response;
	 	});
	 }
    };
	
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('AccountCtrl', function($scope) {
 $scope.people = [];
	 
    $scope.loadPeople = function() {
		  $http.get('js/data.json').success(function(data){
			  console.log(data);
			   $scope.stdFormData = data.form.data;
			   console.log(data.form.data);
                $scope.stdFormTemplate = data.form.template;
 console.log(data.form.template);
                var element = angular.element(document.getElementById("my-form"));
                element.html('<dynamic-form class="col-md-12" template="stdFormTemplate" ng-model="stdFormData"></dynamic-form>');
				
                $compile(element.contents())($scope);  
		  });

    };
	$scope.loadPeople2 = function() {
		$scope.people ={};
		   
        $http.get('js/data1.json').success(function(data){
			  console.log(data);
			   $scope.stdFormData = data.form.data;
			   console.log(data.form.data);
                $scope.stdFormTemplate = data.form.template;
 console.log(data.form.template);
                var element = angular.element(document.getElementById("my-form"));
                element.html('<dynamic-form class="col-md-12" template="stdFormTemplate" ng-model="stdFormData"></dynamic-form>');
				
                $compile(element.contents())($scope);  
		  });
	  };
});
