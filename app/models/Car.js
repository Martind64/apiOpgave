//PACKKAGES
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//CAR SCHEMA
var CarSchema = new Schema({
   brand: String,
   model: String,
   km: String,
   price: String    
});

//RETURN THE MODEL
module.exports = mongoose.model('Car', CarSchema);