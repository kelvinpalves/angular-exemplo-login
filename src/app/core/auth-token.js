(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('AuthToken', AuthToken);

	AuthToken.$inject = ['$sessionStorage'];

	function AuthToken($sessionStorage) {
		var service = {
			deleteToken: deleteToken,
			getToken: getToken,
			setToken: setToken
		};

		return service;
		//////////////

		function deleteToken() {
			delete $sessionStorage.token;
		}

		function getToken() {
			return $sessionStorage.token;			
		}

		function setToken(token) {
			return $sessionStorage.token = token;
		}
	}
})();	