import LoginUtil from "../plugins/loginutil";

describe("move to different pages using the sidebar", () => {
  it("machinepage loading", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get(".v-list--dense > :nth-child(2)").click();
    cy.url().should("eq", "http://localhost:8081/machines");
  });
  it("settingspage loading", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get(".v-list--dense > :nth-child(3)").click();
    cy.url().should("eq", "http://localhost:8081/settings");
  });
  it("logout button works", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get(".v-list--dense > :nth-child(4)").click();
    cy.url().should("eq", "http://localhost:8081/");
  });
  it("homepage loads", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get(".v-list--dense > :nth-child(3)").click();
    cy.url().should("eq", "http://localhost:8081/settings");
    cy.get(".v-list--dense > :nth-child(1)").click();
    cy.url().should("eq", "http://localhost:8081/home");
  });
  it("theme switch works", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get('[style="height: 100vh;"]').should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );
    cy.get(".v-navigation-drawer").click();
    cy.get(".v-btn").click();
    cy.get('[style="height: 100vh;"]').should(
      "have.css",
      "background-color",
      "rgb(30, 30, 30)"
    );
  });
});
