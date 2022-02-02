/// <reference types="cypress" />

describe("tab docspage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/?path=/story/example-tab-example--page");
  });

  it("displays two tabs", () => {
    getIframeBody()
      .find("#docs-root")
      .should("not.be.empty")
      .then(() => {
        cy.get("html").toMatchImageSnapshot();
      });
  });
});

const getIframeBody = () => {
  return cy.get("iframe#storybook-preview-iframe").then(($iframe) => {
    cy.wrap($iframe)
      .should("not.be.empty")
      .find("iframe")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap);
  });
  /*
    .its("0.contentDocument.body", { log: true })
    .find(".react-tabs__tab-panel iframe", { log: true, timeout: 10000 })
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);*/
};
