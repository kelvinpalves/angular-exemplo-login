(function () {
	angular
		.module('app.home')
		.factory('dataservice', dataservice);

	dataservice.$inject = ['$http'];

	function dataservice($http) {
		var service = {
			buscarClientes: buscarClientes
		};

		return service;
		///////////////

		function buscarClientes() {
			return $http.get('http://10.2.0.44:8085/tickets-1.0/rs/cliente')
				.then(buscarDadosCliente)
				.catch(function(message) {
					return {};
				});

			function buscarDadosCliente(data) {
				return data.data;
			}
		}
	}
})();