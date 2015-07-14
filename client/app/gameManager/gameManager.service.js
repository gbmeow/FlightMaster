'use strict';

angular.module('flightMasterApp')
  .service('gameManager', function (GridService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // Create a new game
    this.newGame = function() {};
    // Handle the move action
    this.move = function() {};
    // Update the score
    this.updateScore = function(newScore) {};
    // Are there moves left?
    this.movesAvailable = function() {
      return GridService.anyCellsAvailable() ||
        GridService.tileMatchesAvailable();
    };


  });
