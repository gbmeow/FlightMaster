'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExercisesSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Exercises', ExercisesSchema);