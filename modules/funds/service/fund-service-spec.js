/* global afterEach */
describe('fundService', function () {
    var chartDataUrl = '/data/chart.json';
    var fundDataUrl = '/data/funds.json';

    var chartData = {
        chart: ['1']
    };

    var fundData = {
        funds: [
            {
                name: 'Test Fund'
            }
        ]
    };

    beforeEach(module('funds'));

    var fundService, $httpBackend;

    beforeEach(function () {
        inject(function (_fundService_, _$httpBackend_) {
            fundService = _fundService_;
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', fundDataUrl).respond(fundData);
            $httpBackend.when('GET', chartDataUrl).respond(chartData);
        });
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    describe('getFunds', function () {
        it('should fetch fund data', function () {
            var validation = {};
            $httpBackend.expectGET(fundDataUrl);
            fundService.getFunds()
                .success(function (response) {
                    validation.isValid = response && response.funds && response.funds.length === 1 && response.funds[0]['name'] === 'Test Fund';
                })
                .error(function () {
                    validation.isValid = false;
                });
            $httpBackend.flush();
            expect(validation.isValid).toBeTruthy();
        });
    });
    describe('getFundChartData', function () {
        it('should return chart data for valid request', function () {
            var validation = {};
            $httpBackend.expectGET(chartDataUrl);
            var request = {
                from: moment().unix(),
                to: moment().unix(),
                isin: 'GB00BGSHGD95'
            };
            fundService.getFundChartData(request)
                .then(function (response) {
                    validation.isValid = response && response.chart && response.chart.length === 1;
                })
                .catch(function () {
                    validation.isValid = false;
                });
            $httpBackend.flush();
            expect(validation.isValid).toBeTruthy();
        });
        it('should throw an error for invalid request: bad isin code', function () {
            var validation = {};
            $httpBackend.expectGET(chartDataUrl);
            var request = {
                from: moment().unix(),
                to: moment().unix(),
                isin: 'GB00BGnotvalid'
            };
            fundService.getFundChartData(request)
                .then(function (response) {
                    validation.isValid = !(response && response.chart && response.chart.length === 1);
                })
                .catch(function (response) {
                    validation.isValid = response && response.message === 'Invalid ISIN';
                });
            $httpBackend.flush();
            expect(validation.isValid).toBeTruthy();
        });
        it('should throw an error for invalid request: no "from" field passed', function () {
            var validation = {};
            $httpBackend.expectGET(chartDataUrl);
            var request = {
                to: moment().unix(),
                isin: 'GB00BGSHGD95'
            };
            fundService.getFundChartData(request)
                .then(function (response) {
                    validation.isValid = !(response && response.chart && response.chart.length === 1);
                })
                .catch(function (response) {
                    validation.isValid = response && response.message === 'Request needs to have a "from" parameter';
                });
            $httpBackend.flush();
            expect(validation.isValid).toBeTruthy();
        });
        it('should throw an error for invalid request: no "to" field passed', function () {
            var validation = {};
            $httpBackend.expectGET(chartDataUrl);
            var request = {
                from: moment().unix(),
                isin: 'GB00BGSHGD95'
            };
            fundService.getFundChartData(request)
                .then(function (response) {
                    validation.isValid = !(response && response.chart && response.chart.length === 1);
                })
                .catch(function (response) {
                    validation.isValid = response && response.message === 'Request needs to have a "to" parameter';
                });
            $httpBackend.flush();
            expect(validation.isValid).toBeTruthy();
        });
    });
});