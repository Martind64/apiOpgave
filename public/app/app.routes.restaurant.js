angular.module('app.routes.restaurant', ['ngRoute'])

.config(function($routeProvider, $locationProvider)
{
	$routeProvider

	// Route for the homepage
	.when('/', 
	{
		templateUrl : 'app/shared/homepage.html'
	})

	.when('/hello',
	{
		templateUrl : 'app/components/restaurants/views/restaurantView.html'
	})

	.when('/restaurants',
	{
		templateUrl : 'app/components/restaurants/views/all.html',
		controller  : 'restaurantController',
		controllerAs: 'restaurant'
	})

	// Route to create a restaurant
	.when('/restaurant/create',
	{
		templateUrl : 'app/components/restaurants/views/single.html',
		controller  : 'restaurantCreateController',
		controllerAs: 'restaurant'
	})

	// Route to update a restaurant
	.when('/restaurant/:restaurant_id',
	{
		templateUrl : 'app/components/restaurants/views/single.html',
		controller  : 'restaurantEditController',
		controllerAs: 'restaurant'
	});

	// get rid of the hash in the url
	$locationProvider.html5Mode(true);
});