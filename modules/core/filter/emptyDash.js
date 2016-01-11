angular.module('core').filter('emptyDash', function() {
	return function(input) {
		return (typeof input !== 'undefined' && input !== null && input !== '' ? input : '-');
	};
});