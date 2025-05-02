/// <reference types="cypress" />
import selectors from '../support/selectors'

describe('Funcionalidade: Tela Cadastro de usuários \n- Como usuário da Tela Login do front do ServeRest \n- Quero clicar na opção Cadastre-se \n- Para validar o comportamento da funcionalidade', () => {
  before(() => {
    cy.fixture('usuario').then((usuarioFixture) => {
      cy.obterPorEmailEexcluirUsuarioPorId(usuarioFixture.admin.emailValido2)
    })
  })

  afterEach(() => {
    cy.screenshot()
  })

  context('Dado que eu acesse a tela de Login do front do ServeRest', () => {
    context('E que eu clique na opção Cadastre-se', () => {
      context('E que eu esteja na tela Cadastro', () => {
        beforeEach(() => {
          cy.visit('/login')

          cy.get(selectors.LOGIN.OPCAO_CADASTRE_SE)
            .should('be.visible')
            .click()

          cy.url().should('be.equal', `${Cypress.config('baseUrl')}/cadastrarusuarios`)
        })

        context('Esquema do Cenário: Validar Cadastro Administrador', () => {
          const exemplos = [
            { nome: 'nomeValido2', email: 'emailValido2', senha: 'senhaValida2', mensagem: selectors.LOGIN.FORM.MSG_SUCESSO_CADASTRO_USUARIO},
            { nome: 'nomeInvalidoVazio', email: 'emailInvalidoVazio', senha: 'senhaInvalidaVazia', mensagem: selectors.LOGIN.FORM.MSG_OBRIGATORIEDADE_CAMPOS_NOME_EMAIL_SENHA},
            { nome: 'nomeValido3', email: 'emailInvalidoDominioSemPonto', senha: 'senhaValida3', mensagem: selectors.LOGIN.FORM.MSG_CAMPO_EMAIL_INVALIDO },
          ]

          exemplos.forEach((ex) => {
            context(`Quando eu informar os campos de nome, email e senha: ${ex.nome}, ${ex.email}, ${ex.senha} e opcão Cadastrar como administrador`, () => {
              it(`Então na tela de Cadastro deverá apresentar a mensagem ${ex.mensagem}`, () => {
                cy.fixture('usuario').then((usuarioFixture) => {
                  cy.cadastrarUsuario(usuarioFixture.admin[ex.nome], usuarioFixture.admin[ex.email], usuarioFixture.admin[ex.senha])
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
  })
})