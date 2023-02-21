"use strict";

var knex = require('knex');
var client;
var url = "";
function setUrl(_url) {
  url = _url;
}
var onConnected;
function setOnConnected(callback) {
  onConnected = callback;
}
var onFailure;
function setOnFailure(callback) {
  onFailure = callback;
}
;
function initialize() {
  var _onConnected, _onFailure;
  if (!url) throw new Error("url not defined");
  var config = {
    client: 'sqlite3',
    connection: {
      filename: url
    },
    useNullAsDefault: true
  };
  this.client = knex(config);
  this.client.client.config ? (_onConnected = onConnected) === null || _onConnected === void 0 ? void 0 : _onConnected() : (_onFailure = onFailure) === null || _onFailure === void 0 ? void 0 : _onFailure();
}
module.exports = {
  url: setUrl,
  onConnected: setOnConnected,
  onFailure: setOnFailure,
  initialize: initialize,
  client: client
};