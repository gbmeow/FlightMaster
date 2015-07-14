'use strict';

angular.module('flightMasterApp')
  .directive('dateRange', function () {
    return {
      templateUrl: 'app/dateRange/dateRange.html',
      restrict: 'EA',
      transclude: true,
      scope: {
        ngModel: '='
      },
      link: function (scope, element, attrs) {

      }
    };
  });
