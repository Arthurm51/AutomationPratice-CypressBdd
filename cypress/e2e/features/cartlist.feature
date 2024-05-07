Feature: Cartlist
    Eu como cliente
    Quero acessar a aba do carrinho
    Para adicionar, remover e acessar produtos do carrinho

    Background: Abrir modal do carrtinho
        Given eu estou na home
        And eu clico no botao da sacola
        And eu visualizo a sacola

    Scenario: Excluir produto da sacola
        When eu clico na lixeira da sacola
        Then o produto nao esta mais na sacola

    Scenario: Acessar produto da sacola
        When eu clico no produto da sacola
        Then eu sou redirecionado para a URL "/product-details-one/5"

    Scenario: Acessar pagina do carrinho
        When eu clico no botao do carrinho
        Then eu sou redirecionado para a URL "/cart"

    Scenario: Acessar pagina do checkout
        When eu clico no botao do checkout
        Then eu sou redirecionado para a URL "/checkout-one"