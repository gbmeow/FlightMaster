'use strict';

describe('Directive: dateRange', function () {

  // load the directive's module and view
  beforeEach(module('flightMasterApp'));
  beforeEach(module('app/dateRange/dateRange.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<date-range></date-range>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the dateRange directive');
  }));
});