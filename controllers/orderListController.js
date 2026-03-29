app.controller("OrderListController", function ($scope, OrderService) {

    $scope.orders = [];
    $scope.loading = true;

    OrderService.getOrders()
        .then(function (response) {
            console.log("Orders loaded successfully:", response.data);
            $scope.orders = response.data;
        })
        .catch(function (error) {
            console.error("Error loading orders:", error);
        })
        .finally(function () {
            $scope.loading = false;
        });

});
