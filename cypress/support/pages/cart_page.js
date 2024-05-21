/// <reference types="cypress"/>

import utils from './utils'

const elements = utils.elements

let textoDaClasse;

const secondProduct = 'tbody > :nth-child(2)'

export default{
    inCartPage(){
        cy.visit('/cart')
    },

    clickTrashIcon(){
        cy.get(`${secondProduct} > ${elements.div.productName}`)
        .invoke('text')
        .then(texto => {
            textoDaClasse = texto;
        });
        
        cy.get(`${secondProduct} > ${elements.div.productRemove}`)
        .click()
    },

    clickEmptyCart(){
        cy.get(elements.div.clearCartModal)
        .find(elements.buttons.cartGeneral)
        .click()
    },

    clickProduct(){
        cy.get(`${secondProduct} > ${elements.div.productName}`)
        .should('be.visible', {timeout: 3000})
        .click()
    },

    changeQuantity(){
        cy.get(`${secondProduct} > ${elements.div.productQuantity}`)
        .clear()
        .type('3')
    },

    fillCoupon(coupon){
        cy.get(elements.fields.coupon)
        .type(coupon)
    },

    clickApplyCoupon(){
        cy.get(elements.div.couponLeftModal)
        .find(elements.buttons.cartGeneral)
        .click()
    },

    goToCheckout(){
        cy.get(elements.div.couponRightModal)
        .find(elements.buttons.cartGeneral)
        .click()
    },

    checkTrashProduct(){
        cy.get(elements.div.cartModal)
        .should('not.contain', textoDaClasse, {timeout: 3000})
    },

    emptyCartMessage(){
        cy.get(elements.div.emptyCartModal)
        .should('be.visible', {timeout:3000})
        .should('have.text', 'YOUR CART IS EMPTYSorry Mate... No Item Found Inside Your Cart!Continue Shopping', {timeout:3000})    
    },

    checkProductValue(){
        cy.get(`${secondProduct} > ${elements.div.productTotal}`)
        .contains('$42.00')
    },

    checkModalError(){
        cy.get(elements.div.errorModal)
        .find(elements.div.imageError)
        .should('be.visible', {timeout: 3000})
        .get(elements.div.successModal)
        .should('have.text', 'Invalid Cuppon Code')

        cy.get(elements.div.errorModal)
        .find(elements.buttons.confirmModal)
        .click()

        cy.get(elements.div.errorModal)
        .should('not.exist', {timeout:3000})
    }


}