describe('Test emptyDash filter', function() {

	beforeEach(module('core'));

	it('should take in a value and return it if it is not null or empty', inject(function($filter) {
        var filter = $filter('emptyDash');
		expect(filter('input')).toEqual('input');
	}));

	it('should take in a null or empty value and return a "-"', inject(function($filter) {
		var filter = $filter('emptyDash');
		expect(filter('input')).toEqual('input');
	}));
});