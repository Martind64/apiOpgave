var Car = require('../models/Car');
var config = require('../../config');





module.exports = function(app, express) {
    var router = express.Router();
    
    //MIDDLEWARE
    
    
    
    
    //ROUTES
    
    //Welcome message to car api
    
    
    
    
    //crud routes
    
    router.route('/car')
    
        //get all cars
        .get(function(req, res) {
            Car.find(function(err, cars) {
               if(err) res.send(err);
               
               res.json(cars); 
            });   
        })
    
        // create a car entry
        .post(function(req, res) {
            
            //new instance of car scheme
            var car = new Car();
            
            //set properties of the car
            car.brand = req.body.brand;
            car.model = req.body.model;
            car.km = req.body.km;
            car.price = req.body.price;
            
            
            //save the entry
            car.save(function(err) {
                if(err) {
                    //duplicate error code
                    if(err.code == 11000) {
                        return res.json({ success: false, message: 'A car with that information already exists!'});
                    }   else {
                        return res.send(err);
                    }
                }
                res.json({ message: 'Car entry created!' });
            });
        });
        
        
        router.route('/cars/:car_id')
        
            //get a single car
            .get(function(req, res) {
                Car.findById(req.params.car_id, function(err, car) {
                   if(err) res.send(err);
                   
                   res.json(car); 
                });
            })
        
            //update a car
            .put(function(req, res) {
                Car.findById(req.params.car_id, function(err, car) {
                   if(err) res.send(err);
                   
                   //update cars info if there is information
                   if (req.body.brand) car.brand = req.body.brand;
                   if (req.body.model) car.model = req.body.model;
                   if (req.body.km) car.km = req.body.km;
                   if (req.body.price) car.price = req.body.price;
                   
                   //save information
                   car.save(function(err) {
                      if(err) res.send(err);
                      
                      res.json({ message: 'Car updated!' }); 
                   });
                });
            })
        
            //delete a car
            .delete(function(req, res) {
                Car.remove({
                    _id: req.params.car_id
                }, function(err, car) {
                   if(err) return res.send(err);
                   
                   res.json({ message: 'Car was deleted!' }); 
                });
            });
       
    
  return router;  
};



