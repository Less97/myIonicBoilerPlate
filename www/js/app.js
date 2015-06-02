// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('myBootstrap', ['ionic'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('login', {
        url: '/',
        templateUrl: 'views/login/login.html',
        controller: 'loginCtrl'
         }).state('register', {
            url: '/register',
            templateUrl: 'views/login/register.html',
            controller: 'registerCtrl'
        }).state('tabs', {
            url: '/register',
            abstract: true,
            templateUrl: 'views/main/tabs.html',
        }).state('tabs.home', {
            url: '/home',
            views: {
                "tab-home": {
                    templateUrl: 'views/main/tabHome.html',
                }
            }
        }).state('tabs.list', {
            url: '/home',
            views: {
                "tab-list": {
                    templateUrl: 'views/main/tabList.html',
                }
            }
        }).state('tabs.map', {
             url: '/home',
             views: {
                 "tab-map": {
                     templateUrl: 'views/main/tabMap.html',
                 }
             }
         });
})
