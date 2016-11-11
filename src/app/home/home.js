(function () {
	'use strict';

	angular
		.module('app.home')
		.controller('Home', Home);

	Home.$inject = ['AuthService', 'AuthToken', 'dataservice'];

	/* @ngInject */
	function Home(AuthService, AuthToken, dataservice) {
		var vm = this;
		vm.logout = logout;
		vm.token = AuthToken.getToken('accessToken');
		vm.teste = teste;

		console.log(vm.token);
		/////////////////

		function logout() {
			AuthService.logout();
		}

		function teste() {
			return dataservice.buscarClientes().then(function (data) {
				console.log(data.data.cliente);
			});
		}
	}
})();