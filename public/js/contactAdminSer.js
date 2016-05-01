
angular.module("app")
.factory('contactAdminService',function($http){
	return{
	setuser:function(){
		return $http.get('/api/contactAdmin').then(function(res){
			console.log(res.data);
			return res.data;
		})
	}
	}
})