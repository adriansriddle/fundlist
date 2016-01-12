angular.module('funds').controller('FundListItemCtrl', function ($scope, fundService) {
    // Set the threshold for how old a fund is in years before adjusting the display
    var fundAgeThresholdInYears = 4;


    // Set the age of the share class to improve performance on rendering when changing
    // share classes
    $scope.setShareClassAge = function (shareClass) {
        var age = moment.duration(moment().diff(moment(shareClass['Launch Date'])));
        shareClass.age = age.humanize();
        shareClass.isOverYearThreshold = age.years() >= fundAgeThresholdInYears;
    };

    // fetch the chart date for the selected share class
    $scope.getFundChartDataForShareClass = function (fund) {
        var shareClass = fund.selectedShareClass;
        // fetch the parameters for the request
        var fromParam = moment(shareClass['Report Date From']);
        var toParam = moment(shareClass['Report Date To']);
        // create the request
        var request = {
            from: fromParam.isValid() ? fromParam.unix() : 0,
            to: toParam.isValid() ? toParam.unix() : 0,
            isin: shareClass['ISIN Code']
        };

        // clear a previous chart error
        delete fund.chartDataErrorResponse;
        // call to the service with the request
        fundService.getFundChartData(request)
            .then(function (response) {
                // load the chart config with the current data
                $scope.loadChartConfig(fund, response.chart);
            })
            .catch(function (response) {
                // load a chart error because of the invalid response
                fund.chartDataErrorResponse = response;
            });
    };

    // Allows us to convert the string dates returned from the server to js date objects
    $scope.convertDates = function (obj) {
        var dateFields = ['Report Date From', 'Report Date To', 'Launch Date', 'Net Assets Total Date', 'Last Update',
            'Cumulative Return DateTime', 'Total Return DateTime'];

        // loop through the date fields
        angular.forEach(dateFields, function (dateField) {
            // check obj has property, not checking hasOwnProperty as an inherited property should be converted
            if (obj[dateField]) {
                var date = moment(obj[dateField]);
                // convert the date if it is valid
                if (date.isValid()) {
                    obj[dateField] = date.toDate();
                }
            }
        });


    };

    // This generates the table rows from the dynamic fields
    $scope.getTableRowsForFields = function (fields) {
        var tableData = [];
        var row = [];
        // loop through the fields
        angular.forEach(fields, function (field) {
            // add the field to a table row
            // this will be used in a template later
            row.push(field);
            // if the row contains 2 or more fields then we add the row to the table data
            if (row.length >= 2) {
                tableData.push(row);
                row = [];
            }
        });
        // if there is an odd number of fields then we add an extra blank field to
        // make sure the front end renders the row correctly (style expects the table to be generated correctly)
        if (row.length === 1) {
            row.push({isBlank: true});
        }
        // load the last row if not already included
        if (row.length > 0) {
            tableData.push(row);
        }
        return tableData;
    };

    // Generate the chart config from the data returned from the service
    $scope.loadChartConfig = function (fund, chartData) {
        // basic options for the chart
        fund.chartConfig = {
            options: {
                chart: {
                    type: 'line'
                },
                tooltip: {
                    style: {
                        padding: 10,
                        fontWeight: 'bold'
                    }
                }
            },
            title: {
                text: ''
            },
            //Boolean to control showing loading status on chart
            loading: false

        };
        // load the chart data as the series
        fund.chartConfig.series = chartData;
    };

    // Create a variable for the fund to save us from having to call $scope.fund each time
    var fund = $scope.fund;

    // The initial share class needs to be set to the first available share class
    fund.selectedShareClass = fund.shareClasses && fund.shareClasses.length > 0 ? fund.shareClasses[0] : null;

    // Convert the date fields to js date objects, done to improve performance on share class changes
    $scope.convertDates(fund);
    angular.forEach(fund.shareClasses, function (shareClass) {
        $scope.convertDates(shareClass);
        if (shareClass) {
            $scope.setShareClassAge(shareClass);
        }
    });


    // Get the chart data for the initial share class which is selected on the
    // first render
    $scope.getFundChartDataForShareClass(fund);

    // Define the fields which will be display for the fund
    // This was done dynamically to be able to change the order and which fields
    // are displayed with minimal effort going forward
    $scope.fundFields = [
        {key: 'Entity Name'},
        {key: 'ISIN Code'},
        {key: 'Short Name'},
        {key: 'Fund Size Currency Code'},
        {key: 'Organization Id'},
        {key: 'Client Code Additional'},
        {key: 'Organization Code'},
        {key: 'Tech Rules Flag'}
    ];
    // Get the table rows for the fund
    $scope.fundTableRows = $scope.getTableRowsForFields($scope.fundFields);

    // Define the fields which will be display for the selected share class
    // This was done dynamically to be able to change the order and which fields
    // are displayed with minimal effort going forward
    $scope.shareClassFields = [
        {key: 'ISIN Code'},
        {key: 'Bloomberg Code'},
        {key: 'Launch Date', dateFormat: 'MM/dd/yyyy', type: 'date'},
        {key: 'age', displayText: 'Time From Launch'},
        {key: 'Mexican CNBV Code'},
        {key: 'Yield Current', type: 'number'},
        {key: 'Fund Size Currency Code'},
        {key: 'NAV Base', type: 'number'},
        {key: 'Price NAV', type: 'number'},
        {key: 'NAV Movement', type: 'number'},
        {key: 'NAV Movement Percentage', type: 'number'},
        {key: 'Compound Return 1 Year Annual', type: 'number'},
        {key: 'Report Date From', type: 'date'},
        {key: 'Report Date To', type: 'date'},
        {key: 'Cumulative Return 1 Month', type: 'number'},
        {key: 'Cumulative Return 3 Month', type: 'number'},
        {key: 'Cumulative Return 6 Month', type: 'number'},
        {key: 'Cumulative Return 1 Year', type: 'number'},
        {key: 'Cumulative Return 2 Year', type: 'number'}
    ];
    // Get the table rows for the selected share class
    $scope.shareClassTableRows = $scope.getTableRowsForFields($scope.shareClassFields);

    // add a watch for the selected share class, used to fetch the chart data on change
    $scope.$watch('fund.selectedShareClass', function () {
        $scope.getFundChartDataForShareClass($scope.fund);
    });

    // add a watch to the launch date of the selected share class, used to reset the age of the share class
    $scope.$watch('fund.selectedShareClass["Launch Date"]', function () {
        $scope.setShareClassAge($scope.fund.selectedShareClass);
    });
});