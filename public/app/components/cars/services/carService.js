angular.module('carService', [])
	


	.factory('Car', function($http) {
		var carFactory = {};

		// get specific car
       carFactory.get = function(id) {
         return $http.get('/car/cars/' + id);  
       };
       
       // function - get all cars
       carFactory.all = function() {
           return $http.get('/car/cars');
       };
       
       // create a new car
       carFactory.create = function(carData) {
           return $http.post('/car/cars', carData);
       };
       
       // edit a car
       carFactory.update = function(id, carData) {
            return $http.put('/car/cars/' + id, carData);  
       };
       
       // delete a car
       carFactory.delete = function(id) {
            return $http.delete('/car/cars/' + id);    
       };
       
       return carFactory;

	});