import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import 'cypress-real-events/support';
import home_page from "../pages/home_page";

Given("eu estou na home", () => {
    cy.visit('/')
})

When("eu estou na pagina Shop", () => {
    home_page.visitShopPage()
})

When("eu clico no botao da logo qazando", () => {
    home_page.clickQAzandoImage()
})

When("eu deixo o mouse em cima do botao Home", () => {
    home_page.checkDropdownHome()
})

When("eu clico no botao Eletronics", () => {
    home_page.clickDropdownHomeButton()
})

When("eu deixo o mouse em cima do botao Shop", () => {
    home_page.checkDropdownShop()
})

When("eu clico no botao na aba Shop {string}", (button) => {
    home_page.clickDropdownShopButton(button)
})

When("eu deixo o mouse em cima do botao Pages", () => {
    home_page.checkDropdownPages()
})

When("eu clico no botao na aba Pages {string}", (button) => {
    home_page.clickDropdownPagesButton(button)
})

Then("sou redirecionado para a home", () => {
    home_page.checkUrl('/')
})

Then("sou redirecionado para a URL electronics", () => {
    home_page.checkUrl('/electronics')
})


Then('eu sou redirecionado para a URL {string}', (urlEsperada) => {
    home_page.checkUrl(urlEsperada)
  })
  