'use strict';

describe('Controller: ExerciseCtrl', function () {

  // load the controller's module
  beforeEach(module('flightMasterApp'));

  var ExerciseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExerciseCtrl = $controller('ExerciseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
