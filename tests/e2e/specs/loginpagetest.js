// https://docs.cypress.io/api/introduction/api.html
import LoginUtil from "../plugins/loginutil";

describe("root page loaded correctly", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains(".v-btn", "LOGIN");
    cy.contains(".font-weight-light", "Hello!");
  });
});

describe("testing redirect on no JWT-token", () => {
  it("Testing redirection", () => {
    cy.visit("/home");
    cy.url().should("eq", "http://localhost:8080/");
  });
});

describe("testing wrong password login error", () => {
  it("Testing error on wrong login", () => {
    cy.visit("/");
    cy.get("#input-9").type("wrong");
    cy.get("#input-13").type("login");
    cy.get(".v-btn").click();
    cy.contains(".v-alert__content", "This login is incorrect!");
    cy.url().should("eq", "http://localhost:8080/");
  });
});

describe("testing empty fields login attempt", () => {
  it("Testing error for login attempt with empty data", () => {
    cy.visit("/");
    cy.get(".v-btn").click();
    cy.contains(".v-alert__content", "Please fill in all fields!");
  });
});

describe("testing login", () => {
  it("testing login logic", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8080/home");
  });
});
