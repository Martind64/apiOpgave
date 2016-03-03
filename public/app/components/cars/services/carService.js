angular.module('carService', [])
	


	.factory('Car', function($http) {
		var carFactory = {};

		// get specific car
       carFactory.get = function(id) {
         return $http.get('/cars/' + id);  
       };
       
       // function - get all cars
       carFactory.all = function() {
           return $http.get('/cars');
       };
       
       // create a new car
       carFactory.create = function(carData) {
           return $http.post('/cars', carData);
       };
       
       // edit a car
       carFactory.update = function(id, carData) {
            return $http.put('/cars/' + id, carData);  
       };
       
       // delete a car
       carFactory.delete = function(id) {
            return $http.delete('/cars/' + id);    
       };
       
       return carFactory;

	});