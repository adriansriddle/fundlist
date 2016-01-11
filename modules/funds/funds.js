angular.module('funds', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('funds').config(function($stateProvider) {

    $stateProvider.state('list', {
        url: '/funds/list',
        templateUrl: 'modules/funds/partial/list/list.html',
        resolve: {
            // Constant title
            $title: function() { return 'Funds list'; }
        }
    });
    /* Add New States Above */

});

