angular.module('carCtrl', ['carService'])

    .controller('carController', function(Car) {
        var vm = this;
        
        Car.all()
            .success(function(data) {
               vm.cars = data; 
            });
            
        // delete a car
        vm.deleteCar = function(id) {
            Car.delete(id)
                .success(function(data) {
                   vm.cars = data; 
                });
        };
    })
    
    
    
    .controller('carCreateController', function(Car) {
        var vm = this;
        
        //show/hide elements of view between create and edit
        vm.type = "create";
        
        // function to create a car
        vm.saveCar = function() {
          vm.message = '';
          
          // use the create function in the carService
          Car.create(vm.carData)
            .success(function(data) {
               
               // clear the form
               vm.carData = {};
               vm.message = data.meassage; 
            });
        };
    })
    
    .controller('carEditController', function($routeParams, Car) {
        var vm = this;
        
        //Variable to hide/show elements of the view
       vm.type = 'edit';
       
       // get the car data for the car
       // $routeParams to grab data from URL
       Car.get($routeParams.car_id)
        .success(function(data) {
           vm.carData = data; 
        });
        
        //function to save the car
        vm.saveCar = function() {
          
          vm.message = '';
          
          //call the carService function to update
          Car.update($routeParams.car_id, vm.carData)
            .success(function(data) {
               
               
               // clear the form
               vm.carData = {};
               
               // bind the message from api
               vm.message = data.message; 
            });
        };
    })