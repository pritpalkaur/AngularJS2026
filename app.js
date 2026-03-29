var app = angular.module("orderApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/login", {
            templateUrl: "views/login.html",
            controller: "LoginController"
        })
        .when("/orders", {
            templateUrl: "views/order-list.html",
            controller: "OrderListController",
            requiresAuth: true
        })
        .otherwise({
            redirectTo: "/orders"
        });
});

app.config(function ($httpProvider) {

    $httpProvider.interceptors.push(function () {
        return {
            request: function (config) {
                var token = localStorage.getItem("token");
                if (token) {
                    config.headers.Authorization = "Bearer " + token;
                }
                return config;
            }
        };
    });
});
app.run(function ($rootScope) {
    
        $rootScope.logout = function () {
        localStorage.removeItem("token");
        window.location = "#!/login";
    };

    $rootScope.$on("$routeChangeStart", function (event, next) {
        var token = localStorage.getItem("token");

        if (!token && next.requiresAuth) {
            event.preventDefault();
            window.location = "#!/login";
        }
    });
});
