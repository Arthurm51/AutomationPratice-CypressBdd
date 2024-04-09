Feature: TopHeader

    Eu como cliente
    Quero visualizar botões funcionais no topo da pagina
    Para acessar o login, cadastro e shop

    Background: Acessar a home
        Given eu estou na home

    Scenario: Acessar Shopping
        When eu vejo a mensagem "Promoções especiais disponíveis.Aproveitar..."
        And eu clico no botão aproveitar
        Then sou redirecionado para a página shopping

    Scenario: Acessar Login
        When eu clico no botão de login
        Then sou redirecionado para a página de login

    Scenario: Acessar Cadastro
        When eu clico no botao de cadastro
        Then sou redirecionado para a página de cadastro
