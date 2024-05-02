import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import 'cypress-real-events/support';
import home_page from "../pages/home_page";



When("eu estou no footer", () => {
    home_page.goToFooter()
})

When("eu clico no botao na coluna Information {string}", (button) => {
    home_page.footerInformationColumn(button)
})

When("eu clico no botao na coluna Shop {string}", (button) => {
    home_page.footerShopColumn(button)
})

When("eu estou na newsletter do footer", () => {
    home_page.footerNewsletter()
})

When("clico em enviar email", () => {
    home_page.sendEmailNewsletter()
})

When("preencho a newsletter com um email invalido", () => {
    home_page.footerTypeInvalidEmailNewsletter()
})

When("preencho a newsletter com um email valido", () => {
    home_page.footerTypeValidEmailNewsletter()
})

When("clicar no botao para voltar ao topo da pagina", () => {
    home_page.goToTopPage()
})

Then("o modal de email confirmado não é visualizado", () => {
    home_page.confirmationEmailModalDontVisible()
})

Then("o modal de email confirmado é visualizado", () => {
    home_page.confirmationEmailModal()
})

Then("o usuario volta ao topo da página", () => {
    home_page.checkInTopPage()
})

