import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import 'cypress-real-events/support';
import home_page from "../pages/home_page";

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



Then('eu sou redirecionado para a URL {string}', (urlEsperada) => {
    home_page.checkUrl(urlEsperada)
  })
  