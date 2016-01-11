angular.module('funds').factory('fundService', function ($q, $http) {

    function getFunds() {
        return $http.get('/data/funds.json');
    }

    function getFundChartData(request) {
        console.log('getFundChartData');
        var deferred = $q.defer();
        if (request.isin === 'GB00BGnotvalid') {
            deferred.reject({message: 'Invalid ISIN'});
        }
        $http.get('/data/chart.json').success(function (data) {
            console.log('data', data);
            deferred.resolve(data);
        });
        return deferred.promise;
    }


    return {
        getFunds: getFunds,
        getFundChartData: getFundChartData
    };
});
