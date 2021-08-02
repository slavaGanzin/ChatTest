'use strict'
let assert = require('assert')
let English = require('yadda').localisation.English
const {execSync} = require('child_process')

module.exports = (function() {
  let result

  return English.library()
    .given("$STRING", function(string, next) {
      result = execSync('python test.py').toString()
      next()
    })
    .then("$JSON", function(json, next) {
       assert.deepEqual(JSON.parse(result), JSON.parse(json))
       next()
    });
})();
