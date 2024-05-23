Feature: HomeTopProducts
    Eu como cliente
    Quero visualizar todas as abas dos top produtos na home
    Para adicionar os produtos a sacola, favoritos e visualizar a pdp

    Background: Acessar a home
        Given eu estou na home
        When eu estou no modal de top product

    Scenario Outline: Selecionar abas do top products
    And eu clico na aba "<aba>" e o botão é ativo
    Then eu vejo a "<selecao>" e o "<produto>" corretos apresentados

    Examples:
        | aba | selecao | produto |
        | Vaideo & Audio | #video | Movie Projector HD Outdoor |
        | Audio & Home | #audio | Powerbeats Pro Wireless Earbuds |
        | Camera & Photo | #camera | Fossil Men's Quartz Watch |
        | Home & Garden | #home | New Apple AirPods Max |

    Scenario: Adicionar produto top na sacola
        And adiciono o produto na sacola
        Then o modal de produto adicionado na sacola é exibido e fechado

    Scenario: Adicionar produto top aos favoritos
        And adiciono o produto aos favoritos
        Then o modal de produto adicionado aos favoritos é exibido e fechado

    Scenario: Visualizar produto top maximizado
        And visualizo o produto top maximizado
        Then o modal do produto maximizado é exibido
        
    Scenario: Adicionar produto top ao carrinho e fechar modal
        And visualizo o produto top maximizado
        And o modal do produto maximizado é exibido
        And adiciono o produto na sacola com o modal aberto
        And fecho o modal de produtos top
        Then o modal de produtos top é fechado
        And o modal de produto adicionado na sacola é exibido e fechado