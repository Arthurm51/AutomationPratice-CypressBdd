Feature: Footer
    Eu como cliente
    Quero visualizar botoes funcionais do Footer
    Para acessar as páginas institucionais

    Background: Acessar a home
        Given eu estou na home
        When eu estou no footer

    Scenario Outline: Acessar Paginas do Information no Footer
        And eu clico no botao na coluna Information "<nome_do_botao>"
        Then eu sou redirecionado para a URL "<url_esperada>"

        Examples:
            | nome_do_botao | url_esperada |
            | Home  | / |
            | About us | /about |
            | Privacy Policy | /privacy-policy |
            | Frequently Questions | /faqs |
            | Order Tracking | /order-tracking |
            | Compare | /compare |

    Scenario Outline: Acessar Paginas do Shop no Footer
        And eu clico no botao na coluna Shop "<nome_do_botao>"
        Then eu sou redirecionado para a URL "<url_esperada>"

        Examples:
            | nome_do_botao | url_esperada |
            | Cart View One  | /cart |
            | Cart View Two | /cartTwo |
            | Empty Cart | /empty-cart |
            | Checkout View One | /checkout-one |
            | Checkout View Two | /checkout-two |
            | Wishlist | /wishlist |

    Scenario: Envio sem e-mail na newsletter
        And eu estou na newsletter do footer
        And clico em enviar email
        Then o modal de email confirmado não é visualizado

    Scenario: Envio com e-mail incorreto na newsletter
        And eu estou na newsletter do footer
        And preencho a newsletter com um email invalido
        And clico em enviar email
        Then o modal de email confirmado não é visualizado

    Scenario: Envio com e-mail correto na newsletter
        And eu estou na newsletter do footer
        And preencho a newsletter com um email valido
        And clico em enviar email
        Then o modal de email confirmado é visualizado

    Scenario: Voltar ao topo da página
        And clicar no botao para voltar ao topo da pagina
        Then o usuario volta ao topo da página