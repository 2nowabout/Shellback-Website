import LoginUtil from "../plugins/loginutil";

describe("Testing information loading", () => {
  it("testing if information is loaded", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8080/home");
    cy.get(".pa-4");
  });
});
