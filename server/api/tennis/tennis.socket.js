/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Tennis = require('./tennis.model');

exports.register = function(socket) {
  Tennis.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Tennis.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('tennis:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('tennis:remove', doc);
}