Feature: Header
    Eu como cliente
    Quero visualizar botoes funcionais do Header
    Para acessar páginas, buscar produtos, favoritos e sacola

    Background: Acessar a home
        Given eu estou na home

    Scenario: Botão QAZANDO
        When eu estou na pagina Shop
        And eu clico no botao da logo qazando
        Then eu sou redirecionado para a URL "/"

    Scenario: Acessar Pagina Electronics do Home
        When eu deixo o mouse em cima do botao Home
        And eu clico no botao Eletronics
        Then eu sou redirecionado para a URL "/electronics"
    

    Scenario Outline: Acessar Paginas do Shop
        When eu deixo o mouse em cima do botao Shop
        And eu clico no botao na aba Shop "<nome_do_botao>"
        Then eu sou redirecionado para a URL "<url_esperada>"

        Examples:
            | nome_do_botao | url_esperada |
            | Shop Four Grid  | /shoppppp |
            | Shop Three Grid | /shopTwo |
            | Shop List View | /shoplist |
            | Shop Left Sidebar | /shop-left-bar |
            | Shop Right Sidebar | /shop-right-bar |
            | Product Single | /product-details-one/1 |
            | Product Single Two | /product-details-two/1 |
            | Cart View Two | /cartTwo |
            | Checkout View One | /checkout-one |
            | Wishlist | /wishlist |
            | Order Tracking | /order-tracking |
            | Order Complete | /order-complete |

    Scenario Outline: Acessar Paginas do Pages
        When eu deixo o mouse em cima do botao Pages
        And eu clico no botao na aba Pages "<nome_do_botao>"
        Then eu sou redirecionado para a URL "<url_esperada>"
    
        Examples:
            | nome_do_botao | url_esperada |
            | Customer Dashboard | /my-account |
            | About Us | /about |
            | Contact Us Two | /contact-two |
            | Frequently Questions | /faqs |
            | Login | /login |

    Scenario: Abrir modal favoritos
        When eu clico no botao de favoritos
        Then eu visualizo os favoritos

    Scenario: Fechar modal favoritos
        When eu clico no botao de favoritos
        And eu visualizo os favoritos
        And eu clico no botao de fechar favoritos
        Then o modal de favoritos é fechado

    Scenario: Abrir modal da sacola
        When eu clico no botao da sacola
        Then eu visualizo a sacola

    Scenario: Fechar modal da sacola
        When eu clico no botao da sacola
        And eu visualizo a sacola
        And eu clico no botao de fechar sacola
        Then o modal de sacola é fechado

    Scenario: Realizar pesquisa por produto
        When eu clico no botao de pesquisa
        And eu digito "Computador"
        And eu clico em pesquisar
        Then o modal de pesquisa com sucesso é apresentado
        And os produtos são apresentados na tela

    Scenario: Fechar modal de busca
        When eu clico no botao de pesquisa
        And eu clico no botao de fechar modal de busca
        Then o modal de busca é fechado