var myBootstrap = angular.module('myBootstrap');

myBootstrap.controller('loginCtrl', ['$scope',
   function ($scope) {
   		$scope.login = function(){
   			alert('Logged in!');
   		}
   		$scope.register = function()
   		{
   		}
  }]);

myBootstrap.controller('registerCtrl', ['$scope',
  function($scope) {

  }]);

