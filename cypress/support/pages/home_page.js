/// <reference types="cypress"/>

import 'cypress-real-events/support';

// Elements
// Variaveis para facilitar a manutenção do codigo
const elements = {
    buttons: {
        shopping: 'p > a',
        login: '.fa-user',
        register: '.fa-lock',
        qazandoLogo: '.header-logo',
        wishlistHeart: '.header-action-link .offcanvas-toggle .fa-heart',
        wishlistClose: '#offcanvas-wishlish .offcanvas-close',
        cartlist: '.header-action-link .offcanvas-toggle .fa-shopping-bag',
        cartlistClose: '#offcanvas-add-cart .offcanvas-close',
        openSearch: '.search_width',
        doSearch: '.btn-main-search',
        closeSearchModal: '#search .close',
        confirmModal:'.swal2-confirm',
        navBarTopProduct: '.nav-tabs'
    },
    fields: {
        name: '#user',
        searchInput: 'form > input',
        

    },
    div: {
        topHeaderShop: '.top_header_left',
        topHeaderUserArea: '.top_header_right',
        dropDownShop: '.has-dropdown.has-megaitem',
        dropDownMegaMenu: '.mega-menu',
        dropDownMenuBanner: '.menu-banner',
        dropDownMenuHome: '#menuHome',
        dropDownHomeSubHome: '.sub-menu',
        wishlistCounter: ':nth-child(1) > .offcanvas-toggle > .item-count',
        wishlistModal: '#offcanvas-wishlish',
        cartlistCounter: '.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle > .item-count',
        cartlistModal: '#offcanvas-add-cart',
        searchModal: '#search',
        successIcon: '.swal2-icon-success',
        sucessTitle: '#swal2-title',
        shopArea: '#shop_main_area'

    }
}


// Functions
// Função que torna os elementos escondidos do dropdown visiveis, invoca o css e altera as caracteristicas
function invokeCss(selector) {
    return cy.get(selector).invoke('css', {
        visibility: 'visible',
        opacity: '1',
        transform: 'none'
    })
    .should('be.visible', { timeout: 3000 }) // Garante que o elemento fique visivel, e aguarda até 3 segundos até que se torne visivel
}


