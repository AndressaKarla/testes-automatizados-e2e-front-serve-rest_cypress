const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
		viewportHeight: 720,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const environment = config.env.environment || 'dev'
      config.env = require(`./cypress/support/environments/${environment}.json`)
      config.baseUrl = config.env.urlDefault

      return config
    },
  },
});
