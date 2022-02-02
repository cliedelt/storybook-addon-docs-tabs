/// <reference types="cypress" />

describe("normal docspage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("displays default", () => {
    getIframeBody()
      .find("#docs-root")
      .should("not.be.empty")
      .then(() => {
        cy.get("html").toMatchImageSnapshot();
      });
  });
});

const getIframeBody = () => {
  return cy
    .get("iframe#storybook-preview-iframe")
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
};
