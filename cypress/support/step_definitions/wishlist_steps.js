import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page.js"

When("eu clico na lixeira dos favoritos", () => {
    home_page.deleteFavoriteProduct()
})

When("eu clico no produto favorito", () => {
    home_page.clickFavoriteProduct()
})

When("eu clico no botao da wishlist", () => {
    home_page.clickWishListButton()
})

Then("o produto nao esta mais nos favoritos", () => {
    home_page.checkWishlistEmpty()
})