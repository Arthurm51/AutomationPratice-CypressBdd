/// <reference types="cypress"/>
import 'cypress-real-events/support';
import { faker } from '@faker-js/faker';
import utils from './utils'

const elements = utils.elements
const visibleCss = {
    visibility: 'visible',
    opacity: '1',
    transform: 'none'
};
const footerNewsletter = 'footerNewsletter'

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
            cy.url().should('eq', `${Cypress.config().baseUrl}${urlEsperada}`, {timeout: 3000})
        },

        inHomePage(){
                cy.visit('/')
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
        modalTopProducts(){
            cy.get(elements.div.topProductModal)
        },

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
        },

        addTopProductToCart(){
            cy.get(elements.div.topProductProduct)
            .first()
            .realHover()
            .find(elements.buttons.modalActionsProduct)
            .invoke('css', visibleCss)
            .should('be.visible', {timeout:3000})
            .find(elements.buttons.bag)
            .click()
        },

        addTopProductToWishlist(){
            cy.get(elements.div.topProductProduct)
            .first()
            .realHover()
            .find(elements.buttons.modalActionsProduct)
            .invoke('css', visibleCss)
            .should('be.visible', {timeout:3000})
            .find(elements.buttons.heart)
            .click()
        },

        viewTopProductsDetails(){
            cy.get(elements.div.topProductProduct)
            .first()
            .realHover()
            .find(elements.buttons.modalActionsProduct)
            .invoke('css', visibleCss)
            .should('be.visible', {timeout:3000})
            .find(elements.buttons.eye)
            .click()
        },

        addTopProductToCartDetails(){
            cy.get(elements.buttons.modalProductAddCart)
            .click()
        },

        closeTopProductDetails(){
            cy.get(elements.buttons.closeModalDetailsIcon)
            .click() 
        },

        checkAddCartTopProductModal(){
            cy.get(elements.div.productAddModal)
            .should('be.visible')
            .contains('Successfully added to your Cart')
            .get(elements.div.sucessTitle)
            .should('be.visible')
            cy.get(elements.div.productAddModal)
            .should('not.exist', {timeout: 3000})
        },

        checkAddWishlistTopProductModal(){
            cy.get(elements.div.productAddModal)
            .should('be.visible')
            .contains('Added to Wishlist')
            .get(elements.div.sucessTitle)
            .should('be.visible')
            .get(elements.buttons.confirmModal)
            .click()
            cy.get(elements.div.productAddModal)
            .should('not.exist', {timeout: 3000})
        },

        checkTopProductDetails(){
            cy.get(elements.div.productDetailsModal)
            .should('be.visible')
            .contains('Movie Projector HD Outdoor')
            cy.get(elements.div.productDetailsModal)
            .contains('Add To Cart')
        },

        checkTopProductDetailsClosed(){
            cy.get(elements.div.productDetailsModal)
            .should('not.exist', {timeout: 3000})
        },
      
    // Weekly Products
       checkModalWeeklyProducts(){
            cy.get(elements.div.weeklyProductsModal)
            .should('be.visible')
       }, 

       checkWeeklyProducts(){
            cy.get(elements.div.weeklyProducts)
            .should('be.visible')
       }, 

    // Footer
        goToFooter(){
            cy.get(elements.div.footer)
            .should('be.visible') 
        },

        footerInformationColumn(button){
            cy.get(elements.div.footerInformation)
            .contains(button)
            .click()
        },

        footerShopColumn(button){
            cy.get(elements.div.footerShop)
            .contains(button)
            .click()
        },

        footerNewsletter(){
            cy.get(elements.div.footerNewsletterColumn)
            .should('be.visible')
            .as(footerNewsletter)
        },

        sendEmailNewsletter(){
            cy.get(`@${footerNewsletter}`)
            .find(elements.buttons.default)
            .click()
        },

        footerTypeInvalidEmailNewsletter(){
            cy.get(`@${footerNewsletter}`)
            .find(elements.fields.newsletterLabel)
            .type('testeinvalido')
        },

        footerTypeValidEmailNewsletter(){
            cy.get(`@${footerNewsletter}`)
            .find(elements.fields.newsletterLabel)
            .type(faker.internet.email()) 
        },

        goToTopPage(){
            cy.scrollTo('bottom')
            .get(elements.buttons.top)
            .click()
            .wait(1000)
        },

        confirmationEmailModalDontVisible(){
            cy.get(elements.div.successIcon)
            .should('not.exist')
        },

        confirmationEmailModal(){
            cy.get(elements.div.successIcon)
            .should('be.visible')
        },

        checkInTopPage(){
            cy.window().then(win => {
                expect(win.document.documentElement.scrollTop).to.lessThan(50);
            });
        },
      
    //Wishlist
        deleteFavoriteProduct(){
            cy.get(elements.div.wishlistModal)
            .find(elements.buttons.trash)
            .then($elements => {
                const elementsReversed = [...$elements].reverse();
                elementsReversed.forEach($el => {
                  cy.wrap($el).click();
                });
              });
        },

        clickFavoriteProduct(){
            cy.get(elements.div.wishlistModal)
            .contains('Boho Tops for Girls')
            .click()
        },

        clickWishListButton(){
            cy.get(elements.div.wishlistModal)
            .find(elements.buttons.default)
            .click()
        },
        
        checkWishlistEmpty(){
            cy.get(elements.div.wishlistModal)
            .get(elements.div.modalRightSideProduct)
            .should('not.be.visible', {timeout: 3000})
        },
        
    //Cartlist
        deleteCartlistProduct(){
            cy.get(elements.div.cartlistModal)
            .find(elements.buttons.trash)
            .then($elements => {
                const elementsReversed = [...$elements].reverse();
                elementsReversed.forEach($el => {
                cy.wrap($el).click();
                });
            });
        },
        
        clickCartlistProduct(){
            cy.get(elements.div.cartlistModal)
            .contains('Fit-Flare Dress')
            .click()
        },

        clickCartlistButton(){
            cy.get(elements.div.cartlistModal)
            .contains('View Cart')
            .click()
        },

        clickCheckoutCartlistButton(){
            cy.get(elements.div.cartlistModal)
            .contains('Checkout')
            .click()
        },

        checkCartlistEmpty(){
            cy.get(elements.div.cartlistModal)
            .get(elements.div.modalRightSideProduct)
            .should('not.be.visible', {timeout: 3000})
        },
}