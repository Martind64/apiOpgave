//PACKKAGES
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//CAR SCHEMA
var CarSchema = new Schema({
   brand: String,
   model: String,
   km: Int,
   price: Double    
});

//RETURN THE MODEL
module.exports = mongoose.model('Car', FileSchema);