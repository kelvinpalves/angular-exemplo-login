(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('AuthService', AuthService);

	AuthService.$inject = ['$http', "AuthToken", '$q', '$location'];

	/* @ngInject */
	function AuthService($http, AuthToken, $q, $location) {
		var service = {
			logout: logout,
			sigin: sigin
		};

		return service;
		///////////////

		function logout() {
			AuthToken.deleteToken();
			$location.path('/login');
		}

		function sigin(data) {
			$http.post('http://10.2.0.44:8085/tickets-1.0/rs/auth', data)
				.then(function (data) {
					AuthToken.setToken(data.data.token);
					$location.path('/');
				});
		}
	}
})();