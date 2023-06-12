import LoginUtil from "../plugins/loginutil";

describe("Testing Settingspage newUser errors", () => {
  it("settingspage empty fields error", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get(".v-list--dense > :nth-child(3)").click();
    cy.url().should("eq", "http://localhost:8081/settings");
    cy.get(":nth-child(9) > .v-btn").click();
    cy.contains(
      ":nth-child(10) > .red > .v-alert__wrapper > .v-alert__content",
      "Please fill in all fields!"
    );
  });
  it("settingspage passwords not equal error", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get(".v-list--dense > :nth-child(3)").click();
    cy.url().should("eq", "http://localhost:8081/settings");
    cy.get("#input-85").type("test");
    cy.get("#input-86").type("test");
    cy.get("#input-87").type("test");
    cy.get("#input-89").type("test123");
    cy.get(":nth-child(9) > .v-btn").click();
    cy.contains(
      ":nth-child(10) > .red > .v-alert__wrapper > .v-alert__content",
      "Passwords not Equal"
    );
  });
});

describe("Testing Settingspage changePassword errors", () => {
  it("settingspage empty fields error", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get(".v-list--dense > :nth-child(3)").click();
    cy.url().should("eq", "http://localhost:8081/settings");
    cy.get(":nth-child(7) > .v-btn").click();
    cy.contains(
      ".row > .ma-0 > .red > .v-alert__wrapper > .v-alert__content",
      "Please fill in all fields!"
    );
  });
  it("settingspage password not correct error", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get(".v-list--dense > :nth-child(3)").click();
    cy.url().should("eq", "http://localhost:8081/settings");
    cy.get("#input-98").type("test");
    cy.get("#input-99").type("test");
    cy.get("#input-101").type("test");
    cy.get(":nth-child(7) > .v-btn").click();
    cy.wait(400);
    cy.contains(
      ".row > .ma-0 > .red > .v-alert__wrapper > .v-alert__content",
      "Password Update Failed!"
    );
  });
  it("settingspage passwords not equal error", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get(".v-list--dense > :nth-child(3)").click();
    cy.url().should("eq", "http://localhost:8081/settings");
    cy.get("#input-98").type("test");
    cy.get("#input-99").type("test");
    cy.get("#input-101").type("test3");
    cy.get(":nth-child(7) > .v-btn").click();
    cy.contains(
      ".row > .ma-0 > .red > .v-alert__wrapper > .v-alert__content",
      "Passwords not Equal"
    );
  });
});
