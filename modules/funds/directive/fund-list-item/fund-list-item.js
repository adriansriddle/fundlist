angular.module('funds').directive('fundListItem', function() {
	return {
		restrict: 'E',
		replace: false,
		scope: {
			fund: '=' // This is the main data point for the directive, the fund will drive the directive
		},
		controller: 'FundListItemCtrl',
		templateUrl: 'modules/funds/directive/fund-list-item/fund-list-item.html',
		link: function($scope) {

		}
	};
});
