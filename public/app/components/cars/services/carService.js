angular.module('carService', [])
	


	.factory('Car', function($http) {
		var carFactory = {};

		// get specific car
       carFactory.get = function(id) {
         return $http.get('/api/cars/' + id);  
       };
       
       // function - get all files
       fileFactory.all = function() {
           return $http.get('/api/cars');
       };
       
       // create a new car
       carFactory.create = function(carData) {
           return $http.post('/api/cars', carData);
       };
       
       // edit a car
       carFactory.update = function(id, carData) {
            return $http.put('/api/cars/' + id, carData);  
       };
       
       // delete a car
       carFactory.delete = function(id) {
            return $http.delete('/api/cars/' + id);    
       };
       
       return carFactory;

	});