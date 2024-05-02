Feature: Produtos da semana
    Eu como cliente
    Quero visualizar todas as abas dos produtos da semana na home
    Para adicionar os produtos a sacola, favoritos e visualizar a pdp

    Background: Acessar modal de produtos da semana
        Given eu estou na home

    Scenario: Visualizar produtos da semana
        When acesso o modal de produtos da semana
        Then os produtos da semana sao apresentados

    
  