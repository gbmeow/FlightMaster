'use strict';

angular.module('flightMasterApp')
  .directive('flightDisplay', function () {
    return {
      templateUrl: 'app/flightDisplay/flightDisplay.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });