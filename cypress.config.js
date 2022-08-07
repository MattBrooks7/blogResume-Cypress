const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      // implement node event listeners here
      baseUrl: 'http://localhost:3000'
  }
})
