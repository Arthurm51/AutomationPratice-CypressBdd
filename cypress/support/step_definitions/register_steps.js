/// <reference types="cypress"/>

import 'cypress-real-events/support';
import { faker } from '@faker-js/faker';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from '../pages/home_page';
import register_page from '../pages/register_page';
import utils from '../pages/utils';

const elements = utils.elements
const validEmail = faker.internet.email()
const validName = faker.person.fullName()

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