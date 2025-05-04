/// <reference types="cypress" />
import selectors from '../support/selectors'

describe('Funcionalidade: Tela Login \n- Como usuário da Tela Login do front do ServeRest \n- Quero clicar no botão Entrar \n- Para validar o comportamento da funcionalidade', () => {
  before(() => {
    cy.fixture('usuario').then((usuarioFixture) => {
      cy.obterPorEmailEexcluirUsuarioPorIdPelaAPI(usuarioFixture.admin.emailValido)

      cy.cadastrarUsuarioPelaAPI(usuarioFixture.admin.nomeValido, usuarioFixture.admin.emailValido, usuarioFixture.admin.senhaValida, "true")
    })
  })

  afterEach(() => {
    cy.screenshot()
  })

  context('Dado que eu acesse a tela de Login do front do ServeRest', () => {
    beforeEach(() => {
      cy.visit('/login')
    })

    context('Cenário: Validar Login usuário administrador', () => {
      context('Quando eu informar os campos de email e senha de um usuário administrador', () => {
        beforeEach(() => {
          cy.fixture('usuario').then((usuarioFixture) => {
            cy.realizarLogin(usuarioFixture.admin.emailValido, usuarioFixture.admin.senhaValida)
          })
        })

        it(`Então deverá apresentar a tela Home com o texto ${selectors.HOME.TEXTO_BEM_VINDO.TEXTO} e com o texto ${selectors.HOME.TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE.TEXTO}`, () => {
          cy.url().should('be.equal', `${Cypress.config('baseUrl')}/admin/home`)

          cy.fixture('usuario').then((usuarioFixture) => {
            cy.get(selectors.HOME.TEXTO_BEM_VINDO.SELECTOR)
              .should('be.visible')
              .and('contain', selectors.HOME.TEXTO_BEM_VINDO.TEXTO)
              .and('contain', `${usuarioFixture.admin.nomeValido}`)
          })

          cy.get(selectors.HOME.TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE.SELECTOR)
            .should('be.visible')
            .and('contain', selectors.HOME.TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE.TEXTO)
        })
      })
    })

    context('Esquema do Cenário: Validar Login usuários inválidos', () => {
      const exemplos = [
        { email: 'emailInvalidoVazio', senha: 'senhaInvalidaVazia', mensagem: selectors.LOGIN.FORM.MSG_OBRIGATORIEDADE_CAMPOS_EMAIL_SENHA},
        { email: 'emailInvalidoDominioSemPonto', senha: 'senhaValida', mensagem: selectors.LOGIN.FORM.MSG_CAMPO_EMAIL_INVALIDO},
        { email: 'emailInvalidoNaoCadastrado', senha: 'senhaInvalidaNaoCadastrada', mensagem: selectors.LOGIN.FORM.MSG_CAMPOS_EMAIL_OU_SENHA_INVALIDOS},
      ]

      exemplos.forEach((ex) => {
        context(`Quando eu informar os campos de email e senha incorretamente: ${ex.email} e ${ex.senha}`, () => {
          it(`Então na tela Login deverá apresentar a mensagem ${ex.mensagem}`, () => {
            cy.fixture('usuario').then((usuarioFixture) => {
              cy.realizarLogin(usuarioFixture.invalido[ex.email], usuarioFixture.invalido[ex.senha])
            })

            cy.get(selectors.LOGIN.FORM.SELECTOR)
              .should('be.visible')
              .and('contain', ex.mensagem)
          })
        })
      })
    })
  })
})