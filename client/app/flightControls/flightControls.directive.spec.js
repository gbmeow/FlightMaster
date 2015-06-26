'use strict';

describe('Directive: flightControls', function () {

  // load the directive's module and view
  beforeEach(module('flightMasterApp'));
  beforeEach(module('app/flightControls/flightControls.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flight-controls></flight-controls>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the flightControls directive');
  }));
});