angular.module('funds').factory('fundService', function ($q, $http) {
    // the initial call to get the fund data
    function getFunds() {
        // return the fund data using an ajax call
        return $http.get('/data/funds.json');
    }

    // will return the chart data according to the request
    // will throw and error if the validation fails
    function getFundChartData(request) {
        var deferred = $q.defer();
        // validate the request has a valid isin code
        if (request.isin === 'GB00BGnotvalid') {
            deferred.reject({message: 'Invalid ISIN'});
        }
        // validate the request contains the "from" property
        if (!request.from) {
            deferred.reject({message: 'Request needs to have a "from" parameter'});
        }
        // validate the request contains the "to" property
        if (!request.to) {
            deferred.reject({message: 'Request needs to have a "to" parameter'});
        }

        // return the chart data using an ajax call
        $http.get('/data/chart.json').success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    return {
        getFunds: getFunds,
        getFundChartData: getFundChartData
    };
});
