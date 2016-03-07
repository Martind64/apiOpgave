angular.module('app.routes.car', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {


	$routeProvider

	.when('/cars',
	{
		templateUrl : 'app/components/cars/views/all.html',
		controller  : 'carController',
		controllerAs: 'car'
	})

	// Route to create a cars
	.when('/cars/create',
	{
		templateUrl : 'app/components/cars/views/single.html',
		controller  : 'carCreateController',
		controllerAs: 'car'
	})

	// Route to update a cars
	.when('/cars/:car_id',
	{
		templateUrl : 'app/components/cars/views/single.html',
		controller  : 'carEditController',
		controllerAs: 'car'
	});

	$locationProvider.html5Mode(true);

});