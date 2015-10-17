'use strict';

var spinnerBankAngularApp = angular.module('spinnerBankAngularApp',[
  
  'ngRoute','productos.controllers','productos.services'
  
])

.config(function($routeProvider){
  $routeProvider
    .when('/',{
	templateUrl:'../../pages/principal.html',
	controller: 'prodController'
    })
    
    .when('/productos',{
	templateUrl:'../../pages/producto.html',
	controller: 'prodController'
    })
    
    .otherwise({
      redirectTo: '/'
    })
});