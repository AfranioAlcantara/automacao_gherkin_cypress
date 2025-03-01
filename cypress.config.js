const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  chromeWebSecurity: false,
  stepDefinitions: [
    "cypress/support/step_definitions/**/**/*.{js,mjs,ts,tsx}"
  ],
  e2e: {
    specPattern: 'cypress/integration/**/**/**/*.{js,jsx,ts,tsx,feature}',
    baseUrl: "https://seubarriga.wcaquino.me/",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      charts: true
    },

    setupNodeEvents(on, config) {
      // Adicionando mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      // Configurando o preprocessor para Cucumber
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);

      return config;
    }
  }
});