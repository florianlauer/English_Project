// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('starter', ['ionic', 'game1', 'game2']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('/', {
      url: '/',
      templateUrl: 'templates/welcome.html'
  })
  .state('menu', {
      url: '/menu',
      templateUrl: 'templates/menu.html'
  })
  .state('question', {
    url: '/question',
    templateUrl: 'templates/question.html',
  })
  .state('rules_1', {
    url: '/rules_1',
    templateUrl: 'templates/rules_1.html',
  })
  .state('rules_2', {
    url: '/rules_2',
    templateUrl: 'templates/rules_2.html',
  })
  .state('game_1', {
    url: '/game_1',
    templateUrl: 'templates/game_1.html',
    controller: 'game1Ctrl'
  })
  .state('game_2', {
    url: '/game_2',
    templateUrl: 'templates/game_2.html',
    controller: 'game2Ctrl'
  })
  $urlRouterProvider.otherwise('/')

}]);


