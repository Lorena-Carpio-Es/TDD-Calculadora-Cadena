describe("Sumador", () => {
    it("Shows the amount of the addition to the user", () => {
      cy.visit("/");
      cy.get("#cadena").type("6-5-8");
    });
  });