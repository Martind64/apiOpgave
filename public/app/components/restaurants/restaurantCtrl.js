angular.module('restaurantCtrl', ['restaurantService'])

.controller('restaurantController', function($location, Restaurant)
{
	var vm = this;
	vm.processing = true;
	vm.category = 'restaurant';

	Restaurant.all()
		.success(function(data)
		{
			vm.processing = false;

			vm.restaurants = data;
		});

	vm.directToRestaurant = function()
	{
		$location.path('/restaurant/');
	}

	vm.deleteRestaurant = function(id)
	{
		vm.processing = true;

		Restaurant.delete(id)
		.success(function(data)
		{
			Restaurant.all()
			.success(function(data)
			{
				vm.processing = false;
				vm.restaurants = data;
			});
			$location.path('/restaurants');
		});
	};
})

.controller('restaurantCreateController', function(Restaurant)
{
	var vm = this;

	vm.type = 'create';
	vm.category = 'restaurant';

	vm.saveRestaurant = function()
	{
		vm.processing = true;

		vm.message = "";

		Restaurant.create(vm.restaurantData)
		.success(function(data)
		{
			vm.processing = false;

			vm.restaurantData = {};
			vm.message = data.message;
		});
	};
})

.controller('restaurantEditController', function($location, $routeParams, Restaurant)
{
	var vm = this;

	vm.type = 'edit';
	vm.category = 'restaurant';

	Restaurant.get($routeParams.restaurant_id)
	.success(function(data)
	{
		vm.restaurantData = data;
	});

	vm.saveRestaurant = function()
	{
		vm.processing = true;
		vm.message = '';

		Restaurant.update($routeParams.restaurant_id, vm.restaurantData)
		.success(function(data)
		{
			vm.processing = false;

			// clear the form
			vm.restaurantData = {};

			// bind the message from our API to vm.message
			vm.message = data.message;
		});
	};

		vm.deleteRestaurant = function(id)
	{
		vm.processing = true;

		Restaurant.delete(id)
		.success(function(data)
		{
			Restaurant.all()
			.success(function(data)
			{
				vm.processing = false;
				vm.restaurants = data;
			});
			$location.path('/restaurants');
		});
	};
});