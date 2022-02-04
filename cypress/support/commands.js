// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-plugin-snapshots/commands";

Cypress.Commands.add("iframe", { prevSubject: "element" }, ($iframe) => {
  return new Cypress.Promise((resolve) => {
    let location = $iframe.get(0).contentWindow.location.href;
    if (
      $iframe.get(0).contentDocument.readyState === "complete" &&
      location !== "about:blank"
    ) {
      resolve($iframe.contents().find("body:first"));
    } else {
      $iframe.on("load", () => {
        resolve($iframe.contents().find("body:first"));
      });
    }
  });
});
