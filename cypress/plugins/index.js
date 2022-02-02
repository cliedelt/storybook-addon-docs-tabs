/// <reference types="cypress" />

const { initPlugin } = require("cypress-plugin-snapshots/plugin");

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  initPlugin(on, config);
  return config;
};
