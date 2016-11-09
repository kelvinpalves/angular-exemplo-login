(function () {
	'use strict';

	angular
		.module('app', [
			'app.core',
			'app.home',
			'app.login',
			'ngRoute',
			'ngStorage'
		]);
})();