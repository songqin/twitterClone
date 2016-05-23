var app = angular.module("twitterCloneApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/', {
      templateUrl: 'main.html',
      controller: 'mainController'
    })
    //the login display
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'authController'
    })
    //the signup display
    .when('/register', {
      templateUrl: 'register.html',
      controller: 'authController'
    });
});
app.controller("mainController", function($scope){
	$scope.posts = [];
	$scope.newPost = {createdBy:"",text:"",createdAt:""};

	$scope.post = function(){
		$scope.newPost.createdAt = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {createdBy:"",text:"",createdAt:""};
	};

});
app.controller("authController", function($scope){
	$scope.user = {username:"",password:""};
	$scope.errorMessage="";
	$scope.login=function(){
		$scope.errorMessage = "login request for" +  $scope.user.username;
	};
	$scope.register = function(){
		$scope.errorMessage = "register request for " + $scope.user.password;
	};
})
