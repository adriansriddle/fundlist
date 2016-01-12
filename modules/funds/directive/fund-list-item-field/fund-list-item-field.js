angular.module('funds').directive('fundListItemField', function() {
	return {
		restrict: 'E',
		replace: false,
		scope: {
			value: '=',
			type: '@',
			dateFormat: '@'
		},
		templateUrl: 'modules/funds/directive/fund-list-item-field/fund-list-item-field.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
