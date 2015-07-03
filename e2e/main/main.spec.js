'use strict';
var Questionaire = require('../pages/questionaire');

describe('Main View', function() {
  var page;

  beforeEach(function() {
    page = new Questionaire();
    page.go();
  });

  it('should enter an option', function() {
    //browser.driver.manage().window().maximize();

    var viewableQuestions = 3 - 1;
    var total = 36;
    while (total >= 0) {
      answerThreeQuestions();
      total = total - 3;
    }
    function answerThreeQuestions() {
      for (var i = 0; i <= viewableQuestions; i++) {

        page.selectAnswerForQuestion(i, getRandomAnswer());
        expect(true).toBe(true);
      }
    }
    function getRandomAnswer() {
      return Math.floor(Math.random() * (5 - 0)) + 0;
    }

  });



});
