var myBootstrap = angular.module('myBootstrap');

myBootstrap.controller('loginCtrl', ['$scope',
   function ($scope) {
   		$scope.loginClick = function(){
        alert('login!');
      }
  }]);

myBootstrap.controller('registerCtrl', 
  function($scope,$state) {
      $scope.registerClick = function(){
        alert("register!");
      }
      $scope.back  = function(){
        $state.go('login');
      }
  });

