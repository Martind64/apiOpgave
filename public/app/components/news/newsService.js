angular.module('newsService', [])

.factory('News', function($http)
{
	// create a news object
	var newsFactory = {};

	// get a single news
	newsFactory.get = function(id)
	{
		return $http.get('/news/news/' + id);
	};

	// get all news
	newsFactory.all = function()
	{
		return $http.get('news/news');
	};


	// create news
	newsFactory.create = function(newsData)
	{
		return $http.post('/news/news/', newsData);
	};

	// update news
	newsFactory.update = function(id, newsData)
	{
		return $http.put('/news/news/' + id, newsData);
	};

	// delete news
	newsFactory.delete = function(id)
	{
		return $http.delete('/news/news/' + id);
	};

	return newsFactory;
});