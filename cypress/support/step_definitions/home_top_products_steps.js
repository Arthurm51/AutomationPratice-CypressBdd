import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import 'cypress-real-events/support';
import home_page from "../pages/home_page";


When("eu estou no modal de top product", () => {
    home_page.modalTopProducts()
})

When("eu clico na aba {string} e o botão é ativo", (button) => {
    home_page.navigationBarTopProducts(button)
})

When("adiciono o produto na sacola", () => {
    home_page.addTopProductToCart()
})
When("adiciono o produto aos favoritos", () => {
    home_page.addTopProductToWishlist()
})
When("visualizo o produto top maximizado", () => {
    home_page.viewTopProductsDetails()
})
When("adiciono o produto na sacola com o modal aberto", () => {
    home_page.addTopProductToCartDetails()
})
When("fecho o modal de produtos top", () => {
    home_page.closeTopProductDetails()
})

Then("eu vejo a {string} e o {string} corretos apresentados", (id, product) => {
    home_page.checkNavigationTopProducts(id, product)
})

Then("o modal de produto adicionado na sacola é exibido e fechado", () => {
    home_page.checkAddCartTopProductModal()
})
Then("o modal de produto adicionado aos favoritos é exibido e fechado", () => {
    home_page.checkAddWishlistTopProductModal()
})
Then("o modal do produto maximizado é exibido", () => {
    home_page.checkTopProductDetails()
})
Then("o modal de produtos top é fechado", () => {
    home_page.checkTopProductDetailsClosed()
})

