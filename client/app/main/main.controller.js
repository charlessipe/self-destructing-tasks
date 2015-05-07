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
        priority: $scope.priorityLevel,
        timestamp: moment().format("MMM Do, hh:mmA")
      }

      $scope.exampleTasks.$add(newTodo);  // Push input onto array
      $scope.exampleTasks.$save();
      $scope.todoText = '';  // Erases the input after submit
    }

    $scope.markComplete = function(start) {
      var newCompletedTask = {
        done: true, 
        name: $scope.exampleTasks[start].name,
        priority: $scope.priorityLevel,
        timestamp: moment().format("MMM Do, hh:mmA")
      }

      $scope.exampleTasks.$add(newCompletedTask);
      $scope.exampleTasks.$save();
      $scope.exampleTasks.$remove(start);

      alert($scope.exampleTasks[start].timestamp);
      //alert(moment().diff(moment($scope.exampleTasks[start].timestamp)));
      alert(moment([2007, 0, 29]).diff(moment([2007, 0, 28]), 'days') + " days"); // 1, works
      alert(moment().diff(moment($scope.exampleTasks[start].timestamp), 'days') + " days"); // shows NAN
      //alert(moment($scope.exampleTasks[start].timestamp).diff(moment([2007, 0, 28]), 'days') + " days"); // 1
      //alert($scope.exampleTasks[start].name);
      //alert(moment().format("ddd, hA"));
      //alert(moment().diff(1390309386.271075)).format('days'));
      //alert(moment().diff($scope.exampleTasks[start].timestamp)).format('days'));

    }

    $scope.removeTask = function(start) {  //remove a task from Firebase

      $scope.exampleTasks.$remove(start);
      
      //$scope.doneTasks.$add(oldTodo); // add todo item to doneTasks array
      //$scope.doneTasks.$save();
    }

    /*
    $scope.destroyTask = function() {
      var timeDifference =  moment(moment().diff(1390309386.271075)).format('H m s'); {

      }
    }
    */



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