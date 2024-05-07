import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page.js"


When("eu clico na lixeira dos favoritos", () => {
    cy.get('.offcanvas-wishlist-wrapper')
    .find('.fa-trash')
    .then($elements => {
        const elementsReversed = [...$elements].reverse();
        elementsReversed.forEach($el => {
          cy.wrap($el).click();
        });
      });
      
})

When("eu clico no produto favorito", () => {
    cy.get('.offcanvas-wishlist-wrapper')
    .contains('Boho Tops for Girls')
    .click()
})

When("eu clico no botao da wishlist", () => {
    cy.get('.offcanvas-wishlist-wrapper')
    .find('.btn_md')
    .click()
})

Then("o produto nao esta mais nos favoritos", () => {
    cy.get('.offcanvas-wishlist-wrapper')
    .get('.offcanvas-wishlist-item-single')
    .should('not.be.visible', {timeout: 3000})
})









