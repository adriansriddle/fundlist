angular.module('funds').controller('ListCtrl', function ($scope, fundService) {
    // Set the threshold for how old a fund is in years before adjusting the display
    var fundAgeThresholdInYears = 4;

    // Used to orchestrate the fund data to set the selected share class
    // and any additional manipulation of the data that is needed
    function orchestrate(funds) {
        angular.forEach(funds, function (fund) {
            // The initial share class needs to be set to the first available share class
            fund.selectedShareClass = fund.shareClasses && fund.shareClasses.length > 0 ? fund.shareClasses[0] : null;

            // Convert the date fields to js date objects
            convertDates(fund);
            angular.forEach(fund.shareClasses, function (shareClass) {
                convertDates(shareClass);
                if (shareClass) {
                    var age = moment.duration(moment().diff(moment(shareClass['Launch Date'])));
                    shareClass.age = age.humanize();
                    shareClass.isOverYearThreshold = age.years() >= fundAgeThresholdInYears;
                }
            });



            // Add a function to each fund to fire when the selected share class changes
            fund.getChartData = function () {
                var current = this;
                getFundChartDataForShareClass(current);
            };

            getFundChartDataForShareClass(fund);
        });
        return funds;
    }

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
                fund.invalidIsinCode = false;
                loadChartConfig(fund, response.chart);
            })
            .catch(function () {
                fund.invalidIsinCode = true;
            });
    }

    // Allows us to convert the string dates returned from the server to js date objects
    function convertDates(obj) {
        var dateFields = ['Report Date From', 'Report Date To', 'Launch Date', 'Net Assets Total Date', 'Last Update', 'Cumulative Return DateTime', 'Total Return DateTime'];
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = obj[key];
                if (dateFields.indexOf(key) > -1 && moment(value).isValid()) {
                    obj[key] = new Date(value);
                }
            }
        }
    }


    // Fetch the funds from the backend to render the page
    fundService.getFunds().success(function (response) {
        // Load the fund data into the scope to be used on the front end
        $scope.funds = orchestrate(response.funds);
    });

    function loadChartConfig(fund, chartData) {
        fund.chartConfig = {

            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be overriden by values specified below.
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
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal Highcharts series options.
            title: {
                text: ''
            },

            //Boolean to control showing loading status on chart (optional)
            //Could be a string if you want to show specific loading text.
            loading: false

        };
        fund.chartConfig.series = chartData;
    }


});
