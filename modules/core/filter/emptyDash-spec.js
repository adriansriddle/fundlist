describe('Test emptyDash filter', function() {

	beforeEach(module('core'));

	var filter;

	beforeEach(function () {
		inject(function ($filter) {
			filter = $filter('emptyDash');
		});
	});

	it('should take in a value and return it if it is not null or empty', function () {
		expect(filter('input')).toEqual('input');
	});

	it('should take in a null or empty value and return a "-"', function () {
		expect(filter('input')).toEqual('input');
	});
});