/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Exercises = require('./exercises.model');

exports.register = function(socket) {
  Exercises.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Exercises.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('exercises:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('exercises:remove', doc);
}