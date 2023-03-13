"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
var connection;
function setConnection(values) {
  connection = values;
}
var migrationsUrl;
function setMigrationsUrl(url) {
  migrationsUrl = url;
}
var seedsUrl;
function setSeedsUrl(url) {
  seedsUrl = url;
}
function initialize() {
  var _migrationsUrl, _seedsUrl, _onConnected, _onFailure;
  if (!connection) throw new Error("connection not defined");
  var config = {
    client: 'sqlite3',
    connection: _objectSpread({}, connection),
    migrations: {
      directory: (_migrationsUrl = migrationsUrl) !== null && _migrationsUrl !== void 0 ? _migrationsUrl : '.db/migrations'
    },
    seeds: {
      directory: (_seedsUrl = seedsUrl) !== null && _seedsUrl !== void 0 ? _seedsUrl : '.db/migrations'
    },
    useNullAsDefault: true
  };
  this.client = knex(config);
  this.client.client.config ? (_onConnected = onConnected) === null || _onConnected === void 0 ? void 0 : _onConnected() : (_onFailure = onFailure) === null || _onFailure === void 0 ? void 0 : _onFailure();
}
module.exports = {
  setConnection: setConnection,
  setMigrationsUrl: setMigrationsUrl,
  setSeedsUrl: setSeedsUrl,
  onConnected: setOnConnected,
  onFailure: setOnFailure,
  initialize: initialize,
  client: client
};