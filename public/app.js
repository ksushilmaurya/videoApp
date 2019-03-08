var app = angular.module("myApp",["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "homeController"
        })
        .when("/profile",{
            templateUrl: "/components/profile/profile.html",
            controller: "favoritesController"
    })
        .otherwise({
            redirectTo: "/"
        });

}])