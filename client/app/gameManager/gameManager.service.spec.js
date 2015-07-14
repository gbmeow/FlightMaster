'use strict';

describe('Service: gameManager', function () {

  // load the service's module
  beforeEach(module('flightMasterApp'));

  var _gridService;
  beforeEach(module(function($provide) {
    _gridService = {
      anyCellsAvailable: angular.noop,
      tileMatchesAvailable: angular.noop
    };

    // Switch out the real GridService for our
    // fake version
    $provide.value('GridService', _gridService);
  }));

  // instantiate service
  var gameManager;
  beforeEach(inject(function (_gameManager_) {
    gameManager = _gameManager_;
  }));


  it('should do something', function () {
    expect(!!gameManager).toBe(true);
    expect(!!_gridService).toBe(true);

  });

  it('should report true if there are matches available', function() {
    spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
    spyOn(_gridService, 'tileMatchesAvailable').andReturn(true);
    expect(gameManager.movesAvailable()).toBeTruthy();
  });
  it('should report false if there are no cells nor matches available', function() {
    spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
    spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
    expect(gameManager.movesAvailable()).toBeFalsy();
  });


});
