const { defineConfig } = require("cypress");
//After installing the cypress-cucumber-preprocessor plugin we need to import those methods/functions in your cypres
// to do  so we need use below statement to import the default methods  
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: "qyuk9w",

  e2e: {
    //retries:2,
   
    setupNodeEvents(on, config) {
      // to use  cucumber in cypress as per the plugin developer instructions 
      //we use-  on('file:preprocessor',cucumber())
      on('file:preprocessor',cucumber())

    },
    specPattern: "cypress/e2e/cucumber/feature/*.feature"
  },
});
