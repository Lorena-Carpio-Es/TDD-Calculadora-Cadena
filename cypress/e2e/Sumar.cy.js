describe("Sumador", () => {
    it("Muestra el resultado de la suma al usuario", () => {
      cy.visit("/");
      cy.get("#cadena").type("3-2");
      cy.get("#sumar-button").click();
      
      
      cy.get("#resultado-div").invoke("text").then((text) => {
        cy.log("Contenido de resultado-div:", text);
      });
  
    
      cy.get("#resultado-div").should("contain", "Resultado: 5");
    });
  });
  