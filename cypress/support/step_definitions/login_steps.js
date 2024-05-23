import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page.js"
import login_page from "../pages/login_page.js"

Given("eu estou na pagina de login", () => {
    login_page.inLoginPage()
})

When("eu clico no botao de login", () => {
    login_page.clickLoginButton()
})

When("eu preencho a senha corretamente", () => {
    login_page.fillPassword()
})

When("eu preencho o email invalido", () => {
    login_page.fillInvalidEmail()
})

When("eu preencho o email corretamente", () => {
    login_page.fillEmail()
})

When("eu preencho a senha invalida", () => {
    login_page.fillInvalidPassword()
})

When("eu clico no botão ainda nao tem conta", () => {
    login_page.clickNotRegisteredButton()
})

Then("a mensagem de erro {string} é apresentada", (mensagem) => {
    login_page.errorMessage(mensagem)
})

Then("o login é realizado com sucesso", () => {
    login_page.checkSuccessLogin()
})

Then("sou redirecionado para a pagina de cadastro", () => {
    home_page.checkUrl('/register')
})