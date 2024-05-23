/// <reference types="cypress"/>
import 'cypress-real-events/support';
import { faker } from '@faker-js/faker';
import utils from './utils'
import home_page from './home_page';

const elements = utils.elements
const validEmail = faker.internet.email()
const validName = faker.person.fullName()

export default{
    inRegisterPage(){
        cy.visit('/register')
    },

    clickRegisterButton(){
        cy.get(elements.buttons.doRegister)
        .click()
    },

    fillEmail(){
        cy.get(elements.fields.email)
        .type(validEmail)
    },

    fillName(){
        cy.get(elements.fields.name)
        .type(validName)
    },

    fillInvalidEmail(){
        cy.get(elements.fields.email)
        .type('invalid@test.c')
    },

    errorMessage(message){
        cy.get(elements.div.errorMessageRegisterPage)
        .should('have.text', message, { timeout: 3000 })
    },

    checkRegisterSuccess(){
        home_page.checkUrl('/my-account')
        cy.get(elements.div.successIcon)
        .should('be.visible', { timeout: 3000 })
        .get(elements.div.successModal)
        .contains(`Bem-vindo ${validName}`)
    },
}