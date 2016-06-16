let assert = require('assert');
let English = require('yadda').localisation.English;

module.exports = (function() {
  
  let result;
  
  return English.library()
    .given("$STRING", function(string, next) {
       result = {}
       next();
    })
    .then("$JSON", function(jsonstring, next) {
      console.log(jsonstring)
       let json = JSON.parse(jsonstring)
       assert.equal(result, json)
       next();
    });
})();
