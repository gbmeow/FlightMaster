'use strict';

describe('Controller: GameTwoZeroCtrl', function () {

  // load the controller's module
  beforeEach(module('flightMasterApp'));

  var GameTwoZeroCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameTwoZeroCtrl = $controller('GameTwoZeroCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
