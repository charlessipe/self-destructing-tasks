'use strict';

angular.module('destructingTaskListApp', [
  'firebase',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

/*
destructingTaskListApp.directive('changeState', function(){
  return {
    templateUrl: 'app/main/main.html',
    replace: true,
    restrict: 'A',
    link: function(scope, element, attributes) {
      var $seekBar = $(element);
 
      $seekBar.click(function(event) {
        updateSeekPercentage($seekBar, event);
      });
    }
  }
}
*/
