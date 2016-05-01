var app = angular.module("app",['ngMaterial']);
	app.controller("contactAdminController", ['contactAdminService','$scope',function(contactAdminService,$scope){
		contactAdminService.setuser().then(function(res){
			$scope.data = 	res;
			console.log($scope.data);
		});
		$scope.respond=function(x){
			console.log(x);
		}
		
    }]);