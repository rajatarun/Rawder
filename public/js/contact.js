var app = angular.module("app",['ngMaterial']);
	app.controller("contactController", ['contactService','$scope',function(contactService,$scope){
		
		$scope.submit=function(user){
         	console.log(user);
         	contactService.setuser(user).then(function(res) {
                $scope.data = res;  
                console.log(res);
             });
         	user = {}; 
        };
    }]);
    app.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark')
      .primaryPalette('blue',{
          'default':'50'
      })
     .dark()
     $mdThemingProvider.theme('labels')
      .primaryPalette('blue',{
          'default':'50'
      })
      .backgroundPalette('yellow')
     
     
  });