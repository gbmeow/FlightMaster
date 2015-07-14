'use strict';

angular.module('flightMasterApp')
  .directive('grid', function () {
    return {
      templateUrl: 'app/grid/grid.html',
      restrict: 'A',
      require: 'ngModel',
      scope: {
        ngModel: '='
      },
      link: function (scope, element, attrs, ngModelCtrl) {
        console.log('here')
      }
    };
  });
