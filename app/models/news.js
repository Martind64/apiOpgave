// Load packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema(
{
	headline: String,
	content: String,
	author: String,

});

// return the model
module.exports = mongoose.model('News', NewsSchema);