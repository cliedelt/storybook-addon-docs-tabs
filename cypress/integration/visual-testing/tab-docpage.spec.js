/// <reference types="cypress" />

describe("tab docspage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/?path=/story/example-tab-example--page");
  });

  it("displays two tabs", () => {
    getIframeBody()
      .find(".storybook_header")
      .should("not.be.empty")
      .then(() => {
        cy.get("html").toMatchImageSnapshot({});
      });
  });
});

const getIframeBody = () => {
  return cy
    .get("iframe#storybook-preview-iframe")
    .iframe()
    .find("iframe")
    .iframe()
    .then(cy.wrap);
};
