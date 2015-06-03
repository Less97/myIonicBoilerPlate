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
         })
        .state('register', {
            url: '/register',
            templateUrl: 'views/login/register.html',
            controller: 'registerCtrl'
         })
        .state('tabs', {
            url: '/tabs',
            abstract: true,
            templateUrl: 'views/main/tabs.html',
        })
        .state('tabs.dash', {
            url: '/tabs/dash',
            views: {
                "tab-dash": {
                    templateUrl: 'views/main/tab-dash.html',
                }
            }
        }).state('tabs.chats', {
            url: '/tab/chats',
            views: {
                "tab-chats": {
                    templateUrl: 'views/main/tab-chats.html',
                }
            }
        }).state('tabs.account', {
            url: '/tab/account',
             views: {
                 "tab-account": {
                     templateUrl: 'views/main/tab-account.html',
                 }
             }
         });
})
