'use strict';

describe('Directive: tile', function () {

  // load the directive's module and view
  beforeEach(module('flightMasterApp'));
  beforeEach(module('app/tile/tile.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tile></tile>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the tile directive');
  }));
});