angular.module('funds').directive('fundListItem', function() {
	return {
		restrict: 'E',
		replace: false,
		scope: {
			fund: '='
		},
		templateUrl: 'modules/funds/directive/fund-list-item/fund-list-item.html',
		link: function($scope) {
			function getTableRowsForFields(fields) {
				var tableData = [];
				var row = [];
				angular.forEach(fields, function(field) {
					row.push(field);
					if (row.length >= 2) {
						tableData.push(row);
						row = [];
					}
				});
				if (row.length === 1) {
					row.push({ isBlank: true });
				}
				if (row.length > 0) {
					tableData.push(row);
					row = [];
				}
				return tableData;
			}

			$scope.shareClassFields = [
				{ key: 'ISIN Code' },
				{ key: 'Bloomberg Code' },
				{ key: 'Launch Date', dateFormat: 'MM/dd/yyyy', type: 'date' },
				{ key: 'age', displayText: 'Time From Launch' },
				{ key: 'Mexican CNBV Code' },
				{ key: 'Yield Current', type: 'number' },
				{ key: 'Fund Size Currency Code' },
				{ key: 'NAV Base', type: 'number' },
				{ key: 'Price NAV', type: 'number' },
				{ key: 'NAV Movement', type: 'number' },
				{ key: 'NAV Movement Percentage', type: 'number' },
				{ key: 'Compound Return 1 Year Annual', type: 'number' },
				{ key: 'Report Date From', type: 'date' },
				{ key: 'Report Date To', type: 'date' },
				{ key: 'Cumulative Return 1 Month', type: 'number' },
				{ key: 'Cumulative Return 3 Month', type: 'number' },
				{ key: 'Cumulative Return 6 Month', type: 'number' },
				{ key: 'Cumulative Return 1 Year', type: 'number' },
				{ key: 'Cumulative Return 2 Year', type: 'number' }
			];

			$scope.fundFields = [
				{ key: 'Entity Name' },
				{ key: 'ISIN Code' },
				{ key: 'Short Name' },
				{ key: 'Fund Size Currency Code' },
				{ key: 'Organization Id' },
				{ key: 'Client Code Additional' },
				{ key: 'Organization Code' },
				{ key: 'Tech Rules Flag' }
			];



			$scope.fundTableRows = getTableRowsForFields($scope.fundFields);
			$scope.shareClassTableRows = getTableRowsForFields($scope.shareClassFields);


			console.log('shareClassTableRows', $scope.shareClassTableRows);
		}
	};
});
