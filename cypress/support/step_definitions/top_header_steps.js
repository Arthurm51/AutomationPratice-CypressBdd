import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page.js"
Given("eu estou na home", () => {
    cy.visit('/')
})


// Acessar Shopping
When("eu vejo a mensagem {string}", (message) => {
    home_page.checkMessage(message)
})

When("eu clico no botão aproveitar", () => {
    home_page.accessShoppingPage()
})

Then("sou redirecionado para a página shopping", () => {
    home_page.checkUrl('/shop')
})



// Acessar Login
When("eu clico no botão de login", () => {
    home_page.accessLoginPage()
})

Then("sou redirecionado para a página de login", () => {
    home_page.checkUrl('/login')
})



// Acessar Cadastro
When("eu clico no botao de cadastro", () => {
    home_page.accessRegisterPage()
})

Then("sou redirecionado para a página de cadastro", () => {
    home_page.checkUrl('/register')
})

