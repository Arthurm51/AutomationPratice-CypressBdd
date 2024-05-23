import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import checkout_page from "../pages/checkout_page";

Given("que estou na pagina do checkout", () => {
    checkout_page.inCheckoutPage()
})

When("eu clico no botao de salvar endereco", () => {
    checkout_page.saveAddress()
})

When("eu preencho os campos de endereco", () => {
    checkout_page.fillAddress()
})

When("eu seleciono o metodo de pagamento", () => {
    checkout_page.selectPaypalPaymentMethod()
})

When("clico no botao de realizar compra", () => {
    checkout_page.doCheckout()
})

Then("é apresentada uma mensagem de erro", () => {
    checkout_page.checkErrorMessage()
})

Then("o endereco é salvo", () => {
    checkout_page.checkAddressSaved()
})

Then("a compra é realizada com sucesso", () => {
    checkout_page.checkSuccessCheckout()
})

Then("eu fecho o modal", () => {
    checkout_page.closeModal()
})