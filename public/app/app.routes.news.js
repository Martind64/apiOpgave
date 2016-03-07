angular.module('app.routes.news', ['ngRoute'])

.config(function($routeProvider, $locationProvider)
{
	$routeProvider

	.when('/news',
	{
		templateUrl : 'app/components/news/views/all.html',
		controller  : 'newsController',
		controllerAs: 'news'
	})

	// Route to create a restaurant
	.when('/news/create',
	{
		templateUrl : 'app/components/news/views/single.html',
		controller 	: 'newsController',
		controllerAs: 'news'
	})

	// Route to update news
	.when('/news/:news_id',
	{
		templateUrl : 'app/components/news/views/single.html',
		controller  : 'newsEditController',
		controllerAs: 'news'
	});




	// get rid of the hash in the url
	$locationProvider.html5Mode(true);

});