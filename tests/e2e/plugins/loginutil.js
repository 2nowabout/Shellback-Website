class LoginUtil {
  static login() {
    const username = Cypress.env("TESTINGUSERNAME");
    const password = Cypress.env("TESTINGPASSWORD");
    // Perform the login operation here
    cy.visit("/"); // Replace with your login page URL
    cy.get("#input-9").type(username);
    cy.get("#input-13").type(password);
    cy.get(".v-btn").click();
  }
}

module.exports = LoginUtil;
