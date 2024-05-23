import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import cart_page from "../pages/cart_page";

Given("que estou na pagina do carrinho", () => {
    cart_page.inCartPage()
})

When("eu clico na lixeira", () => {
    cart_page.clickTrashIcon()
})

When("eu clico no botao de limpar carrinho", () => {
    cart_page.clickEmptyCart()
})

When("eu clico em um produto", () => {
    cart_page.clickProduct()
})

When("eu altero a quantidade de produtos", () => {
    cart_page.changeQuantity()
})

When("preencho um cupom invalido", () => {
    cart_page.fillCoupon('teste')
})

When('clico em aplicar cupom', () => {
    cart_page.clickApplyCoupon()
})

When('clico para prosseguir com o checkout', () => {
    cart_page.goToCheckout()
})

Then("o produto é excluido", () => {
    cart_page.checkTrashProduct()
})

Then("a mensagem de carrinho vazio é apresentada", () => {
    cart_page.emptyCartMessage()
})

Then("o valor do produto é calculado corretamente", () => {
    cart_page.checkProductValue()
})

Then("o modal com a mensagem de erro é exibido e fechado", () => {
    cart_page.checkModalError()
})