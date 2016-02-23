//MODELS



//CONFIG
var config = require('./config');

//PACKAGES
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path');


//APP CONFIG


//digest request body information
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Database connect
mongoose.connect(config.database);


//handle CORS
app.use(function(req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization'); 
});

// log all requests
app.use(morgan('dev'));

//static files location
app.use(express.static(__dirname + '/public'));


//ROUTES

// car routes


// news routes


// restaurant routes




//MAIN CATCHALL ROUTE



// START SERVER
app.listen(config.port);
console.log('a whole lot of tis on port: ', config.port);