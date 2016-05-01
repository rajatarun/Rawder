angular.module("app")
.factory('contactService',function($http){
	return{
	setuser:function(user){
		return $http.post('/api/contact',user).then(function(res){
			return res.data;
		})
	}
	}
})