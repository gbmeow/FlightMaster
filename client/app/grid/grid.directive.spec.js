'use strict';

describe('Directive: grid', function () {

  // load the directive's module and view
  beforeEach(module('flightMasterApp'));
  beforeEach(module('app/grid/grid.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div grid ng-model="model"></div>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text().trim()).toBe('hee');
  }));
});
