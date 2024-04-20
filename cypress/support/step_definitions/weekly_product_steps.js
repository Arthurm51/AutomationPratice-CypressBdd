import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import 'cypress-real-events/support';
import home_page from "../pages/home_page";

When("acesso o modal de produtos da semana", () => {
    cy.get('#elce_weekly_deal')
    .should('be.visible')
})

Then("os produtos da semana sao apresentados", () => {
    cy.get('#elce_weekly_deal .slick-list .slick-slide')
    .should('be.visible')
    
})
