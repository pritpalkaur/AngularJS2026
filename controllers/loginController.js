app.controller("LoginController", function ($scope, AuthService) {

    $scope.credentials = { email: "", password: "" };
    $scope.errorMessage = "";

    $scope.login = function () {

        $scope.errorMessage = ""; // reset

        AuthService.login($scope.credentials)
            .then(function (response) {
                localStorage.setItem("token", response.data.token);
                alert("Login successful");
                //window.location = "#!/order-list";
                window.location = "#!/orders";

            })
            .catch(function (error) {

                if (!error || !error.status) {
                    $scope.errorMessage = "Unable to reach server. Please check your API connection.";
                    return;
                }

                switch (error.status) {
                    case 400:
                        $scope.errorMessage = error.data?.message || "Invalid request. Please check your input.";
                        break;

                    case 401:
                        $scope.errorMessage = error.data?.message || "Incorrect email or password.";
                        break;

                    case 403:
                        $scope.errorMessage = "You are not allowed to access this resource.";
                        break;

                    case 404:
                        $scope.errorMessage = "User not found.";
                        break;

                    case 500:
                        $scope.errorMessage = "Server error. Please try again later.";
                        break;

                    default:
                        $scope.errorMessage = "Login failed. Error code: " + error.status;
                }
            });
    };
});
