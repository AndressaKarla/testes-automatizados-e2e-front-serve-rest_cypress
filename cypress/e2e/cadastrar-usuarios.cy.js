/// <reference types="cypress" />
import selectors from '../support/selectors'

describe('Cadastrar Usuários', () => {
  before(() => {
    cy.fixture('usuario').then((usuarioFixture) => {
      cy.obterPorEmailEexcluirUsuarioPorIdPelaAPI(usuarioFixture.admin.emailValido2)
    })
  })

  beforeEach(() => {
    // Acessar a tela de Login do front do ServeRest
    cy.visit('/login')
  })

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      cy.screenshot()
    }
  })

  const exemplos = [
    { nome: 'nomeValido2', email: 'emailValido2', senha: 'senhaValida2', mensagem: selectors.LOGIN.FORM.MSG_SUCESSO_CADASTRO_USUARIO },
    { nome: 'nomeInvalidoVazio', email: 'emailInvalidoVazio', senha: 'senhaInvalidaVazia', mensagem: selectors.LOGIN.FORM.MSG_OBRIGATORIEDADE_CAMPOS_NOME_EMAIL_SENHA },
    { nome: 'nomeValido3', email: 'emailInvalidoDominioSemPonto', senha: 'senhaValida3', mensagem: selectors.LOGIN.FORM.MSG_CAMPO_EMAIL_INVALIDO },
  ]

  exemplos.forEach((ex) => {
    it(`Cenário: Cadastrar usuário válido ou inválido (${ex.email} e ${ex.senha}) - Apresentar mensagem ${ex.mensagem}`, () => {
        cy.get(selectors.LOGIN.OPCAO_CADASTRE_SE)
          .should('be.visible')

          // Clicar na opção Cadastre-se
          .click()

        // Estar na tela Cadastro
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/cadastrarusuarios`)
      
      cy.fixture('usuario').then((usuarioFixture) => {
        // Informar os campos de email e senha válidos ou inválidos
        cy.cadastrarUsuario(usuarioFixture.admin[ex.nome], usuarioFixture.admin[ex.email], usuarioFixture.admin[ex.senha])
      })

      cy.get(selectors.LOGIN.FORM.SELECTOR)
        .should('be.visible')

        // Na tela Cadastro apresentar mensagens de obrigatoriedade ou de cadastro realizado com sucesso
        .and('contain', ex.mensagem)
    })
  })
})
