angular.module('funds').controller('ListCtrl', function ($scope, fundService) {
    // calls to the service and loads the funds into the scope
    $scope.loadFunds = function () {
        // fetch the funds from the backend to render the page
        fundService.getFunds().success(function (response) {
            // load the fund data into the scope to be used on the front end
            $scope.funds = response.funds;
        });
    };

    $scope.loadFunds();
});
