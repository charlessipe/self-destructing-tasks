'use strict';

angular.module('destructingTaskListApp') //,["firebase"] injecting firebase causes app to break
  .controller('MainCtrl', function ($scope, $http, $firebaseObject, $firebaseArray) {

    var ref = new Firebase("https://glowing-heat-9383.firebaseio.com/"); // Instantiate the Firebase service with the new operator.

    // download the data into a local object
    $scope.data = $firebaseObject(ref);

    // create a synchronized array
    $scope.exampleTasks = $firebaseArray(ref);
    $scope.priorityLevel = 'low';

    $scope.addTodo = function() {   // add a method to scope
      var newTodo = {
        done: false,
        name: $scope.todoText,
        priority: $scope.priorityLevel,
        timestamp: moment().format("MMM Do, hh:mmA"), 
        destructed: false
      }

      $scope.exampleTasks.$add(newTodo);  // Push input onto array
      $scope.exampleTasks.$save();
      $scope.todoText = '';  // Erases the input after submit
    }

    $scope.markComplete = function(start) {
      var newCompletedTask = {
        done: true, 
        name: $scope.exampleTasks[start].name,
        priority: $scope.exampleTasks[start].priority,
        timestamp: moment().format("MMM Do, hh:mmA"), 
        destructed: false
      }

      $scope.exampleTasks.$add(newCompletedTask);
      $scope.exampleTasks.$save();
      $scope.exampleTasks.$remove(start);

      //alert($scope.exampleTasks[start].timestamp);
      //alert(moment().diff(moment($scope.exampleTasks[start].timestamp, "MMM Do, hh:mmA"), "days") + " days");
      //alert(moment().diff(moment($scope.exampleTasks[start].timestamp, "MMM Do, hh:mmA"), "minutes") + " minutes");      
    }

    $scope.removeTask = function(start) {  //remove a task from Firebase
      $scope.exampleTasks.$remove(start);
    }
    
    $scope.destroyTask = function() {  
      //console.log($scope.exampleTasks[start].name); 
      //var taskAge = moment().diff(moment($scope.exampleTasks[start].timestamp, "MMM Do, hh:mmA"), "minutes");
      //var exampleTasks = $scope.exampleTasks; 
      //console.log(exampleTasks);
      for(var i = 0; i < $scope.exampleTasks.length; i++) {  // loop through each task
        //console.log($scope.exampleTasks[i].name);
        console.log(moment().diff(moment($scope.exampleTasks[i].timestamp, "MMM Do, hh:mmA"), "minutes"));
        console.log($scope.exampleTasks[i].done);
        var taskAge = moment().diff(moment($scope.exampleTasks[i].timestamp, "MMM Do, hh:mmA"), "minutes");
        //console.log(taskAge);
        if ((taskAge > 7) & !$scope.exampleTasks[i].done) {
          console.log ("Destroy this task");
          var newDestroyedTask = {  // create new task and remove old task
            done: false, 
            name: $scope.exampleTasks[i].name,
            priority: $scope.exampleTasks[i].priority,
            timestamp: $scope.exampleTasks[i].timestamp, // use time when task created moment().format("MMM Do, hh:mmA"), 
            destructed: true
          }

          $scope.exampleTasks.$add(newDestroyedTask);
          $scope.exampleTasks.$save();
          $scope.exampleTasks.$remove(i); // remove task at index i

        }

      }
      
    }
    
    
    $scope.destroyTask();
  });

