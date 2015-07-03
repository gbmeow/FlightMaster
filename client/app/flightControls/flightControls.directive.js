'use strict';

angular.module('flightMasterApp')
  .directive('flightControls', function () {
    return {
      templateUrl: 'app/flightControls/flightControls.html',
      scope: {
        settings: '='
      },
      restrict: 'EA',
      link: function (scope, element, attrs) {

        /* Rudder Controls */
        var rudder = {};
        rudder.convertRudderValue = convertRudderValueFn;
        rudder.stepOnTheBall = stepOnTheBallFn;


        function setup() {
          scope.controlColumn = scope.settings.controlColumn || 0;
          scope.inclinometer = rudder.convertRudderValue(scope.settings.rudder);
          scope.power = scope.settings.power || 0;
          scope.stepOnTheBall = rudder.stepOnTheBall;
        }

        setup();


        scope.you = function(number) {
          scope.$parent.showNextScene(number);
        }



        function convertRudderValueFn(value) {
          var plane = {
            normal: 73,
            skidding: 120, //plane turning towards outside of turn Ball: to the right
            slipping: 30//plane turning towards inside of turn Ball: to the left
          };
          return plane[value];
        }

        function stepOnTheBallFn(operation, direction) {
          if (direction === 'left') {
            direction = 'normal';
          }
          if (direction === 'right') {
            direction = 'normal';
          }
          scope.inclinometer = rudder.convertRudderValue(direction);
        }
      }
    }
  });
