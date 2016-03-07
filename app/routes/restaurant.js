var Restaurant = require('../models/restaurant');

module.exports = function(app, express)
{

var apiRouter = express.Router();


// Middleware to log restaurant api calls
apiRouter.use(function(req, res, next)
{
	console.log('Someone visited the restaurant API');
	next();
});

apiRouter.get('/', function(req, res)
{
	res.json({ message: 'Welcome to the restaurant API'});
});

// on routes that end in restaurants
// ===================================================== 
apiRouter.route('/restaurants')

	.post(function(req, res)
		{
			var restaurant = new Restaurant();
			restaurant.name = req.body.name;
			restaurant.information = req.body.information;
			restaurant.openingHours = req.body.openingHours;
			restaurant.address = req.body.address;

			restaurant.save(function(err)
			{
				if(err) res.send(err);

				// return a message
				res.json({ message: 'Restaurant Created!'});
			});
		})

	.get(function(req, res)
	{
		Restaurant.find(function(err, restaurants)
		{
			if(err) res.send(err);
			res.json(restaurants);
		});
	});

	// on routes that end in /restaurants/restaurant_id
	// =======================================================
	apiRouter.route('/restaurants/:restaurant_id')
		.get(function(req, res)
		{
			Restaurant.findById(req.params.restaurant_id, function(err, restaurant)
			{
				if(err) res.send(err);
				res.json(restaurant);
			});
		})
		.put(function(req, res)
		{
			Restaurant.findById(req.params.restaurant_id, function(err, restaurant)
			{
				if(err) res.send(err);

				if (req.body.name) restaurant.name = req.body.name;
				if (req.body.information) restaurant.information = req.body.information;
				if (req.body.openingHours) restaurant.openingHours = req.body.openingHours;
				if (req.body.address) restaurant.address = req.body.address;

			restaurant.save(function(err)
			{
				if(err) res.send(err);

				// return a message
				res.json({ message: 'Restaurant updated'});
			});
		});
	})
		.delete(function(req, res)
		{
			Restaurant.remove(
			{
				_id: req.params.restaurant_id
			},
			function(err, restaurant)
			{
				if(err) return res.send(err);
				res.json({ message: 'Restaurant has been deleted'});
			});
	});



	apiRouter.get('/me', function(req, res)
	{
		res.send(req.decoded);
	});

	// return apiRouter
	return apiRouter;

}
