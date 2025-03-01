Feature: Autenticação de Usuário

  Scenario Outline: Login com diferentes credenciais
    Given que o usuário está na página de login
    When o usuário preenche o campo email com "<email>"
    And o usuário preenche o campo senha com "<senha>"
    And o usuário clica no botão de login
    Then o sistema deve exibir a mensagem "<mensagem>"

    Examples:
      | email                    | senha            | mensagem                         |
      | Odenir.Pereira@gmail.com | YFbcsvxZJZHmLDa  | Bem vindo                        |
      | usuario@teste.com        | senhaErrada      | Problemas com o login do usuário |
      |    {insert}              | senha123         | Email é um campo obrigatório     |
      | usuario@teste.com        |    {insert}      | Senha é um campo obrigatório     |
      | usuarioinvalido.com      | senha123         | Inclua um '@'                 |
      | usuario@teste.com        | 123              | Problemas com o login do usuário |