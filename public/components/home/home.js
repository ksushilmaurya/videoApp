angular.module("myApp");

app.controller("homeController", ["$scope", "MainService", function ($scope, MainService) {

    $scope.home = "Homing Device!";

    $scope.searchFunction = function (input) {
    
        MainService.get(input).then(function (videos) {
                $scope.group = videos.items;
        })
    }

}])
