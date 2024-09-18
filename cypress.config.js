const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: "b95726",
  e2e: {
    //retries:2,
   
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    specPattern: "cypress/e2e/cucumber/feature/*.feature"
  },
});
