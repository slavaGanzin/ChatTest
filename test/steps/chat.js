'use strict'
let assert = require('assert')
let English = require('yadda').localisation.English
let chat = require('../../lib/chat')


module.exports = (function() {
  let result
  
  return English.library()
    .given("$STRING", function(string, next) {
      chat.parse(string).then((_result) => {
        result = _result
         next()
       })
    })
    .then("$JSON", function(json, next) {
       assert.deepEqual(JSON.parse(result), JSON.parse(json))
       next()
    });
})();
