angular.module('funds').controller('ListCtrl', function ($scope, fundService) {


    // Used to orchestrate the fund data to set the selected share class
    // and any additional manipulation of the data that is needed
    function orchestrate(funds) {
        angular.forEach(funds, function (fund) {

        });
        return funds;
    }




    // Fetch the funds from the backend to render the page
    fundService.getFunds().success(function (response) {
        // Load the fund data into the scope to be used on the front end
        $scope.funds = orchestrate(response.funds);
    });




});
