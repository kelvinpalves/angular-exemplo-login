(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('AuthInterceptor', AuthInterceptor)
		.config(http);

	AuthInterceptor.$inject = ['$location', '$q', 'AuthToken'];
	http.$inject = ['$httpProvider'];

	/* @ngInject */
	function AuthInterceptor($location, $q, AuthToken) {
		var service = {
			request: request,
			responseError: responseError
		};

		return service;

		function request(config) {
			config.headers = config.headers || {};
			if (AuthToken.getToken('accessToken')) {
				config.headers['Authorization'] = 'Bearer ' + AuthToken.getToken('accessToken');
			}
			return config;
		}

		function responseError(response) {
			if (response.status === 401 || response.status === 403) {
				alert(response.data)
				$location.path('/login');
			}
			return $q.reject(response);
		}
	}

	/* @ngInject */
	function http($httpProvider) {
		$httpProvider.interceptors.push('AuthInterceptor');
	}
})();