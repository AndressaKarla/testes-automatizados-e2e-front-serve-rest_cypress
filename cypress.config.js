const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  videoCompression: 20,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
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
