app.controller("MainController", function ($scope) {

    $scope.tokenExists = function () {
        return !!localStorage.getItem("token");
    };

    $scope.logout = function () {
        localStorage.removeItem("token");
        window.location = "#!/login";
    };

});
