/**
 * Created by jerzybatalinski on 15-07-14.
 */

'use strict';
var Select = require('../pages/select');

describe('Main View', function() {
  var page;

  beforeEach(function() {
    page = new Select();
    page.go();
  });

  it('should select valid option', function() {

    var FIRST_SELECT = 0;
    var SECOND_SELECT = 1;

    var fromMonth = page.enterOption('ngModel.month', FIRST_SELECT, 1);
    var fromYear  = page.enterOption('ngModel.year', FIRST_SELECT, 2);

    var toMonth = page.enterOption('ngModel.month', SECOND_SELECT, 0);
    var toYear  = page.enterOption('ngModel.year', SECOND_SELECT, 0);

    browser.sleep(2000);
    expect(page.currentOption('ngModel.month', FIRST_SELECT).getText()).toEqual('One');
    expect(page.currentOption('ngModel.year', FIRST_SELECT).getText()).toEqual('2017');
    expect(page.currentOption('ngModel.month', SECOND_SELECT).getText()).toEqual('Zero');
    expect(page.currentOption('ngModel.year', SECOND_SELECT).getText()).toEqual('2015');

  });



});
