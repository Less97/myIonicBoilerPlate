var myBootstrap = angular.module('myBootstrap');

myBootstrap.controller('loginCtrl', ['$scope', '$state', 'serviceLayer', 'utility',
   function ($scope, $state, serviceLayer) {

       $scope.userData =
       {
           username: '',
           password: '',
           errorMessage: '',
           isErrorShown: function () {
               return $scope.userData.errorMessage != "";
           }
       }

       $scope.loginClick = function () {
           if (serviceLayer.login($scope.userData.username, $scope.userData.password))
               $state.go("tabs.dash");
           $scope.userData.errorMessage = "Username or password not valid";
       }
   }]);

myBootstrap.controller('registerCtrl', ['$scope', 'serviceLayer',
  function ($scope, $state, serviceLayer) {
      $scope.registerClick = function () {
          serviceLayer.register("username", "password", "email");
      }
      $scope.back = function () {
          $state.go('login');
      }
  }]);

