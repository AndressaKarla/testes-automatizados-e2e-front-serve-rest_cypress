/// <reference types="cypress" />
import seletores from '../support/seletores'

/*
  Funcionalidade: Tela Login - Botão Entrar
    Como usuário da Tela Login do front do ServeRest
    Quero clicar no Botão Entrar
    Para validar o comportamento da funcionalidade
*/

describe('Funcionalidade: Tela Login - Botão Entrar', () => {
  before(() => {
    cy.fixture('usuario').then((usuarioFixture) => {
      cy.obterPorEmailEincluirUsuarioAdmin(usuarioFixture.adminValido.nomeValido, usuarioFixture.adminValido.emailValido, usuarioFixture.adminValido.senhaValida)
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
          cy.fixture('login').then((loginFixture) => {
            cy.realizarLoginBotaoEntrar(loginFixture.adminValido.emailValido, loginFixture.adminValido.senhaValida)
          })
        })

        it('Então deverá apresentar a tela Home com o texto Bem Vindo e com o texto Este é seu sistema para administrar seu ecommerce', () => {
          cy.url().should('be.equal', `${Cypress.config('baseUrl')}/admin/home`)

          cy.get(seletores.HOME.TEXTO_BEM_VINDO)
            .should('be.visible')
            .and('contain', 'Bem Vindo')

          cy.get(seletores.HOME.TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE)
            .should('be.visible')
            .and('contain', 'Este é seu sistema para administrar seu ecommerce.')
        })
      })
    })

    context('Esquema do Cenário: Validar Login usuários inválidos', () => {
      const exemplos = [
        { email: 'emailInvalidoVazio', senha: 'senhaInvalidaVazia', mensagem: '×Email é obrigatório×Password é obrigatório' },
        { email: 'emailInvalidoDominioSemPonto', senha: 'senhaValida', mensagem: 'Email deve ser um email válido' },
        { email: 'emailInvalidoNaoCadastrado', senha: 'senhaInvalidaNaoCadastrada', mensagem: 'Email e/ou senha inválidos' },
      ]

      exemplos.forEach((ex) => {
        context(`Quando eu informar os campos de email e senha incorretamente ${ex.email} e ${ex.senha}`, () => {
          it(`Então na tela Login deverá apresentar a mensagem ${ex.mensagem}`, () => {
            cy.fixture('login').then((loginFixture) => {
              cy.realizarLoginBotaoEntrar(loginFixture.invalido[ex.email], loginFixture.invalido[ex.senha])
            })

            cy.get(seletores.LOGIN.FORM)
              .should('be.visible')
              .and('contain', ex.mensagem)
          })
        })
      })
    })
  })
})