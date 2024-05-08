Feature: Login
    Eu como cliente
    Quero realizar o login com sucesso
    Para utilizar o site completo

    Background: Acessar pagina de login
        Given eu estou na pagina de login

    Scenario: Tentativa de login sem preencher campos
        When eu clico no botao de login
        Then a mensagem de erro "E-mail inválido." é apresentada

    Scenario: Tentativa de login sem email
        When eu preencho a senha corretamente
        And eu clico no botao de login
        Then a mensagem de erro "E-mail inválido." é apresentada

    Scenario: Tentativa de login com email invalido
        When eu preencho o email invalido
        And eu preencho a senha corretamente
        And eu clico no botao de login
        Then a mensagem de erro "E-mail inválido." é apresentada

    Scenario: Tentativa de login sem senha
        When eu preencho o email corretamente
        And eu clico no botao de login
        Then a mensagem de erro "Senha inválida." é apresentada

    Scenario: Tentativa de login com senha invalida
        When eu preencho o email corretamente
        And eu preencho a senha invalida
        And eu clico no botao de login
        Then a mensagem de erro "Senha inválida." é apresentada

    Scenario: Login com sucesso
        When eu preencho o email corretamente
        And eu preencho a senha corretamente
        And eu clico no botao de login
        Then o login é realizado com sucesso

    Scenario: Ir para a pagina de cadastro
        When eu clico no botão ainda nao tem conta
        Then sou redirecionado para a pagina de cadastro