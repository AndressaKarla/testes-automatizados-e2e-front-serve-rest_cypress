const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  videoCompression: 20,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',

    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    mochaJunitReporterReporterOptions: {
      mochaFile: './cypress/reports/xml/junit-[hash].xml', 
      toConsole: false
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)

      const environment = config.env.environment || 'prod'
      config.env = require(`./cypress/support/environments/${environment}.json`)
      config.baseUrl = config.env.baseUrl
      const baseUri = config.env.baseUri

      return config
    }
  }
})
