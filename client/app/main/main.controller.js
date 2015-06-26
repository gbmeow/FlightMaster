'use strict';

angular.module('flightMasterApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.listOfExercises = [];

    $http.get('/api/exercises').success(function(exercisesList) {
      $scope.listOfExercises = exercisesList;
    });

  });
