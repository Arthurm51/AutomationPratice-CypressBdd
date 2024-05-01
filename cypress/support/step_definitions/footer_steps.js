import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import 'cypress-real-events/support';
import home_page from "../pages/home_page";
import { faker } from '@faker-js/faker';


When("eu estou no footer", () => {
    cy.get('#footer_one')
    .should('be.visible')
})

When("eu clico no botao na coluna Information {string}", (button) => {
    cy.get('.col-lg-3.col-md-6 .footer_one_widget')
    .contains(button)
    .click()
})

When("eu clico no botao na coluna Shop {string}", (button) => {
    cy.get('.col-lg-2 .footer_one_widget')
    .contains(button)
    .click()
})

When("eu estou na newsletter do footer", () => {
    cy.get('.col-md-12 .footer_one_widget')
    .should('be.visible')
    .as('footerNewsletter')
})

When("clico em enviar email", () => {
    cy.get('@footerNewsletter')
    .find('.btn_md')
    .click()
})

When("preencho a newsletter com um email invalido", () => {
    cy.get('@footerNewsletter')
    .find('.form-control')
    .type('testeinvalido')
})

When("preencho a newsletter com um email valido", () => {
    cy.get('@footerNewsletter')
    .find('.form-control')
    .type(faker.internet.email())
})

Then("o modal de email confirmado não é visualizado", () => {
    cy.get('.swal2-icon-success')
    .should('not.exist')
})

Then("o modal de email confirmado é visualizado", () => {
    cy.get('.swal2-icon-success')
    .should('be.visible')
})

