(function () {
	angular
		.module('app')
		.config(routes)
		.run(appRun);

	routes.$inject = ['$routeProvider', '$locationProvider'];
	appRun.$inject = ['$rootScope', '$location', 'AuthToken'];

	/* @ngInject */
	function appRun($rootScope, $location, AuthToken) {
		$rootScope.$on('$routeChangeStart', routeChangeStart);

		function routeChangeStart(event, next, current) {
			if (!next.notSecured) {
				if (!AuthToken.getToken('accessToken')) {
					$rootScope.$evalAsync(function () {
						$location.path('/login');
					});
				}
			}
		}
	}

	/* @ngInject */
	function routes($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'src/app/home/home.html',
				controller: 'Home',
				controllerAs: 'vm'
			})
			.when('/login', {
				templateUrl: 'src/app/login/login.html',
				controller: 'Login',
				controllerAs: 'vm',
				notSecured: true
			})
			.otherwise('/');
	}

})();