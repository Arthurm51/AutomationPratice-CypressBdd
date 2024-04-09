/// <reference types="cypress"/>

import 'cypress-real-events/support';

// Elements

const elements = {
    buttons: {
        shopping: 'p > a',
        login: '.fa-user',
        register: '.fa-lock'
    },
    fields: {
        name: '#user'
        

    },
    messages: {
        
    },
    div: {
        topHeaderShop: '.top_header_left',
        topHeaderUserArea: '.top_header_right'

    }
}



function invokeCss(selector) {
    return cy.get(selector).invoke('css', {
        visibility: 'visible',
        opacity: '1',
        transform: 'none'
    })
    .should('be.visible', { timeout: 3000 })
    
    
}




// Usages
export default{

    // General
        // URL
        checkUrl(urlEsperada){
            cy.url().should('eq', `${Cypress.config().baseUrl}${urlEsperada}`)
        },

        



    // Top Header
        // Shopping
        checkMessage(message){
            cy.get(elements.div.topHeaderShop)
            .should('exist')
            .should('have.text', message)
        },

        accessShoppingPage(){
            cy.get(elements.div.topHeaderShop)
            .should('exist')
            .get(elements.buttons.shopping)
                .click()
        },

        

        // Login
        accessLoginPage(){
            cy.get(elements.div.topHeaderUserArea)
            .should('exist')
            .get(elements.buttons.login)
                .should('exist')
                .click()
        },

        

        // Cadastro
        accessRegisterPage() {
            cy.get(elements.div.topHeaderUserArea)
            .should('exist')
            .get(elements.buttons.register)
                .should('exist')
                .click()
        },

        

    // Header
        


        // Shop
        checkDropdownShop(){
            invokeCss('.has-dropdown.has-megaitem')
            .realHover()
            invokeCss('.mega-menu')
            invokeCss('.menu-banner')
            .should('be.visible')
            
            
        },

        clickDropdownShopButton(button){
            invokeCss('.mega-menu')
                .contains(button)
                .invoke('css', 'visibility', 'visible')
                .invoke('css', 'transform', 'none')
                .invoke('css', 'opacity', '1')
                .should('be.visible', { timeout: 3000 })
                .click()
        },


        // Pages
        checkDropdownPages(){
            invokeCss('#menuHome')
            .realHover()
            invokeCss('.sub-menu')
            .should('be.visible', { timeout: 3000 })
        },

        clickDropdownPagesButton(button){
            invokeCss('.sub-menu')
                .contains(button)
                .invoke('css', 'visibility', 'visible')
                .invoke('css', 'transform', 'none')
                .invoke('css', 'opacity', '1')
                .should('be.visible', { timeout: 3000 })
                .click()
        },

        

        
}