const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")




module.exports = defineConfig({

 
  
  
  viewportHeight: 960,
  viewportWidth: 1536,


  
  
  
  e2e: {
    baseUrl: 'https://automationpratice.com.br',
    defaultCommandTimeout: 5000,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
