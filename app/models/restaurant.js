// Load packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RestaurantSchema = new Schema({
	name: String,
	information: String,
	openingHours: String,
	address: String,
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);

