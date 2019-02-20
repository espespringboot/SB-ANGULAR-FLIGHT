var app = angular.module('myApp', ['ngResource']);

app.controller('Solicitud_VueloController', ['$scope', '$resource',function($scope,$resource) {
    
    function fetchAllSolicitudes(){
        $scope.solicitudes = $resource('http://localhost:8080/s_vuelo'
        ).query(function(data){return data;});
    };
    fetchAllSolicitudes();
    
    $scope.refresh = function(){
    	fetchAllSolicitudes();
    };
    
    $scope.create = function(){
    	User = $resource(
    		    "http://localhost:8080/create",
    		    {},
    		    {save: {method:'PUT',isArray:false}}
    	);
    	
    	var user = {};
		
		user.id = $scope.solicitud_vueloForm.id;
		user.nombre = $scope.solicitud_vueloForm.nombre;
		user.destino = $scope.solicitud_vueloForm.destino;
		user.dia_vuelo = $scope.solicitud_vueloForm.dia_vuelo;
		user.fecha_solicitud = $scope.solicitud_vueloForm.fecha_solicitud;
		user.status = $scope.solicitud_vueloForm.status;
		
		$scope.Message = User.save(user);
				
		$scope.solicitud_vueloForm.id = "";
		$scope.solicitud_vueloForm.nombre="";
		$scope.solicitud_vueloForm.destino="";
		$scope.solicitud_vueloForm.dia_vuelo="";
		$scope.solicitud_vueloForm.fecha_solicitud="";
		$scope.solicitud_vueloForm.status="";
    };
    
    $scope.deleteRec = function(){
    	User = $resource(
    		    "http://localhost:8080/delete/:id",
    		    {},
    		    {save: {method:'DELETE', params: {id: '@id'}}}
    	);
    	
			
		User.delete({id: $scope.solicitud_vueloForm.id}).then(function successCallback(response) {
			$scope.Message = response;
		}, function errorCallback(response) {
		    
		});
				
		$scope.solicitud_vueloForm.id = "";
		$scope.solicitud_vueloForm.nombre="";
		$scope.solicitud_vueloForm.destino="";
		$scope.solicitud_vueloForm.dia_vuelo="";
		$scope.solicitud_vueloForm.fecha_solicitud="";
		$scope.solicitud_vueloForm.status="";
    };
    
    
    $scope.update = function(){
    		
    	User = $resource(
    		    "http://localhost:8080/update/:id",
    		    {},
    		    {save: {method:'PUT', params: {id: '@id'}}}
    	);
    	
		var user = {};
		user.id = $scope.solicitud_vueloForm.id;
		user.nombre = $scope.solicitud_vueloForm.nombre;
		user.destino = $scope.solicitud_vueloForm.destino;
		user.dia_vuelo = $scope.solicitud_vueloForm.dia_vuelo;
		user.fecha_solicitud = $scope.solicitud_vueloForm.fecha_solicitud;
		user.status = $scope.solicitud_vueloForm.status;
		
		$scope.Message = User.save({id: $scope.solicitud_vueloForm.id}, user);
				
		$scope.solicitud_vueloForm.id = "";
		$scope.solicitud_vueloForm.nombre="";
		$scope.solicitud_vueloForm.destino="";
		$scope.solicitud_vueloForm.dia_vuelo="";
		$scope.solicitud_vueloForm.fecha_solicitud="";
		$scope.solicitud_vueloForm.status="";
    };
    
    
    
}]);