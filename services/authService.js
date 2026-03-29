app.factory("AuthService", function ($http) {

    var baseUrl = "http://localhost:50000/api/Login"; // Correct casing + correct path

    return {
        login: function (credentials) {

            // API expects username, not email
            var body = {
                username: credentials.email,
                password: credentials.password
            };

            return $http.post(baseUrl + "/login", body);
        }
    };
});
