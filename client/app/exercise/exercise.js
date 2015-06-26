'use strict';

angular.module('flightMasterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exercise', {
        url: '/exercise/:id',
        templateUrl: 'app/exercise/exercise.html',
        controller: 'ExerciseCtrl',
        controllerAs: 'exercise'
      });
  });
