import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import 'cypress-real-events/support';
import home_page from "../pages/home_page";




const visibleCss = {
    visibility: 'visible',
    opacity: '1',
    transform: 'none'
};

When("eu estou no modal de top product", () => {
    cy.get("#electronics_top_product")
})

When("eu clico na aba {string} e o botão é ativo", (button) => {
    home_page.navigationBarTopProducts(button)
})

When("adiciono o produto na sacola", () => {
    cy.get('#video .product_item_two')
    .first()
    .realHover()
    .find('.product_button')
    .invoke('css', visibleCss)
    .should('be.visible', {timeout:3000})
    .find('.fa-shopping-bag')
    .click()

})
When("adiciono o produto aos favoritos", () => {

})
When("visualizo o produto top maximizado", () => {

})
When("adiciono o produto na sacola com o modal aberto", () => {

})
When("fecho o modal de produtos top", () => {

})

Then("eu vejo a {string} e o {string} corretos apresentados", (id, product) => {
    home_page.checkNavigationTopProducts(id, product)
})

Then("o modal de produto adicionado na sacola é exibido e fechado", () => {

})
Then("o modal de produto adicionado aos favoritos é exibido e fechado", () => {

})
Then("o modal do produto maximizado é exibido", () => {

})
Then("o modal de produtos top é fechado", () => {

})

