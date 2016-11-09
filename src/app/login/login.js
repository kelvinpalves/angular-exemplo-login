(function () {
	'use strict';

	angular
		.module('app.login')
		.controller('Login', Login);

	Login.$inject = ['AuthService'];

	function Login(AuthService) {
		var vm = this;
		vm.login = login;
		vm.usuario = {};
		///////////////

		function login() {
			AuthService.sigin(vm.usuario);
		}
	}
})();