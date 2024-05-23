import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page";

When("acesso o modal de produtos da semana", () => {
    home_page.checkModalWeeklyProducts()
})
    
Then("os produtos da semana sao apresentados", () => {
    home_page.checkWeeklyProducts()
})