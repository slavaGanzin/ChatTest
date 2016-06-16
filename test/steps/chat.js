'use strict'
let assert = require('assert')
let English = require('yadda').localisation.English
let chat = require('../../lib/chat')

module.exports = (function() {
  let result
  
  return English.library()
    .given("$STRING", function(string, next) {
       result = chat.parse(string)
       next()
    })
    .then("$JSON", function(jsonstring, next) {
       let json = JSON.parse(jsonstring)
       assert.equal(result, json)
       next()
    });
})();
