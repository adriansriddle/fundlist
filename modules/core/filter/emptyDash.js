angular.module('core').filter('emptyDash', function() {
	return function(input) {
		// if the input is undefined, null or blank then a "-" will be return otherwise return the value passed in
		return (typeof input !== 'undefined' && input !== null && input !== '' ? input : '-');
	};
});