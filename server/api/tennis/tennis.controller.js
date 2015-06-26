'use strict';

var _ = require('lodash');
var Tennis = require('./tennis.model');

// Get list of tenniss
exports.index = function(req, res) {
  Tennis.find(function (err, tenniss) {
    if(err) { return handleError(res, err); }
    return res.json(200, tenniss);
  });
};

// Get a single tennis
exports.show = function(req, res) {
  Tennis.findById(req.params.id, function (err, tennis) {
    if(err) { return handleError(res, err); }
    if(!tennis) { return res.send(404); }
    return res.json(tennis);
  });
};

// Creates a new tennis in the DB.
exports.create = function(req, res) {
  Tennis.create(req.body, function(err, tennis) {
    if(err) { return handleError(res, err); }
    return res.json(201, tennis);
  });
};

// Updates an existing tennis in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Tennis.findById(req.params.id, function (err, tennis) {
    if (err) { return handleError(res, err); }
    if(!tennis) { return res.send(404); }
    var updated = _.merge(tennis, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, tennis);
    });
  });
};

// Deletes a tennis from the DB.
exports.destroy = function(req, res) {
  Tennis.findById(req.params.id, function (err, tennis) {
    if(err) { return handleError(res, err); }
    if(!tennis) { return res.send(404); }
    tennis.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}