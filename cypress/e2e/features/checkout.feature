Feature: Checkout
    Eu como cliente
    Quero realizar o checkout corretamente
    Para ter o pedido feito

    Background: Acessar o checkout
        Given que estou na pagina do checkout

    Scenario: Salvar endereço sem campos preenchidos
        When eu clico no botao de salvar endereco
        Then é apresentada uma mensagem de erro

    Scenario: Salvar endereço com campos preenchidos
        When eu preencho os campos de endereco
        And eu clico no botao de salvar endereco
        Then o endereco é salvo

    Scenario: Realizar compra
        When eu preencho os campos de endereco
        And eu clico no botao de salvar endereco
        And eu seleciono o metodo de pagamento
        And clico no botao de realizar compra
        Then a compra é realizada com sucesso
        And eu fecho o modal