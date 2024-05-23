/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import register_page from '../pages/register_page';

Given("que estou na pagina de registro", () => {
    register_page.inRegisterPage()
})

When("clico no botao registrar", () => {
    register_page.clickRegisterButton()
})

When("eu preencho o campo email", () => {
    register_page.fillEmail()
})

When("eu preencho o campo nome", () => {
    register_page.fillName()
})

When("eu preencho o campo email com um email invalido", () => {
    register_page.fillInvalidEmail()
})

Then("a mensagem de erro no cadastro {string} é apresentada", (message) => {
    register_page.errorMessage(message)    
})

Then("o registro é realizado com sucesso", () => {
    register_page.checkRegisterSuccess()
})