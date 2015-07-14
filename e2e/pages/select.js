/**
 * Created by jerzybatalinski on 15-07-14.
 */

module.exports = function() {

  //Great article https://github.com/angular/protractor/blob/master/docs/locators.md

  this.go = function () {
    return browser.get('/');
  };

  this.getSelect = function(model, number) {
    return element.all(by.model(model)).get(number);
  }

  this.getOption = function(model, number, option) {
    return this.getSelect(model, number).all(by.tagName('option')).get(option);
  }

  this.enterOption = function(model, number, option) {
    return this.getOption(model, number, option).click();
  }

  this.currentOption = function(model, number) {
    return this.getSelect(model, number).$('option:checked');
  }

}
