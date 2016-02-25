angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider)
{
	$routeProvider

	.when('/', 
	{
		templateUrl : 'app/components/restaurants/home.html'
	})

	.when('/hello',
	{
		templateUrl : 'app/components/restaurants/restaurantView.html'
	})

	.when('/all',
	{
		templateUrl : 'app/components/restaurants/all.html',
		controller  : 'restaurantController',
		controllerAs: 'restaurant'
	});

	// get rid of the hash in the url
	$locationProvider.html5Mode(true);
});