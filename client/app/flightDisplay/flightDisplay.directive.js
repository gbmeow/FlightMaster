'use strict';

angular.module('flightMasterApp')
  .directive('flightDisplay', function () {
    return {
      templateUrl: 'app/flightDisplay/flightDisplay.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

        scope.plane = 'assets/images/game-plane.png';

        scope.showNextScene = showNextSceneFn;

        function showNextSceneFn(number) {}
          //Display is here
      }
    };
  });
