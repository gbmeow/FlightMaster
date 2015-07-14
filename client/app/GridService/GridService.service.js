'use strict';

angular.module('flightMasterApp')
  .service('GridService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.grid   = [];
    this.tiles  = [];
    // Size of the board
    this.size   = 4;

  });
