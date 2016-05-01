var app = angular.module("app",[]);
	app.controller("contactController", ['contactService','$scope',function(contactService,$scope){
		
		$scope.submit=function(user){
         	console.log(user);
         	contactService.setuser(user).then(function(res) {
                $scope.data = res;  
                console.log(res);
             });
         	 
        };
    }]);