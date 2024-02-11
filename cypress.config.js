const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1280,
	viewportHeight: 720,
  e2e: {
    baseUrl: 'https://front.serverest.dev',
  },
  fixturesFolder: false,
});
