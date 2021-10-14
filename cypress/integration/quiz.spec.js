/// <reference types="cypress" />

context("Quiz", () => {
  beforeEach(() => {
    cy.viewport(360, 640);
    cy.visit("http://localhost:3000");
  });

  it("begins quiz", () => {
    cy.findByRole("link", { name: "Begin" }).click();
    cy.findByText("Question 1 of 10");
  });

  it("moves progress indicator", () => {
    cy.findByRole("link", { name: "Begin" }).click();
    cy.findByText("Question 1 of 10");

    cy.findByText("True").click();
    cy.findByText("Question 2 of 10");
  });

  it("displays results", () => {
    cy.clock();
    cy.findByRole("link", { name: "Begin" }).click();

    for (let i = 1; i <= 10; i++) {
      cy.findByText(`Question ${i} of 10`);
      cy.clock().tick(500);
      cy.findByText("True").click();
    }

    cy.findByText("Results");
    cy.findByText("You scored");
    cy.findByText("Try again?");
  });

  it("goes back to home page", () => {
    cy.clock();
    cy.findByRole("link", { name: "Begin" }).click();

    for (let i = 1; i <= 10; i++) {
      cy.findByText(`Question ${i} of 10`);
      cy.clock().tick(500);
      cy.findByText("True").click();
    }

    cy.findByText("Try again?").click();
  });
});
