app.factory("OrderService", function ($http) {

    var baseUrl = "http://localhost:50000/api/Orders";

    return {
        getOrders: function () {
            return $http.get(baseUrl);
        },

        getOrderById: function (id) {
            return $http.get(baseUrl + "/" + id);
        },

        createOrder: function (order) {
            return $http.post(baseUrl, order);
        }
    };
});
