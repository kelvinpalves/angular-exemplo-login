(function () {
	'use strict';

	angular
		.module('app.core')
		.factory('AuthToken', AuthToken);

	AuthToken.$inject = ['$sessionStorage'];

	/* @ngInject */
	function AuthToken($sessionStorage) {
		var service = {
			deleteToken: deleteToken,
			getToken: getToken,
			setToken: setToken
		};

		return service;
		//////////////

		function deleteToken(id) {
			delete $sessionStorage[id];
		}

		function getToken(id) {
			return $sessionStorage[id];			
		}

		function setToken(token, id) {
			return $sessionStorage[id] = token;
		}
	}
})();	