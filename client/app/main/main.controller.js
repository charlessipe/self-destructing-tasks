'use strict';

angular.module('destructingTaskListApp') //,["firebase"] injecting firebase causes app to break
  .controller('MainCtrl', function ($scope, $http, $firebaseObject, $firebaseArray) {

    var ref = new Firebase("https://glowing-heat-9383.firebaseio.com/"); // Instantiate the Firebase service with the new operator.
    var ref2 = new Firebase("https://completed-tasks.firebaseio.com/");

    // download the data into a local object
    $scope.data = $firebaseObject(ref);

    // create a synchronized array
    $scope.exampleTasks = $firebaseArray(ref);
    $scope.doneTasks = $firebaseArray(ref2);

    $scope.addTodo = function() {   // add a method to scope
      var newTodo = {
        done: false,
        name: $scope.todoText,
        priority: "low",
        timestamp: moment().format("MMM Do, hh:mmA")
      }

      $scope.exampleTasks.$add(newTodo);  // Push input onto array
      $scope.exampleTasks.$save();
      $scope.todoText = '';  // Erases the input after submit
    }

    $scope.markComplete = function(start) {
      var newCompletedTask = {
        done: true, 
        name: "Completed task",
        priority: "low",
        timestamp: "3"
      }

      $scope.exampleTasks.$add(newCompletedTask);
      $scope.exampleTasks.$save();

      alert("hi");
      alert(moment().format("ddd, hA"));

      //$scope.exampleTasks[start].name = true;
    }

    $scope.removeTask = function(start) {  //remove a task from Firebase

      $scope.exampleTasks.$remove(start);
      
      //$scope.doneTasks.$add(oldTodo); // add todo item to doneTasks array
      //$scope.doneTasks.$save();
    }

    /*
    $scope.markComplete = function(start) {  //works to remove task from Firebase
      var oldTodo = {
        done: false,
        name: "Practice, practice, practice",  //$scope.exampleTasks.name[start],
        name2: "Hi-yo"
      }

      $scope.exampleTasks.$remove(start);
      
      $scope.doneTasks.$add(oldTodo); // add todo item to doneTasks array
      $scope.doneTasks.$save();
    }
    /*


      // find current item in the array
      // change done to true $scope.exampleTasks.splice(start, 1);


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