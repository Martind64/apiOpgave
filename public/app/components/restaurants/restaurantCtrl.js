angular.module('restaurantCtrl', ['restaurantService'])

.controller('restaurantController', function($location, Restaurant)
{
	var vm = this;

	vm.processing = true;

	Restaurant.all()
		.success(function(data)
		{
			vm.processing = false;

			vm.restaurants = data;
		});

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

.controller('restaurantEditController', function($routeParams, Restaurant)
{
	var vm = this;

	vm.type = 'edit';

	Restaurant.get($routeParams.user_id)
	.success(function(data)
	{
		vm.userData = data;
	});

	vm.saveRestaurant = function()
	{
		vm.processing = true;
		vm.message = '';

		Restaurant.update($routeParams.restaurant_id, vm.restaurantData)
		.success(function(data)
		{
			vm.processing = false;

			vm.restaurantData = {};

			vm.message = data.message;
		});
	};
});