/* global afterEach */
describe('fundListItem', function () {
    var chartData = {chart: ['1']};
    var chartDataUrl = '/data/chart.json';

    function loadFund() {
        scope.fund = {
            "entityId": "0",
            "name": "JPM America Equity Fund",
            "Client Code Additional": "295030",
            "Entity Name": "JPM America Equity Fund",
            "Fund Size Currency Code": "GBP",
            "Short Name": "JPM America Equity Fund",
            "Number Share Classes": 6,
            "Fund Currency Code": [
                "GBP",
                "GBP"
            ],
            "Report Date From": "2013-12-29 00:00:00.0",
            "Report Date To": "9999-12-31 00:00:00.0",
            "Organization Code": "78D5749D6ABE0E6AE04400144FB99A4A",
            "Primary Language Id": "English",
            "Fund Type Id": [
                "Open-Ended Investment Company (OEIC) Fund",
                "Open-Ended Investment Company (OEIC) Fund"
            ],
            "Domicile Id": "United Kingdom",
            "Price Currency Id": "Pound Sterling",
            "Primary Country Id": "Not applicable",
            "Asset Class Taxonomy Id": "Equity",
            "NAV Base": 22398160.95,
            "Fund Manager Code": [
                "78D57511C1F90EB5E04400144FB99A4A",
                "78D57511C2000EB5E04400144FB99A4A"
            ],
            "Classification Taxonomy Id": "Equity Fund",
            "Transfer Agent Taxonomy Id": "JP Morgan Asset Management Marketing Limited",
            "Fiscal Year End Taxonomy Id": "30 November",
            "Web Display Status Taxonomy Id": "Display all fund facts",
            "Scope Taxonomy Id": "Out of scope",
            "Fund Type Taxonomy Id": "OEICs",
            "Region Taxonomy Id": "America",
            "Tech Rules Flag": "Yes",
            "UCITS Classification Taxonomy Id": "Market Fund",
            "IMA Sector Taxonomy Id": "North America",
            "AMC Charged to Capital Taxonomy Id": "No",
            "Swing Pricing Taxonomy Id": "Yes",
            "Legal Structure Taxonomy Id": "OEIC",
            "Data Universe Taxonomy Id": "EMEA",
            "Fund Status Taxonomy Id": "Open",
            "Fund Closure Status Taxonomy Id": "Open",
            "Segment Name": [
                "ALL_DATA",
                "FUND_EMEA",
                "RETR_EMEA"
            ],
            "Use of Derivatives Taxonomy Id": "No",
            "ISIN Code": "GB00BGSHG957",
            "ClientIdentifier": "7235",
            "Organization Id": "JPMorgan Fund II ICVC",
            "shareClassesCount": 5,
            "shareClasses": [
                {
                    "Bloomberg Code": "JPMAECA LN",
                    "FundClassId": "10",
                    "Mexican CNBV Code": "C5AABN",
                    "ISIN Code": "GB00BGSHGD95",
                    "Sedol Code": "BGSHGD9",
                    "LipperId": "LP68242412",
                    "ClientIdentifier": "11644",
                    "Yield Current": 0.1,
                    "Entity Name": "JPM America Equity Fund C - Net Accumulation",
                    "Fund Size Currency Code": "GBP",
                    "Launch Date": "2014-01-31 00:00:00.0",
                    "Investment Minimum Irregular": 100000,
                    "Investment Minimum Regular": 5000000,
                    "Short Name": "JPM C - Net Acc",
                    "Net Assets Total Date": "2015-06-26 00:00:00.0",
                    "URL": "http://jp.techrules.com/JP/JP.mvc/Overview?fundid=7235&ShareClassId=11644&country=GB&lang=EN&PARAMMIFID=Yes",
                    "Fund Parent Name": "JPM America Equity Fund",
                    "Number Share Classes": 1,
                    "Fund Currency Code": "GBP",
                    "Report Date From": "2013-12-29 00:00:00.0",
                    "Report Date To": "9999-12-31 00:00:00.0",
                    "Fund Share Class Name": "JPM America Equity Fund - JPM C - Net Acc - JPM America Equity Fund C - Net Accumulation - GB00BGSHGD95",
                    "Compound Return 1 Year Annual": 19.7279,
                    "Compound Return Launch To Date Annual": 17.0015,
                    "Price NAV": 119.9,
                    "Primary Language Id": "English",
                    "Fund Type Id": [
                        "Open-Ended Investment Company (OEIC) Fund",
                        "Open-Ended Investment Company (OEIC) Fund",
                        "Open-Ended Investment Company (OEIC) Fund"
                    ],
                    "Domicile Id": "United Kingdom",
                    "Price Currency Id": "Pound Sterling",
                    "Primary Country Id": "Not applicable",
                    "Last Update": "2014-03-17 09:17:19.0",
                    "Asset Class Taxonomy Id": "Equity",
                    "Registered Country Id": [
                        "United Kingdom",
                        "Jersey"
                    ],
                    "Registered Country Code": [
                        "GBR",
                        "JEY"
                    ],
                    "Fee Fixed": 0,
                    "NAV Base": 1630388.27,
                    "Cumulative Return 1 Month": 1.3992,
                    "Cumulative Return 1 Year": 19.7279,
                    "Cumulative Return Launch to Date": 23.2,
                    "Cumulative Return 3 Month": 0.9009,
                    "Cumulative Return 6 Month": 6.6667,
                    "Fund Type Taxonomy Id": "OEICs",
                    "Region Taxonomy Id": "America",
                    "Shareclass Status Taxonomy Id": "Active",
                    "Shareclass Closure Status Taxonomy Id": "Open",
                    "Shareclass Category Taxonomy Id": "C",
                    "Shareclass Distribution Taxonomy Id": "ACC",
                    "Data Universe Taxonomy Id": "EMEA",
                    "Segment Name": [
                        "ALL_DATA",
                        "FUND_EMEA",
                        "RETR_EMEA"
                    ],
                    "Morningstar - SRRI Risk Rating": "6",
                    "Morningstar - SRRI Track Risk Rating": "5",
                    "NAV Movement": -0.8,
                    "NAV Movement Percentage": -0.66,
                    "Cumulative Return DateTime": "2015-05-31 00:00:00.0",
                    "Total Return DateTime": "2015-05-31 00:00:00.0"
                },
                {
                    "Bloomberg Code": "JPMAEAI LN",
                    "FundClassId": "01",
                    "Mexican CNBV Code": "C5AABJ",
                    "ISIN Code": "GB00BGnotvalid",
                    "Sedol Code": "BGSHG84",
                    "LipperId": "LP68242410",
                    "ClientIdentifier": "11647",
                    "Yield Current": 0,
                    "Entity Name": "JPM America Equity Fund A - Net Income",
                    "Fund Size Currency Code": "GBP",
                    "Launch Date": "2014-01-31 00:00:00.0",
                    "Investment Minimum Irregular": 100,
                    "Investment Minimum Regular": 1000,
                    "Short Name": "JPM A - Net Inc",
                    "Net Assets Total Date": "2015-06-26 00:00:00.0",
                    "URL": "http://jp.techrules.com/JP/JP.mvc/Overview?fundid=7235&ShareClassId=11647&country=GB&lang=EN&PARAMMIFID=Yes",
                    "Fund Parent Name": "JPM America Equity Fund",
                    "Number Share Classes": 1,
                    "Fund Currency Code": "GBP",
                    "Report Date From": "2013-12-29 00:00:00.0",
                    "Report Date To": "9999-12-31 00:00:00.0",
                    "Fund Share Class Name": "JPM America Equity Fund - JPM A - Net Inc - JPM America Equity Fund A - Net Income - GB00BGSHG841",
                    "Compound Return 1 Year Annual": 18.7963,
                    "Compound Return Launch To Date Annual": 16.1285,
                    "Price NAV": 59.34,
                    "Primary Language Id": "English",
                    "Fund Type Id": [
                        "Open-Ended Investment Company (OEIC) Fund",
                        "Open-Ended Investment Company (OEIC) Fund",
                        "Open-Ended Investment Company (OEIC) Fund"
                    ],
                    "Domicile Id": "United Kingdom",
                    "Price Currency Id": "Pound Sterling",
                    "Primary Country Id": "Not applicable",
                    "Last Update": "2014-03-17 09:17:19.0",
                    "Asset Class Taxonomy Id": "Equity",
                    "Registered Country Id": [
                        "United Kingdom",
                        "Jersey"
                    ],
                    "Registered Country Code": [
                        "GBR",
                        "JEY"
                    ],
                    "Fee Fixed": 0,
                    "NAV Base": 780223.09,
                    "Cumulative Return 1 Month": 1.346,
                    "Cumulative Return 1 Year": 18.7963,
                    "Cumulative Return Launch to Date": 21.98,
                    "Cumulative Return 3 Month": 0.71,
                    "Cumulative Return 6 Month": 6.2729,
                    "Fund Type Taxonomy Id": "OEICs",
                    "Region Taxonomy Id": "America",
                    "Shareclass Status Taxonomy Id": "Active",
                    "Shareclass Closure Status Taxonomy Id": "Open",
                    "Shareclass Category Taxonomy Id": "A",
                    "Shareclass Distribution Taxonomy Id": "INC",
                    "Data Universe Taxonomy Id": "EMEA",
                    "Segment Name": [
                        "ALL_DATA",
                        "FUND_EMEA",
                        "RETR_EMEA"
                    ],
                    "Morningstar - SRRI Risk Rating": "6",
                    "Morningstar - SRRI Track Risk Rating": "5",
                    "NAV Movement": -0.39,
                    "NAV Movement Percentage": -0.65,
                    "Cumulative Return DateTime": "2015-05-31 00:00:00.0",
                    "Total Return DateTime": "2015-05-31 00:00:00.0"
                },
                {
                    "Bloomberg Code": "JPMAECI LN",
                    "FundClassId": "09",
                    "Mexican CNBV Code": "C5AABP",
                    "ISIN Code": "GB00BGSHGC88",
                    "Sedol Code": "BGSHGC8",
                    "LipperId": "LP68242413",
                    "ClientIdentifier": "11643",
                    "Yield Current": 0.1,
                    "Entity Name": "JPM America Equity Fund C - Net Income",
                    "Fund Size Currency Code": "GBP",
                    "Launch Date": "2014-01-31 00:00:00.0",
                    "Investment Minimum Irregular": 100000,
                    "Investment Minimum Regular": 5000000,
                    "Short Name": "JPM C - Net Inc",
                    "Net Assets Total Date": "2015-06-26 00:00:00.0",
                    "URL": "http://jp.techrules.com/JP/JP.mvc/Overview?fundid=7235&ShareClassId=11643&country=GB&lang=EN&PARAMMIFID=Yes",
                    "Fund Parent Name": "JPM America Equity Fund",
                    "Number Share Classes": 1,
                    "Fund Currency Code": "GBP",
                    "Report Date From": "2013-12-29 00:00:00.0",
                    "Report Date To": "9999-12-31 00:00:00.0",
                    "Fund Share Class Name": "JPM America Equity Fund - JPM C - Net Inc - JPM America Equity Fund C - Net Income - GB00BGSHGC88",
                    "Compound Return 1 Year Annual": 19.6477,
                    "Compound Return Launch To Date Annual": 16.9425,
                    "Price NAV": 119.8,
                    "Primary Language Id": "English",
                    "Fund Type Id": [
                        "Open-Ended Investment Company (OEIC) Fund",
                        "Open-Ended Investment Company (OEIC) Fund",
                        "Open-Ended Investment Company (OEIC) Fund"
                    ],
                    "Domicile Id": "United Kingdom",
                    "Price Currency Id": "Pound Sterling",
                    "Primary Country Id": "Not applicable",
                    "Last Update": "2014-03-17 09:17:19.0",
                    "Asset Class Taxonomy Id": "Equity",
                    "Registered Country Id": [
                        "Jersey",
                        "United Kingdom"
                    ],
                    "Registered Country Code": [
                        "JEY",
                        "GBR"
                    ],
                    "Fee Fixed": 0,
                    "NAV Base": 17851448.39,
                    "Cumulative Return 1 Month": 1.4015,
                    "Cumulative Return 1 Year": 19.6477,
                    "Cumulative Return Launch to Date": 23.1174,
                    "Cumulative Return 3 Month": 0.9024,
                    "Cumulative Return 6 Month": 6.6876,
                    "Fund Type Taxonomy Id": "OEICs",
                    "Region Taxonomy Id": "America",
                    "Shareclass Status Taxonomy Id": "Active",
                    "Shareclass Closure Status Taxonomy Id": "Open",
                    "Shareclass Category Taxonomy Id": "C",
                    "Shareclass Distribution Taxonomy Id": "INC",
                    "Data Universe Taxonomy Id": "EMEA",
                    "Segment Name": [
                        "ALL_DATA",
                        "FUND_EMEA",
                        "RETR_EMEA"
                    ],
                    "Morningstar - SRRI Risk Rating": "6",
                    "Morningstar - SRRI Track Risk Rating": "5",
                    "NAV Movement": -0.8,
                    "NAV Movement Percentage": -0.66,
                    "Cumulative Return DateTime": "2015-05-31 00:00:00.0",
                    "Total Return DateTime": "2015-05-31 00:00:00.0"
                },
                {
                    "Bloomberg Code": "JPMAEBA LN",
                    "FundClassId": "12",
                    "Mexican CNBV Code": "C5AABL",
                    "ISIN Code": "GB00BGSHGB71",
                    "Sedol Code": "BGSHGB7",
                    "LipperId": "LP68242411",
                    "ClientIdentifier": "11645",
                    "Yield Current": 0,
                    "Entity Name": "JPM America Equity Fund B - Net Accumulation",
                    "Fund Size Currency Code": "GBP",
                    "Launch Date": "2014-01-31 00:00:00.0",
                    "Investment Minimum Irregular": 100000,
                    "Investment Minimum Regular": 1000000,
                    "Short Name": "JPM B - Net Acc",
                    "Net Assets Total Date": "2015-06-26 00:00:00.0",
                    "URL": "http://jp.techrules.com/JP/JP.mvc/Overview?fundid=7235&ShareClassId=11645&country=GB&lang=EN&PARAMMIFID=Yes",
                    "Fund Parent Name": "JPM America Equity Fund",
                    "Number Share Classes": 1,
                    "Fund Currency Code": "GBP",
                    "Report Date From": "2013-12-29 00:00:00.0",
                    "Report Date To": "9999-12-31 00:00:00.0",
                    "Fund Share Class Name": "JPM America Equity Fund - JPM B - Net Acc - JPM America Equity Fund B - Net Accumulation - GB00BGSHGB71",
                    "Compound Return 1 Year Annual": 19.4553,
                    "Compound Return Launch To Date Annual": 16.7155,
                    "Price NAV": 119.5,
                    "Primary Language Id": "English",
                    "Fund Type Id": [
                        "Open-Ended Investment Company (OEIC) Fund",
                        "Open-Ended Investment Company (OEIC) Fund",
                        "Open-Ended Investment Company (OEIC) Fund"
                    ],
                    "Domicile Id": "United Kingdom",
                    "Price Currency Id": "Pound Sterling",
                    "Primary Country Id": "Not applicable",
                    "Last Update": "2014-03-17 09:17:19.0",
                    "Asset Class Taxonomy Id": "Equity",
                    "Registered Country Id": [
                        "United Kingdom",
                        "Jersey"
                    ],
                    "Registered Country Code": [
                        "GBR",
                        "JEY"
                    ],
                    "Fee Fixed": 0,
                    "NAV Base": 729933.53,
                    "Cumulative Return 1 Month": 1.4038,
                    "Cumulative Return 1 Year": 19.4553,
                    "Cumulative Return Launch to Date": 22.8,
                    "Cumulative Return 3 Month": 0.821,
                    "Cumulative Return 6 Month": 6.5972,
                    "Fund Type Taxonomy Id": "OEICs",
                    "Region Taxonomy Id": "America",
                    "Shareclass Status Taxonomy Id": "Active",
                    "Shareclass Closure Status Taxonomy Id": "Open",
                    "Shareclass Category Taxonomy Id": "B",
                    "Shareclass Distribution Taxonomy Id": "ACC",
                    "Data Universe Taxonomy Id": "EMEA",
                    "Segment Name": [
                        "ALL_DATA",
                        "FUND_EMEA",
                        "RETR_EMEA"
                    ],
                    "Morningstar - SRRI Risk Rating": "6",
                    "Morningstar - SRRI Track Risk Rating": "5",
                    "NAV Movement": -0.8,
                    "NAV Movement Percentage": -0.67,
                    "Cumulative Return DateTime": "2015-05-31 00:00:00.0",
                    "Total Return DateTime": "2015-05-31 00:00:00.0"
                },
                {
                    "Bloomberg Code": "JPMAEAC LN",
                    "FundClassId": "02",
                    "Mexican CNBV Code": "C5AABH",
                    "ISIN Code": "GB00BGSHG957",
                    "Sedol Code": "BGSHG95",
                    "LipperId": "LP68242409",
                    "ClientIdentifier": "11646",
                    "Yield Current": 0,
                    "Entity Name": "JPM America Equity Fund A - Net Accumulation",
                    "Fund Size Currency Code": "GBP",
                    "Launch Date": "2014-01-31 00:00:00.0",
                    "Investment Minimum Irregular": 100,
                    "Investment Minimum Regular": 1000,
                    "Short Name": "JPM A - Net Acc",
                    "Net Assets Total Date": "2015-06-26 00:00:00.0",
                    "URL": "http://jp.techrules.com/JP/JP.mvc/Overview?fundid=7235&ShareClassId=11646&country=GB&lang=EN&PARAMMIFID=Yes",
                    "Fund Parent Name": "JPM America Equity Fund",
                    "Number Share Classes": 1,
                    "Fund Currency Code": "GBP",
                    "Report Date From": "2013-12-29 00:00:00.0",
                    "Report Date To": "9999-12-31 00:00:00.0",
                    "Fund Share Class Name": "JPM America Equity Fund - JPM A - Net Acc - JPM America Equity Fund A - Net Accumulation - GB00BGSHG957",
                    "Compound Return 1 Year Annual": 18.7963,
                    "Compound Return Launch To Date Annual": 16.1285,
                    "Price NAV": 59.34,
                    "Primary Language Id": "English",
                    "Fund Type Id": [
                        "Open-Ended Investment Company (OEIC) Fund",
                        "Open-Ended Investment Company (OEIC) Fund",
                        "Open-Ended Investment Company (OEIC) Fund"
                    ],
                    "Domicile Id": "United Kingdom",
                    "Price Currency Id": "Pound Sterling",
                    "Primary Country Id": "Not applicable",
                    "Last Update": "2014-03-17 09:17:19.0",
                    "Asset Class Taxonomy Id": "Equity",
                    "Registered Country Id": [
                        "United Kingdom",
                        "Jersey"
                    ],
                    "Registered Country Code": [
                        "GBR",
                        "JEY"
                    ],
                    "Fee Fixed": 0,
                    "NAV Base": 1406167.67,
                    "Cumulative Return 1 Month": 1.346,
                    "Cumulative Return 1 Year": 18.7963,
                    "Cumulative Return Launch to Date": 21.98,
                    "Cumulative Return 3 Month": 0.71,
                    "Cumulative Return 6 Month": 6.2729,
                    "Fund Type Taxonomy Id": "OEICs",
                    "Region Taxonomy Id": "America",
                    "Shareclass Status Taxonomy Id": "Active",
                    "Shareclass Closure Status Taxonomy Id": "Open",
                    "Shareclass Category Taxonomy Id": "A",
                    "Shareclass Distribution Taxonomy Id": "ACC",
                    "Data Universe Taxonomy Id": "EMEA",
                    "Segment Name": [
                        "ALL_DATA",
                        "FUND_EMEA",
                        "RETR_EMEA"
                    ],
                    "Morningstar - SRRI Risk Rating": "6",
                    "Morningstar - SRRI Track Risk Rating": "5",
                    "NAV Movement": -0.39,
                    "NAV Movement Percentage": -0.65,
                    "Cumulative Return DateTime": "2015-05-31 00:00:00.0",
                    "Total Return DateTime": "2015-05-31 00:00:00.0"
                }
            ]
        };
    }

    beforeEach(module('templates', 'core', 'funds'));

    var scope, isolatedScope, compile, element, compiledElement, $httpBackend;

    beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {
        scope = $rootScope.$new();
        compile = $compile;

        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', chartDataUrl).respond(chartData);

        loadFund();

    }));

    beforeEach(function () {
        element = angular.element('<fund-list-item fund="fund"></fund-list-item>');

        $httpBackend.expectGET(chartDataUrl);
        compiledElement = compile(element)(scope);
        isolatedScope = compiledElement.isolateScope();
        scope.$digest();
        $httpBackend.flush();
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });


    it('should be on the page', function () {
        var baseElementByClass = element.find('.fund-item');
        expect(baseElementByClass.length).toBe(1);
    });

    it('should have the name set', function () {
        var nameField = element.find('.fund-name');
        expect(nameField.text()).toEqual(scope.fund.name);
    });

    it('should have a share class drop down', function () {
        var shareClassesSelector = element.find('select.share-classes');
        expect(shareClassesSelector.length).toBe(1);
    });

    it('should have a share class drop down with all share classes listed', function () {
        var shareClassesSelector = element.find('select.share-classes option');
        expect(shareClassesSelector.length).toBe(scope.fund.shareClasses.length);
    });

    it('should have the first share class selected ', function () {
        expect(scope.fund.selectedShareClass).toEqual(scope.fund.shareClasses[0]);
    });

    describe('Changing the selected share class', function () {
        it('should fetch chart data', function () {
            scope.fund.selectedShareClass = scope.fund.shareClasses[1];
            $httpBackend.expectGET(chartDataUrl);
            scope.$digest();
            $httpBackend.flush();
            expect(scope.fund.chartConfig.series.length).toBe(1);
        });
        it('should show the chart for a valid isin and hide the isin error message', function () {
            var chartContainer = element.find('.chart-container');
            var isinErrorContainer = element.find('.isin-error-container');
            // The first one is valid
            scope.fund.selectedShareClass = scope.fund.shareClasses[0];
            scope.$digest();
            var isValid = scope.fund.selectedShareClass['ISIN Code'] !== 'GB00BGnotvalid';
            expect(isValid).toBeTruthy();
            expect(chartContainer.hasClass('ng-hide')).toBe(!isValid);
            expect(isinErrorContainer.hasClass('ng-hide')).toBe(isValid);
        });
        it('should hide the chart for a invalid isin and show the isin error message', function () {

            // The second one is invalid
            scope.fund.selectedShareClass = scope.fund.shareClasses[1];
            $httpBackend.expectGET(chartDataUrl);
            scope.$digest();
            $httpBackend.flush();
            var chartContainer = element.find('.chart-container');
            var isinErrorContainer = element.find('.isin-error-container');
            var isValid = scope.fund.selectedShareClass['ISIN Code'] !== 'GB00BGnotvalid';

            expect(isValid).toBeFalsy();
            expect(isinErrorContainer.hasClass('ng-hide')).toBe(isValid);
            expect(chartContainer.hasClass('ng-hide')).toBe(!isValid);
        });
    });
    describe('Change structure depending on Launch Date', function () {
        it('should show share class fields as table elements if Launch date < 4 years ago', function () {
            scope.fund.selectedShareClass['Launch Date'] = new Date();
            scope.$digest();
            var listElement = element.find('.share-class-list');
            var tableElements = element.find('.shared-class-table-row:eq(0)');

            expect(listElement.hasClass('ng-hide')).toBeTruthy();
            expect(tableElements.hasClass('ng-hide')).toBeFalsy();
        });
        it('should show share class fields as ul if Launch date >= 4 years ago', function () {
            var now = new Date();
            scope.fund.selectedShareClass['Launch Date'] = new Date(now.getFullYear() - 4, now.getMonth(), now.getDate());
            scope.$digest();

            var listElement = element.find('.share-class-list');
            var tableElements = element.find('.shared-class-table-row:eq(0)');

            expect(listElement.hasClass('ng-hide')).toBeFalsy();
            expect(tableElements.hasClass('ng-hide')).toBeTruthy();
        });
    });
    describe('Field validation', function () {
        it('should have the Launch Date', function () {
            var field = element.find('fund-list-item-field[data-key="Launch Date"] .item-value');
            expect(field.length).toBe(1);
        });
        it('should display the launch date as MM/DD/YYYY', function () {
            var field = element.find('fund-list-item-field[data-key="Launch Date"] .item-value');
            var fieldText = field.text().trim();
            var formattedDate = moment(scope.fund.selectedShareClass['Launch Date']).format('MM/DD/YYYY');
            expect(fieldText).toEqual(formattedDate);
        });
        it('should display other dates as DD MMM YYYY (Report Date From)', function () {
            var field = element.find('.shared-class-field fund-list-item-field[data-key="Report Date From"] .item-value');
            var fieldText = field.text().trim();
            var formattedDate = moment(scope.fund.selectedShareClass['Report Date From']).format('DD MMM YYYY');
            expect(fieldText).toEqual(formattedDate);
        });
        it('should display blank fields as a dash', function () {
            var field = element.find('.shared-class-field fund-list-item-field[data-key="Cumulative Return 2 Year"] .item-value');
            var fieldText = field.text().trim();
            expect(fieldText).toEqual('-');
            scope.fund.selectedShareClass['Cumulative Return 2 Year'] = 1;
            scope.$digest();
            fieldText = field.text().trim();
            expect(fieldText).toEqual('1.00');
            scope.fund.selectedShareClass['Cumulative Return 2 Year'] = null;
            scope.$digest();
            fieldText = field.text().trim();
            expect(fieldText).toEqual('-');
        });
        it('should display numbers with thousand separators and 2 decimal places', function () {
            // This cater for thousand separators, 2 decimal fixed places and will work for negative numbers
            var regex = /^(\-)?\d{1,3}(,\d{3})*(\.\d{2}){1}$/;
            var field = element.find('.shared-class-field fund-list-item-field[data-key="NAV Base"] .item-value');
            var fieldText = field.text().trim();
            var isMatch = regex.test(fieldText);
            expect(isMatch).toBeTruthy();
            field = element.find('.shared-class-field fund-list-item-field[data-key="Compound Return 1 Year Annual"] .item-value');
            fieldText = field.text().trim();
            isMatch = regex.test(fieldText);
            expect(isMatch).toBeTruthy();
        });
        it('should display numbers with thousand separators and 2 decimal places', function () {
            // This cater for thousand separators, 2 decimal fixed places and will work for negative numbers
            var regex = /^(\-)?\d{1,3}(,\d{3})*(\.\d{2}){1}$/;
            var field = element.find('.shared-class-field fund-list-item-field[data-key="NAV Base"] .item-value');
            var fieldText = field.text().trim();
            var isMatch = regex.test(fieldText);
            expect(isMatch).toBeTruthy();
            field = element.find('.shared-class-field fund-list-item-field[data-key="Compound Return 1 Year Annual"] .item-value');
            fieldText = field.text().trim();
            isMatch = regex.test(fieldText);
            expect(isMatch).toBeTruthy();
        });
    });
});