angular.module('funds').controller('fundListItemController', function ($scope, fundService) {
    // Set the threshold for how old a fund is in years before adjusting the display
    var fundAgeThresholdInYears = 4;

    $scope.$watch('fund.selectedShareClass', function () {
        getFundChartDataForShareClass($scope.fund);
    });

    $scope.$watch('fund.selectedShareClass["Launch Date"]', function () {
        setShareClassAge($scope.fund.selectedShareClass);
    });


    function getFundChartDataForShareClass(fund) {
        var shareClass = fund.selectedShareClass;
        var fromParam = moment(shareClass['Report Date From']);
        var toParam = moment(shareClass['Report Date To']);
        var request = {
            from: fromParam.isValid() ? fromParam.unix() : 0,
            to: toParam.isValid() ? toParam.unix() : 0,
            isin: shareClass['ISIN Code']
        };
        fundService.getFundChartData(request)
            .then(function (response) {
                fund.chartDataErrorResponse = null;
                loadChartConfig(fund, response.chart);
            })
            .catch(function (response) {
                fund.chartDataErrorResponse = response;
            });
    }

    // Allows us to convert the string dates returned from the server to js date objects
    function convertDates(obj) {
        var dateFields = ['Report Date From', 'Report Date To', 'Launch Date', 'Net Assets Total Date', 'Last Update', 'Cumulative Return DateTime', 'Total Return DateTime'];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = obj[key];

                if (dateFields.indexOf(key) > -1 && moment(value).isValid()) {
                    obj[key] = moment(value).toDate();
                }
            }
        }
    }

    function getTableRowsForFields(fields) {
        var tableData = [];
        var row = [];
        angular.forEach(fields, function (field) {
            row.push(field);
            if (row.length >= 2) {
                tableData.push(row);
                row = [];
            }
        });
        if (row.length === 1) {
            row.push({isBlank: true});
        }
        if (row.length > 0) {
            tableData.push(row);
            row = [];
        }
        return tableData;
    }

    function loadChartConfig(fund, chartData) {
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
        fund.chartConfig.series = chartData;
    }


    var fund = $scope.fund;
    // The initial share class needs to be set to the first available share class
    fund.selectedShareClass = fund.shareClasses && fund.shareClasses.length > 0 ? fund.shareClasses[0] : null;

    // Convert the date fields to js date objects
    convertDates(fund);
    angular.forEach(fund.shareClasses, function (shareClass) {
        convertDates(shareClass);
        if (shareClass) {
            setShareClassAge(shareClass);
        }
    });

    function setShareClassAge(shareClass) {
        var age = moment.duration(moment().diff(moment(shareClass['Launch Date'])));
        shareClass.age = age.humanize();
        shareClass.isOverYearThreshold = age.years() >= fundAgeThresholdInYears;
    }

    // Add a function to each fund to fire when the selected share class changes
    fund.getChartData = function () {
        var current = this;
        getFundChartDataForShareClass(current);
    };

    getFundChartDataForShareClass(fund);


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

    $scope.fundTableRows = getTableRowsForFields($scope.fundFields);
    $scope.shareClassTableRows = getTableRowsForFields($scope.shareClassFields);
});