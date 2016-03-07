// Require the news model
var News = require('../models/news');

module.exports = function(app, express)
{
	// 
	var apiRouter = express.Router();


	// Middleware to log all api calls
	apiRouter.use(function(req, res, next)
	{
		console.log('Someone just visited the news api')
		next();
	});



	// on routes that end in news
	// ============================================
	apiRouter.route('/news')

	.post(function(req, res)
		{
			var news = new News();

			news.headline = req.body.headline;
			news.content = req.body.content;
			news.author = req.body.author;

			news.save(function(err)
			{
				if(err) res.send(err);

				// return a message
				res.json({ message: 'News Created'})
			})
		})
	.get(function(req, res)
	{
		News.find(function(err, news)
		{
			if(err) res.send(err);
			res.json(news);
		});
	});

	// on routes that end in /news/news-id
	// =========================================
	apiRouter.route('/news/:news_id')
	.get(function(req, res)
	{
		News.findById(req.params.news_id, function(err, news)
		{
			if(err) res.send(err);
			res.json(news);
		});
	})
	.put(function(req, res)
	{
		News.findById(req.params.news_id, function(err, news)
		{
			if(err) res.send(err);

			if(req.body.headline) news.headline = req.body.headline;
			if(req.body.content) news.content = req.body.content;
			if(req.body.author) news.author = req.body.author;

			news.save(function(err)
			{
				if(err) res.send(err);

				res.json({ message: 'News Updated!'});
			});
		});
	})
	.delete(function(req, res)
	{
		News.remove(
		{
			_id: req.params.news_id
		},
		function(err, news)
		{
			if(err) return res.send(err);
			res.json({ message: 'News deleted'});
		});
	});

	apiRouter.get('/me', function(req, res)
	{
		res.send(req.decoded);
	});

	// return the news router
	return apiRouter;


}