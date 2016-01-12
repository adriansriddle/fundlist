describe('fundListItemField', function () {

    beforeEach(module('templates', 'core', 'funds'));

    var scope, compile, element;

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        compile = $compile;
    }));

    describe('number field', function () {
        var regex = /^(\-)?\d{1,3}(,\d{3})*(\.\d{2}){1}$/;
        beforeEach(function () {
            element = angular.element('<fund-list-item-field value="value" type="number"></fund-list-item-field>');
            compile(element)(scope);
            scope.$digest();
        });

        it('should display numbers with thousand separators and 2 decimal places: 123.456', function () {
            scope.value = 123.456;
            scope.$digest();
            var field = element.find('.item-value');
            var fieldText = field.text().trim();
            expect(regex.test(fieldText)).toBeTruthy();
        });
        it('should display numbers with thousand separators and 2 decimal places: 10', function () {
            scope.value = 10;
            scope.$digest();
            var field = element.find('.item-value');
            var fieldText = field.text().trim();
            expect(regex.test(fieldText)).toBeTruthy();
        });
        it('should display numbers with thousand separators and 2 decimal places: -1000000.1', function () {
            scope.value = -1000000.1;
            scope.$digest();
            var field = element.find('.item-value');
            var fieldText = field.text().trim();

            expect(regex.test(fieldText)).toBeTruthy();
        });
        it('should display "-" if empty', function () {
            delete scope.value;
            scope.$digest();
            var field = element.find('.item-value');
            var fieldText = field.text().trim();
            expect(fieldText).toEqual('-');
        });
    });
    describe('date field, no format set', function () {
        var testDate = new Date();
        beforeEach(function () {
            scope.value = testDate;
            element = angular.element('<fund-list-item-field value="value" type="date"></fund-list-item-field>');
            compile(element)(scope);
            scope.$digest();
        });
        it('should display the date in DD MMM YYYY', function () {
            var field = element.find('.item-value');
            var fieldText = field.text().trim();
            expect(fieldText).toEqual(moment(testDate).format('DD MMM YYYY'));
        });
        it('should display "-" if empty', function () {
            delete scope.value;
            scope.$digest();
            var field = element.find('.item-value');
            var fieldText = field.text().trim();
            expect(fieldText).toEqual('-');
        });
    });

    describe('date field, format set', function () {
        var testDate = new Date();
        beforeEach(function () {
            scope.value = testDate;
        });
        it('should display the date in format passed: MM/dd/yyyy', function () {
            element = angular.element('<fund-list-item-field value="value" type="date" date-format="MM/dd/yyyy"></fund-list-item-field>');
            compile(element)(scope);
            scope.$digest();
            var field = element.find('.item-value');
            var fieldText = field.text().trim();
            expect(fieldText).toEqual(moment(testDate).format('MM/DD/YYYY'));
        });
        it('should display the date in format passed: yyyy-MM-dd', function () {
            element = angular.element('<fund-list-item-field value="value" type="date" date-format="yyyy-MM-dd"></fund-list-item-field>');
            compile(element)(scope);
            scope.$digest();
            var field = element.find('.item-value');
            var fieldText = field.text().trim();
            expect(fieldText).toEqual(moment(testDate).format('YYYY-MM-DD'));
        });
        it('should display "-" if empty', function () {
            delete scope.value;
            element = angular.element('<fund-list-item-field value="value" type="date" date-format="MM/dd/yyyy"></fund-list-item-field>');
            compile(element)(scope);
            scope.$digest();
            var field = element.find('.item-value');
            var fieldText = field.text().trim();
            expect(fieldText).toEqual('-');
        });
    });

    describe('string field', function () {
        beforeEach(function () {
            scope.value = 'TEST VALUE';
            element = angular.element('<fund-list-item-field value="value"></fund-list-item-field>');
            compile(element)(scope);
            scope.$digest();
        });
        it('should display the value passed: TEST VALUE', function () {
            var field = element.find('.item-value');
            var fieldText = field.text().trim();
            expect(fieldText).toEqual('TEST VALUE');
        });
        it('should display "-" if empty', function () {
            delete scope.value;
            scope.$digest();
            var field = element.find('.item-value');
            var fieldText = field.text().trim();
            expect(fieldText).toEqual('-');
        });
    });

});