'use strict';

angular.module('destructingTaskListApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    // Example tasks to show in view
    $scope.exampleTasks = [
    'Buy milk',
    'Check the mail',
    'Practice JavaScript'
    ];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });
