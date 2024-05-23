import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page";

Given("eu estou na home", () => {
    home_page.inHomePage()
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

When("eu clico no botao de favoritos", () => {
    home_page.openWishlistHeader()
})

When("eu clico no botao de fechar favoritos", () => {
    home_page.closeWishlistHeader()
})

When("eu clico no botao da sacola", () => {
    home_page.openCartlistHeader()
})

When("eu clico no botao de fechar sacola", () => {
    home_page.closeCartlistHeader()
})

When("eu clico no botao de pesquisa", () => {
    home_page.clickSearchButton()
})

When("eu digito {string}", (string) => {
    home_page.typeSearch(string)
})

When("eu clico em pesquisar", () => {
    home_page.doSearch()
})

When("eu clico no botao de fechar modal de busca", () => {
    home_page.closeSearchModal()
})

Then('eu sou redirecionado para a URL {string}', (urlEsperada) => {
    home_page.checkUrl(urlEsperada)
  })

Then('eu visualizo os favoritos', () => {
    home_page.checkWishlistModalVisible()
})

Then('o modal de favoritos é fechado', () => {
    home_page.checkWishlistModalNotVisible()
})

Then('eu visualizo a sacola', () => {
    home_page.checkCartlistModalVisible()
})

Then('o modal de sacola é fechado', () => {
    home_page.checkCartlistModalNotVisible()
})

Then('o modal de pesquisa com sucesso é apresentado', () => {
    home_page.checkAndCloseSuccessSearchModal()
})

Then('os produtos são apresentados na tela', () => {
    home_page.searchPageContainProduct()
})

Then('o modal de busca é fechado', () => {
    home_page.checkCloseSearchModal()
})