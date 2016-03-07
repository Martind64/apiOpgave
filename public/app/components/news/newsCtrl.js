angular.module('newsCtrl', ['newsService'])

.controller('newsController', function($location, News)
{
	var vm = this;
	vm.processing = true;

	News.all()
		.success(function(data)
		{
			vm.processing = false;

			vm.news = data;
		});

	vm.directToNews = function()
	{
		$location.path('/news/');
	}

	vm.deleteNews = function(id)
	{
		vm.processing = true;

		News.delete(id)
		.success(function(data)
		{
			News.all()
			.success(function(data)
			{
				vm.processing = false;
				vm.news = data;
			});
			$location.path('/news');
		});
	};
})

.controller('newsCreateController', function(News)
{
	var vm = this;

	vm.type = 'create';

	vm.saveNews = function()
	{
		vm.processing = true;

		vm.message = "";

		News.create(vm.newsData)
		.success(function(data)
		{
			vm.processing = false;

			vm.newsData = {};
			vm.message = data.message;
		});
	};
})

.controller('newsEditController', function($location, $routeParams, News)
{
	var vm = this;

	vm.type = 'edit';

	News.get($routeParams.news_id)
	.success(function(data)
	{
		vm.newsData = data;
	});

	vm.saveNews = function()
	{
		vm.processing = true;
		vm.message = '';

		News.update($routeParams.news_id, vm.newsData)
		.success(function(data)
		{
			vm.processing = false;

			// clear the form
			vm.newsData = {};

			// bind the message from our API to vm.message
			vm.message = data.message;
		});
	};

		vm.deleteNews = function(id)
	{
		vm.processing = true;

		News.delete(id)
		.success(function(data)
		{
			News.all()
			.success(function(data)
			{
				vm.processing = false;
				vm.news = data;
			});
			$location.path('/news');
		});
	};
});