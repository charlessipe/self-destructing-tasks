'use strict';

angular.module('destructingTaskListApp') //,["firebase"] injecting firebase causes app to break
  .controller('MainCtrl', function ($scope, $http, $firebaseObject, $firebaseArray) {

    var ref = new Firebase("https://glowing-heat-9383.firebaseio.com/"); // Instantiate the Firebase service with the new operator.

    // download the data into a local object
    $scope.data = $firebaseObject(ref);

    // create a synchronized array
    $scope.exampleTasks = $firebaseArray(ref);

    /*$scope.exampleTasks.$add({
      done: false,
      name: 'Buy Milk'
    });
  
    $scope.exampleTasks.$save();
    */

    $scope.addTodo = function() {   // add a method to scope
      var newTodo = {
      done: false,
      name: $scope.todoText,
      //timestamp: new Date().getTime();
      };

      $scope.exampleTasks.$add(newTodo);  // Push input onto array
      $scope.exampleTasks.$save();

      $scope.todoText = '';  // Erases the input after submit
    }

    // Example tasks to show in view
    /*$scope.exampleTasks = [
      {done: false, name:'Buy milk'},
      {done: false, name: 'Check the mail'},
      {done: true, name: 'Practice JavaScript'},
    ];*/

    /*
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.awesomeThings = [
      {done: false, name:'Eat carrots'},
      {done: false, name: 'Run 2 miles'},
      {done: false, name: 'Do 100 pushups'},
    ];
    */
  });



//, $firebaseObject