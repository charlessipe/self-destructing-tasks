'use strict';

angular.module('destructingTaskListApp') //,["firebase"] injecting firebase causes app to break
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      {done: false, name:'Eat carrots'},
      {done: false, name: 'Run 2 miles'},
      {done: false, name: 'Do 100 pushups'},
    ];

    var ref = new Firebase("https://glowing-heat-9383.firebaseio.com/"); // Instantiate the Firebase service with the new operator.

    // download the data into a local object
    //$scope.data = $firebaseObject(ref);

    // create a synchronized array
    //$scope.tasks = $firebaseArray(ref);

    $scope.addTodo = function() {   
      var newTodo = {
      done: false,
      name: $scope.todoText
      };

      $scope.exampleTasks.push(newTodo);  // Push input onto array
    
      $scope.todoText = '';  // Erases the input after submit
    }

    /* $scope.hideOldTasks = function() {
      if (exampleTasks.timestamp > 7 days) {
        nghide = true;
      } 

      else {
        nghide = false;
      }

    };
    */

    $scope.todoItems = [
      {done: false, name: 'Set a goal'}
    ];

    // Example tasks to show in view
    $scope.exampleTasks = [
      {done: false, name:'Buy milk'},
      {done: false, name: 'Check the mail'},
      {done: false, name: 'Practice JavaScript'},
    ];

    
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  });


//['firebase','ui.router'] 

//, $firebaseObject