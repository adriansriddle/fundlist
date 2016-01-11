angular.module('fundlist', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'ui.router.title', 'highcharts-ng', 'funds', 'core']);

angular.module('fundlist').config(function($stateProvider, $urlRouterProvider) {


    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('fundlist').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
