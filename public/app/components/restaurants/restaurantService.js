angular.module('restaurantService', [])

.factory('Restaurant', function($http)
{
	// create a new object
	var restaurantFactory = {};

	// get a single restaurant
	restaurantFactory.get = function(id)
	{
		return $http.get('/restaurant/restaurants/' + id);
	};

	// get all restaurants
	restaurantFactory.all = function()
	{
		return $http.get('/restaurant/restaurants/');
	};

	// create a restaurants
	restaurantFactory.create = function(restaurantData)
	{
		return $http.post('/restaurant/restaurants/', restaurantData);
	};

	// update a restaurants
	restaurantFactory.update = function(id, restaurantData)
	{
		return $http.put('/restaurant/restaurants/' + id, restaurantData);
	};

	restaurantFactory.delete = function(id)
	{
		return $http.delete('/restaurant/restaurants/' + id);
	};

	return restaurantFactory;

});