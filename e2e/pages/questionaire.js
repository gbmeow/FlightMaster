module.exports = function() {

  this.go = function() {
    return browser.get('/');
  };

  this.getQuestions = function() {
    return element.all(by.repeater('qu in main.questions'));
  };

  this.getQuestion = function(n) {
    return this.getQuestions().get(n);
  };

  this.getAnswersForQuestion = function(n) {
    return this.getQuestion(n)
      .all(by.repeater('answer in main.answerOptions'));
  };

  this.getAnswerForQuestion = function(n, i) {
    return this.getAnswersForQuestion(n)
      .get(i)
      .element(by.tagName('input'));
  };

  this.selectAnswerForQuestion = function(n, i) {
    return this.getAnswerForQuestion(n, i).click();
  };


};
