/// <reference types="cypress" />

describe("tab docspage", () => {
  beforeEach(() => {
    cy.visit(
      "http://localhost:8080/?path=/story/example-tab-example--page"
    ).viewport(1920, 3000);
  });

  it("displays two tabs", () => {
    getIframeBody()
      .find(".storybook_header")
      .should("not.be.empty")
      .then(() => {
        cy.get("html")
          .invoke("css", "height", "3000px")
          .invoke("css", "overflow", "initial");
        cy.get("body")
          .invoke("css", "height", "3000px")
          .invoke("css", "overflow", "initial");
        cy.get("#root").invoke("css", "height", "100%");
        cy.get("#root > div")
          .invoke("css", "position", "relative")
          .invoke("css", "height", "100%");
        cy.wait(100);
        cy.get("html").toMatchImageSnapshot({
          capture: "fullPage",
        });
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
