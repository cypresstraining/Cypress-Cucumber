const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: "b95726",
  e2e: {
   
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    specPattern: "cypress/e2e/cucumber/feature/*.feature"
  },
});
