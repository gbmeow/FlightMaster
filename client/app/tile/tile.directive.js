'use strict';

angular.module('flightMasterApp')
  .directive('tile', function () {
    return {
      templateUrl: 'app/tile/tile.html',
      restrict: 'A',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });
