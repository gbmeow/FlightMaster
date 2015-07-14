'use strict';

angular.module('flightMasterApp')
  .controller('MainCtrl', function ($scope, $http) {
    //$scope.listOfExercises = [];
    //
    //$http.get('/api/exercises').success(function(exercisesList) {
    //  $scope.listOfExercises = exercisesList;
    //});

    var vm = this;

    vm.model = {};
    vm.model.id = "2";
    vm.date = {
      from: {month: 1, year: 2015},
      to: {month: 2, year: 2016}
    };

    //var start = 6;
    //var end = 36;

    //vm.save = function(id, qid) {
    //  vm.questions.pop();
    //  if (start < end) {
    //    vm.questions.unshift({questionId: start,
    //      title: start + 'How are you?',
    //      description: 'This is where you tell us'});
    //  }
    //
    //  start++;
    //};
    //
    //vm.questions = [
    //  {questionId: 1, title: '1How are you?', description: 'This is where you tell us'},
    //  {questionId: 2, title: '2How are you?', description: 'This is where you tell us'},
    //  {questionId: 3, title: '3How are you?', description: 'This is where you tell us'}
    //];
    //
    //vm.answerOptions = [
    //  {id: 1, text: 'happy'},
    //  {id: 2, text: 'less happy'},
    //  {id: 3, text: 'happy less +'},
    //  {id: 4, text: 'happy less ++'},
    //  {id: 5, text: 'happy less +++'}
    //];

  });
