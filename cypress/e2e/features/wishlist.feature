Feature: Wishlist
    Eu como cliente
    Quero acessar a aba de favoritos
    Para adicionar, remover e acessar produtos favoritos

    Background: Abrir modal de favoritos
        Given eu estou na home
        And eu clico no botao de favoritos
        And eu visualizo os favoritos

    Scenario: Excluir produto favorito
        When eu clico na lixeira dos favoritos
        Then o produto nao esta mais nos favoritos

    Scenario: Acessar produto dos favoritos
        When eu clico no produto favorito
        Then eu sou redirecionado para a URL "/product-details-one/9"

    Scenario: Acessar pagina de favoritos
        When eu clico no botao da wishlist
        Then eu sou redirecionado para a URL "/wishlist"
