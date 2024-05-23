Feature: Register
    Eu como cliente
    Quero conseguir me registrar
    Para conseguir logar no site

    Background: Estar na pagina de registro
        Given que estou na pagina de registro

    Scenario: Tentativa de cadastro sem preencher os campos
        When clico no botao registrar
        Then a mensagem de erro no cadastro "O campo nome deve ser prenchido" é apresentada

    Scenario: Tentativa de cadastro sem preencher o campo nome
        When eu preencho o campo email
        And eu preencho a senha corretamente
        And clico no botao registrar
        Then a mensagem de erro no cadastro "O campo nome deve ser prenchido" é apresentada

    Scenario: Tentativa de cadastro sem preencher o campo email
        When eu preencho o campo nome
        And eu preencho a senha corretamente
        And clico no botao registrar
        Then a mensagem de erro no cadastro "O campo e-mail deve ser prenchido corretamente" é apresentada

    Scenario: Tentativa de cadastro com email invalido
        When eu preencho o campo nome
        And eu preencho o campo email com um email invalido
        And eu preencho a senha corretamente
        And clico no botao registrar
        Then a mensagem de erro no cadastro "O campo e-mail deve ser prenchido corretamente" é apresentada

    Scenario: Tentativa de cadastro sem preencher o campo senha
        When eu preencho o campo nome
        And eu preencho o campo email
        And clico no botao registrar
        Then a mensagem de erro no cadastro "O campo senha deve ter pelo menos 6 dígitos" é apresentada

    Scenario: Tentativa de cadastro com senha invalida
        When eu preencho o campo nome
        And eu preencho o campo email
        And eu preencho a senha invalida
        And clico no botao registrar
        Then a mensagem de erro no cadastro "O campo senha deve ter pelo menos 6 dígitos" é apresentada

    Scenario: Cadastro realizado com sucesso
        When eu preencho o campo nome
        And eu preencho o campo email
        And eu preencho a senha corretamente
        And clico no botao registrar
        Then o registro é realizado com sucesso