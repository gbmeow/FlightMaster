'use strict';

angular.module('flightMasterApp')
  .controller('ExerciseCtrl', function ($stateParams) {
    var vm = this;
    vm.id = $stateParams.id;
    vm.title = $stateParams.title;

    vm.exercises = {};
    vm.exercises.initialSettings = {
      13: {
        power: 100,
        rudder: 'slipping',
        controlColumn: 5
      }
    }
  });
