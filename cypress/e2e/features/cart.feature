Feature: Cart
    Eu como cliente 
    Quero acessar o carrinho
    Para visualizar os produtos do carrinho

    Background: Acessar pagina do carrinho
        Given que estou na pagina do carrinho

    Scenario: Excluir produtos do carrinho por etapa
        When eu clico na lixeira
        Then o produto é excluido

    Scenario: Excluir todos produtos do carrinho
        When eu clico no botao de limpar carrinho
        Then a mensagem de carrinho vazio é apresentada

    Scenario: Clicar em um produto
        When eu clico em um produto
        Then eu sou redirecionado para a URL "/product-details-one/6"

    Scenario: Alterar quantidade de produtos
        When eu altero a quantidade de produtos
        Then o valor do produto é calculado corretamente

    Scenario: Aplicar cupom invalido
        When preencho um cupom invalido
        And clico em aplicar cupom
        Then o modal com a mensagem de erro é exibido e fechado

    Scenario: Prosseguir para o checkout
        When clico para prosseguir com o checkout
        Then eu sou redirecionado para a URL "/checkout-one"