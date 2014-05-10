
/*================================================================
=>                  App = aamir
==================================================================*/
/*global angular*/

var app = angular.module('aamir', ['ngRoute', 'ngAnimate']);


app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
	'use strict';

	$routeProvider
		.when('/home', {
			templateUrl: 'templates/home.html'
		})
		.when('/contact', {
			templateUrl: 'templates/contact.html'
		})
		.when('/skills', {
			templateUrl: 'templates/skills.html'
		})
		.when('/resume', {
			templateUrl: 'templates/resume.html'
		})
		.otherwise({
			redirectTo: '/home'
		});



	// This is required for Browser Sync to work poperly
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  aamir App Run()  
==================================================================*/

app.run(['$rootScope', '$location', function ($rootScope, $location) {
	
	'use strict';

	console.log('Angular.js run() function...');


	$rootScope.$on('$routeChangeSuccess', function (next, current) {
		$rootScope.routeName = $location.path().substr(1);
	});
}]);




/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */