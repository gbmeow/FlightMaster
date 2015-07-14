'use strict';

angular.module('flightMasterApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
      'title': 'Home',
      'link': '/'
      },
      {
        'title': '2048 Game',
        'link': '/game-two-zero'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