// Usages
export default{

    // General
        // URL
        // Verifica se a url esta correta, (URL base + a url esperada após o /)
        checkUrl(urlEsperada){
            cy.url().should('eq', `${Cypress.config().baseUrl}${urlEsperada}`)
        },

        

    // Top Header
        // Shopping
        // Verifica se a mensagem do topheader esta correta
        checkMessage(message){
            cy.get(elements.div.topHeaderShop)
            .should('exist')
            .should('have.text', message)
        },

        // Verifica o funcionamento do botão aproveitar no top header e o redirecionamento
        accessShoppingPage(){
            cy.get(elements.div.topHeaderShop)
            .should('exist')
            .get(elements.buttons.shopping)
                .click()
        },

        

        // Login
        // Verifica o funcionamento do botão de login e redirecionamento correto
        accessLoginPage(){
            cy.get(elements.div.topHeaderUserArea)
            .should('exist')
            .get(elements.buttons.login)
                .should('exist')
                .click()
        },

        

        // Cadastro
        // Verifica o funcionamento do botão de cadastro e redirecionamento correto
        accessRegisterPage() {
            cy.get(elements.div.topHeaderUserArea)
            .should('exist')
            .get(elements.buttons.register)
                .should('exist')
                .click()
        },

        

    // Header
        // Botao QAZANDO
        // Visita a pagina Shop
        visitShopPage(){
            cy.visit('/shop')
        },

        // Clica na imagem de logo do qazando
        clickQAzandoImage(){
            cy.get(elements.buttons.qazandoLogo)
                .click()
        },


        // Home
        // Checa o hover do dropdown home
        checkDropdownHome(){
            cy.get(elements.div.dropDownMenuHome)
                .realHover()
                .get(elements.div.dropDownHomeSubHome)
                .should('be.visible', { timeout: 3000 })
        },

        // Clica no botão electronics do dropdown home
        clickDropdownHomeButton(){
            invokeCss(elements.div.dropDownHomeSubHome)
            invokeCss('#item0')
            .click()
        },


        // Shop
        // Verifica se o dropdown do header da aba Shop está funcionando corretamente
        checkDropdownShop(){
            invokeCss(elements.div.dropDownShop) // Torna as classes visiveis
            .realHover() // Passa o mouse em cima
            invokeCss(elements.div.dropDownMegaMenu)
            invokeCss(elements.div.dropDownMenuBanner)
            .should('be.visible') // Garante que esteja visivel
        },

        // Clica em todos os botoes do dropdown (os botoes esão setados no Scenario Outline em header.feature)
        clickDropdownShopButton(button){
            invokeCss(elements.div.dropDownMegaMenu)
                .contains(button)
                .invoke('css', 'visibility', 'visible')
                .invoke('css', 'transform', 'none')
                .invoke('css', 'opacity', '1')
                .should('be.visible', { timeout: 3000 })
                .click()
        },


        // Pages
        // Verifica se o dropdown do header da aba Pages está funcionando corretamente
        checkDropdownPages(){
            invokeCss(elements.div.dropDownMenuHome)
            .realHover()
            invokeCss(elements.div.dropDownHomeSubHome)
            .should('be.visible', { timeout: 3000 })
        },

        // Clica em todos os botoes do dropdown (os botoes esão setados no Scenario Outline em header.feature)
        clickDropdownPagesButton(button){
            invokeCss(elements.div.dropDownMenuHome)
            invokeCss(elements.div.dropDownHomeSubHome)
                .contains(button)
                .invoke('css', 'visibility', 'visible')
                .invoke('css', 'transform', 'none')
                .invoke('css', 'opacity', '1')
                .should('be.visible', { timeout: 3000 })
                .click()
        },

        

    // Header/Wishlist
        openWishlistHeader(){
            cy.get(elements.div.wishlistCounter)
            .should('be.visible')
            cy.get(elements.buttons.wishlistHeart)
            .first()
            .click()
        },

        closeWishlistHeader(){
            cy.get(elements.buttons.wishlistClose)
            .click()
            .wait(2000)
        },

        checkWishlistModalVisible(){
            cy.get(elements.div.wishlistModal)
            .should('be.visible', { timeout: 3000 })
        },

        checkWishlistModalNotVisible(){
            cy.get(elements.div.wishlistModal)
            .should('not.be.visible', { timeout: 3000 })
        },

    
    // Header/Cart
        openCartlistHeader(){
            cy.get(elements.div.cartlistCounter)
            .should('be.visible')
            cy.get(elements.buttons.cartlist)
            .first()
            .click()
        },

        closeCartlistHeader(){
            cy.get(elements.buttons.cartlistClose)
            .click()
            .wait(2000)
        },

        checkCartlistModalVisible(){
            cy.get(elements.div.cartlistModal)
            .should('be.visible', { timeout: 3000 })
        },

        checkCartlistModalNotVisible(){
            cy.get(elements.div.cartlistModal)
            .should('not.be.visible', { timeout: 3000 })
        },

    // Header/Search
        clickSearchButton(){
            cy.get(elements.buttons.openSearch)
            .first()
            .click()
        },

        typeSearch(string){
            cy.get(elements.div.searchModal)
            .should('be.visible', {timeout:3000})
            .get(elements.fields.searchInput)
            .type(string)
        },

        doSearch(){
            cy.get(elements.buttons.doSearch)
            .click()
        },

        closeSearchModal(){
            cy.get(elements.buttons.closeSearchModal)
            .click()
            .wait(1000)
        },

        checkAndCloseSuccessSearchModal(){
            cy.get(elements.div.successIcon)
            .should('be.visible', {timeout:3000})
            .get(elements.div.sucessTitle)
            .contains('Success')
            .get(elements.buttons.confirmModal)
            .click()
        },

        searchPageContainProduct(){
            cy.get(elements.div.shopArea)
            .contains('Green Dress For Woman')
        },

        checkCloseSearchModal(){
            cy.get(elements.div.searchModal)
            .should('not.be.visible')
        },

    //Top Products
        navigationBarTopProducts(button){
            cy.get(elements.buttons.navBarTopProduct)
            .contains(button)
            .click()
            .should('have.css', 'background-color', 'rgb(0, 200, 207)', {timeout: 3000})
        },

        checkNavigationTopProducts(id, product){
            cy.get(id)
            .should('be.visible', {timeout:3000})
            .contains(product)
        }
    



      
}