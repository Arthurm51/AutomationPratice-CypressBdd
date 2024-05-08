/// <reference types="cypress"/>

import 'cypress-real-events/support';
import { faker } from '@faker-js/faker';
import utils from './utils'
import home_page from './home_page';

const elements = utils.elements
const validEmail = faker.internet.email()

export default{

    inLoginPage(){
        cy.visit('/login')
    },
    clickLoginButton(){
        cy.get(elements.buttons.doLogin)
        .click()
    },
    fillPassword(){
        cy.get(elements.fields.password)
        .type('1234567')
    },
    fillInvalidEmail(){
        cy.get(elements.fields.name)
        .type('invalid@test.c')
    },
    fillEmail(){
        cy.get(elements.fields.name)
        .type(validEmail)
    },
    fillInvalidPassword(){
        cy.get(elements.fields.password)
        .type('1234')
    },
    clickNotRegisteredButton(){
        cy.get(elements.buttons.notRegisteredButton)
        .click()
    },
    errorMessage(mensagem){
        cy.get(elements.div.errorMessage)
        .should('have.text', mensagem, { timeout: 3000 })
    },
    checkSuccessLogin(){
        home_page.checkUrl('/my-account')
        cy.get(elements.div.successIcon)
        .should('be.visible', { timeout: 3000 })
        .get(elements.div.successModal)
        .contains(`Olá, ${validEmail}`)
    }

}