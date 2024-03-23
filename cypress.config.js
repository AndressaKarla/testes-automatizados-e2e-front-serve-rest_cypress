const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.environment || 'dev'
      config.env = require(`./cypress/support/environments/${environment}.json`)
      config.baseUrl = config.env.baseUrl
      const baseUri = config.env.baseUri
      
      return config
    }
  }
})
