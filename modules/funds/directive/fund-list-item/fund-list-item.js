angular.module('funds').directive('fundListItem', function() {
	return {
		restrict: 'E',
		replace: false,
		scope: {
			fund: '='
		},
		controller: 'fundListItemController',
		templateUrl: 'modules/funds/directive/fund-list-item/fund-list-item.html',
		link: function($scope) {

		}
	};
});
