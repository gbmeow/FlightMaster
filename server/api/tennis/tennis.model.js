'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TennisSchema = new Schema({
  item: String,
  lastname: String,
  qty: Number
});

module.exports = mongoose.model('Tennis', TennisSchema);
