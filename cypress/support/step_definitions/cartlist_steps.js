import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page.js"


When("eu clico na lixeira da sacola", () => {
    cy.get('.offcanvas-add-cart-wrapper')
    .find('.fa-trash')
    .then($elements => {
        const elementsReversed = [...$elements].reverse();
        elementsReversed.forEach($el => {
          cy.wrap($el).click();
        });
      });
      
})

When("eu clico no produto da sacola", () => {
    cy.get('.offcanvas-add-cart-wrapper')
    .contains('Fit-Flare Dress')
    .click()
})

When("eu clico no botao do carrinho", () => {
    cy.get('.offcanvas-add-cart-wrapper')
    .contains('View Cart')
    .click()
})

When("eu clico no botao do checkout", () => {
    cy.get('.offcanvas-add-cart-wrapper')
    .contains('Checkout')
    .click()
})

Then("o produto nao esta mais na sacola", () => {
    cy.get('.offcanvas-add-cart-wrapper')
    .get('.offcanvas-wishlist-item-single')
    .should('not.be.visible', {timeout: 3000})
})

