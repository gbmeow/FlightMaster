'use strict';

angular.module('flightMasterApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game-two-zero', {
        url: '/game-two-zero',
        templateUrl: 'app/game-two-zero/game-two-zero.html',
        controller: 'GameTwoZeroCtrl',
        controllerAs: 'gameCtrl'
      });
  });
