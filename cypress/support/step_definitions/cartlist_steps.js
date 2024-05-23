import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page.js"

When("eu clico na lixeira da sacola", () => {
    home_page.deleteCartlistProduct()  
})

When("eu clico no produto da sacola", () => {
    home_page.clickCartlistProduct()
})

When("eu clico no botao do carrinho", () => {
    home_page.clickCartlistButton()
})

When("eu clico no botao do checkout", () => {
    home_page.clickCheckoutCartlistButton()
})

Then("o produto nao esta mais na sacola", () => {
    home_page.checkCartlistEmpty()
})