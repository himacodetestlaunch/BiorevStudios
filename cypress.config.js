const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false, // important! to disable web security for cross-origin requests
    defaultCommandTimeout: 5000,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
})