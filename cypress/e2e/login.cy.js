/// <reference types="cypress" />
import selectors from '../support/selectors'

describe('Login', () => {
  before(() => {
    cy.fixture('usuario').then((usuarioFixture) => {
      cy.obterPorEmailEexcluirUsuarioPorIdPelaAPI(usuarioFixture.admin.emailValido)

      cy.cadastrarUsuarioPelaAPI(usuarioFixture.admin.nomeValido, usuarioFixture.admin.emailValido, usuarioFixture.admin.senhaValida, "true")
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

  it('Cenário: Login com usuário administrador - Apresentar tela Home com textos de boas vindas e de administrar ecommerce', () => {
    cy.fixture('usuario').then((usuarioFixture) => {
      // Informar os campos de email e senha de um usuário administrador
      cy.realizarLogin(usuarioFixture.admin.emailValido, usuarioFixture.admin.senhaValida)
    })

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/admin/home`)

    cy.fixture('usuario').then((usuarioFixture) => {
      cy.get(selectors.HOME.TEXTO_BEM_VINDO.SELECTOR)
        .should('be.visible')

        // Apresentar a tela Home com texto Bem Vindo 
        .and('contain', selectors.HOME.TEXTO_BEM_VINDO.TEXTO)
        .and('contain', `${usuarioFixture.admin.nomeValido}`)
    })

    cy.get(selectors.HOME.TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE.SELECTOR)
      .should('be.visible')

      // Apresentar a tela Home com texto Este é seu sistema para administrar seu ecommerce
      .and('contain', selectors.HOME.TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE.TEXTO)
  })

  const exemplos = [
    { email: 'emailInvalidoVazio', senha: 'senhaInvalidaVazia', mensagem: selectors.LOGIN.FORM.MSG_OBRIGATORIEDADE_CAMPOS_EMAIL_SENHA },
    { email: 'emailInvalidoDominioSemPonto', senha: 'senhaValida', mensagem: selectors.LOGIN.FORM.MSG_CAMPO_EMAIL_INVALIDO },
    { email: 'emailInvalidoNaoCadastrado', senha: 'senhaInvalidaNaoCadastrada', mensagem: selectors.LOGIN.FORM.MSG_CAMPOS_EMAIL_OU_SENHA_INVALIDOS },
  ]

  exemplos.forEach((ex) => {
    it(`Cenário: Login com usuário inválido (${ex.email} e ${ex.senha}) - Apresentar mensagem ${ex.mensagem}`, () => {
      cy.fixture('usuario').then((usuarioFixture) => {
        // Informar os campos de email e senha inválidos
        cy.realizarLogin(usuarioFixture.invalido[ex.email], usuarioFixture.invalido[ex.senha])
      })

      cy.get(selectors.LOGIN.FORM.SELECTOR)
        .should('be.visible')

        // Na tela Login apresentar mensagens de obrigatoriedade ou de campos inválidos
        .and('contain', ex.mensagem)
    })
  })
})