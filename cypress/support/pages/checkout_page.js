/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';
import utils from './utils'

const elements = utils.elements


export default{

    inCheckoutPage(){
        cy.visit("/checkout-one")
    },

    saveAddress(){
        cy.get('.checkout-area-bg .theme-btn-one')
        .click()
    },

    fillAddress(){
        cy.get(elements.fields.firstName)
        .type(faker.person.firstName())
        cy.get(elements.fields.lastName)
        .type(faker.person.lastName())
        cy.get(elements.fields.companyName)
        .type(faker.company.name())
        cy.get(elements.fields.email)
        .type(faker.internet.email())
        cy.get(elements.fields.country)
        .select('usa')
        cy.get(elements.fields.city).children('option').eq(1).then(option => {
            cy.get(elements.fields.city).select(option.val());
        });
        cy.get(elements.fields.zipCode)
        .type(faker.location.zipCode())
        cy.get(elements.fields.fullAddress)
        .type(faker.location.streetAddress())
        cy.get(elements.fields.message)
        .type(faker.word.words())
        cy.get(elements.div.saveAddressCheck)
        .check()
        .should('be.checked', {timeout: 3000})
    },

    selectPaypalPaymentMethod(){
        cy.get(elements.div.paypalPayment)
        .check()
        .should('be.checked', {timeout: 3000})
    },

    doCheckout(){
        cy.get(elements.buttons.checkout)
        .click()
    },

    checkErrorMessage(){
        cy.get(elements.div.errorMessageRegisterPage)
        .first()
        .should('be.visible', {timeout: 3000})
        .should('have.text', 'O campo First Name deve ser prenchido')
    },

    checkAddressSaved(){
        cy.get(elements.div.addressSavedMessage)
        .should('have.text', 'Billings Information registred with success!', {timeout:3000})
    },

    checkSuccessCheckout(){
        cy.get(elements.div.successPurchaseModal)
        .should('be.visible', {timeout:3000})
        .contains('Order success!')
    },

    closeModal(){
        cy.get(elements.buttons.closeModalCheckout)
        .click()

        cy.get(elements.div.successPurchaseModal)
        .should('not.exist', {timeout: 3000})
    }

}