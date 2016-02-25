angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider)
{
	$routeProvider

	.when('/',
		templateUrl : 'app/components/restaurants/pages/home.html')

	.when('/hello',
		templateUrl : 'app/components/restaurants/pages/restaurantView.html')

	// get rid of the hash in the url
	$locationProvider.html5Mode(true);
});