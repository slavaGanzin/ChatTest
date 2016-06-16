'use strict'

let Yadda = require('yadda')
Yadda.plugins.mocha.StepLevelPlugin.init()

new Yadda.FeatureFileSearch('./test/features').each((file) => {

  featureFile(file, (feature) => {

    let library = require(__dirname+'/steps/chat.js')
    let yadda = Yadda.createInstance(library)

    scenarios(feature.scenarios, (scenario) => {
      steps(scenario.steps, (step, done) => {
        yadda.run(step, done)
      });
    });
  });
});
