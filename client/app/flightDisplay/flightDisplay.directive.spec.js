'use strict';

describe('Directive: flightDisplay', function () {

  // load the directive's module and view
  beforeEach(module('flightMasterApp'));
  beforeEach(module('app/flightDisplay/flightDisplay.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flight-display></flight-display>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the flightDisplay directive');
  }));
});