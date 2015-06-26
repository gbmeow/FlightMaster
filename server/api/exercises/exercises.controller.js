'use strict';

var _ = require('lodash');
var Exercises = require('./exercises.model');

// Get list of exercisess
exports.index = function(req, res) {
  Exercises.find(function (err, exercisess) {
    if(err) { return handleError(res, err); }
    return res.json(200, exercisess);
  });
};

// Get a single exercises
exports.show = function(req, res) {
  Exercises.findById(req.params.id, function (err, exercises) {
    if(err) { return handleError(res, err); }
    if(!exercises) { return res.send(404); }
    return res.json(exercises);
  });
};

// Creates a new exercises in the DB.
exports.create = function(req, res) {
  Exercises.create(req.body, function(err, exercises) {
    if(err) { return handleError(res, err); }
    return res.json(201, exercises);
  });
};

// Updates an existing exercises in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Exercises.findById(req.params.id, function (err, exercises) {
    if (err) { return handleError(res, err); }
    if(!exercises) { return res.send(404); }
    var updated = _.merge(exercises, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, exercises);
    });
  });
};

// Deletes a exercises from the DB.
exports.destroy = function(req, res) {
  Exercises.findById(req.params.id, function (err, exercises) {
    if(err) { return handleError(res, err); }
    if(!exercises) { return res.send(404); }
    exercises.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}