angular.module("myApp");

app.directive("nav", [function () {
    return {
        templateUrl: "/components/navbar/navbar.html",
    }
}])
