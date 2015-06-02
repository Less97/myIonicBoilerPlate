var myBootstrap = angular.module('myBootstrap')
.service('serviceLayer', ['$http', function ($http) {
    this.login = function (username, password) {
        if (username == "username" && password == "password") {
            return true;
        }
        return false;
    };
    this.register = function (username, password, email) {
        return true;
    }
}])