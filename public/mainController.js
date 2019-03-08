angular.module("myApp");

app.controller("mainController", ["$scope", "$http", "$location", function ($scope, $http, $location) {

    console.log("main controller loaded")
    $scope.user = {};

    $scope.signUp = function() {
    	console.log("signUp clicked - ",$scope.user);

    	if(!$scope.user.username) {
    		alert("username is required");
    		return;
    	}

    	if(!$scope.user.password) {
    		alert("password is required");
    		return;
    	}

    	if($scope.user.password != $scope.user.rePassword) {
    		alert("password should matched");
    		return;
    	}

    	$http({
            method  : "POST",
            url     : "register",
            data    : $scope.user
        }).then(function mySuccess(response) {
            console.log("response is - ",response);
            if(response.data) {
            	console.log("response.data.data - ",response.data)
            	alert(response.data.message);
            	$location.path('/profile');
            } else {
                alert("Something went wrong. Please try again later");
            }
        }, function myError(response) {
            alert("Something went wrong. Please try again later");
        });
    }

}])
