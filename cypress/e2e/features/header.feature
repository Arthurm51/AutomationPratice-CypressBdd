Feature: Header


    Eu como cliente
    Quero visualizar botoes funcionais do Header
    Para acessar páginas, buscar produtos, favoritos e sacola

    Background: Acessar a home
        Given eu estou na home

    # Scenario: Botão QAZANDO
    #     When eu clico no botão de login
    #     And eu clico no botao da logo qazando
    #     Then sou redirecionado para a home

    Scenario Outline: Acessar Paginas do Shop
        When eu deixo o mouse em cima do botao Shop
        And eu clico no botao na aba Shop "<nome_do_botao>"
        Then eu sou redirecionado para a URL "<url_esperada>"

        Examples:
            | nome_do_botao | url_esperada |
            | Shop Four Grid  | /shop  |
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

