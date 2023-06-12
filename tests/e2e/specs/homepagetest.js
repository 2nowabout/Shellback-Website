import LoginUtil from "../plugins/loginutil";

describe("Testing information loading", () => {
  it("testing if information is loaded", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.contains("tbody > :nth-child(1) > :nth-child(1)", "Testing");
  });
  it("testing amount of found child elements found in list", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get(".pa-4").find("tr").should("have.length", 2);
  })
});

describe("Test searchbar", () => {
  it("Test searching testing company", () => {
        LoginUtil.login();
        cy.url().should("eq", "http://localhost:8081/home");
        cy.get("#input-48").type("Testing");
        cy.get(".pa-4").find("tr").should("have.length", 3);
  })
  it("Test searching testing1 company", () => {
    LoginUtil.login();
    cy.url().should("eq", "http://localhost:8081/home");
    cy.get("#input-48").type("Testing2");
    cy.get(".pa-4").find("tr").should("have.length", 2)
  })
})

describe("Load notification page by clicking on notification", () => {
  it("Click on first item", () => {
    LoginUtil.login();
        cy.url().should("eq", "http://localhost:8081/home");
        cy.wait(400)
        cy.get("tbody > :nth-child(1)").click();
        cy.url().should("eq", "http://localhost:8081/notifications");
        cy.get(".pa-4").find("tr").should("have.length", 2);
  })
  it("Click on second item", () => {
    LoginUtil.login();
            cy.url().should("eq", "http://localhost:8081/home");
            cy.wait(400);
            cy.get("tbody > :nth-child(2)").click();
            cy.url().should("eq", "http://localhost:8081/notifications");
            cy.get(".pa-4").find("tr").should("have.length", 5);
  })
})