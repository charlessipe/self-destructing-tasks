'use strict';

angular.module('destructingTaskListApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $stateProvider
      .state('completed', {  // Completed tasks view
        url: '/completed',
        templateUrl: 'app/main/completed.html',
        controller: 'MainCtrl',
    });

  });