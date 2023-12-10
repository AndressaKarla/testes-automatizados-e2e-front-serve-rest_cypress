/// <reference types="cypress" />
import seletores from '../support/seletores'

/* login-entrar.cy.js
  Funcionalidade: Tela Login - Botão Entrar
    Como usuário da Tela Login do front do ServeRest
    Quero clicar no Botão Entrar
    Para validar o comportamento da funcionalidade
 */

describe('Funcionalidade: Tela Login - Botão Entrar', () => {
  context('Cenário: Validar Login usuário administrador', () => {
    context('Dado que eu acesse a tela de Login do front do ServeRest', () => {
      before(() => {
        cy.visit('/login')
      })

      context('Quando eu informar os campos de email e senha de um usuário administrador', () => {
        beforeEach(() => {
          cy.fixture('login').then((loginFixture) => {
            cy.realizarLoginEntrar(loginFixture.adminValido1.emailValido1, loginFixture.adminValido1.senhaValida1)
          })
        })

        it('Então deverá apresentar a tela Home com o texto Bem Vindo e com o texto Este é seu sistema para administrar seu ecommerce', () => {
          cy.url().should('include', `${Cypress.config('baseUrl')}/admin/home`)
          
          cy.get(seletores.HOME.TEXTO_BEM_VINDO)
            .should('be.visible')
            .should('contain', 'Bem Vindo')

          cy.get(seletores.HOME.TEXTO_SISTEMA_ADMINISTRAR_ECOMMERCE)
            .should('be.visible')
            .should('contain', 'Este é seu sistema para administrar seu ecommerce.')
        })
      })
    })
  })

  context('Esquema do Cenário: Validar Login usuários inválidos', () => {
    context('Dado que eu acesse a tela de Login do front do ServeRest', () => {
      beforeEach(() => {
        cy.visit('/login')
      })

      context('Quando eu informar os campos de email e senha incorretamente', () => {
        const exemplos = [
          { email: 'emailInvalidoVazio1', senha: 'senhaInvalidaVazia1', mensagem: '×Email é obrigatório×Password é obrigatório' },
          { email: 'emailInvalidoDominioSemPonto1', senha: 'senhaValida2', mensagem: 'Email deve ser um email válido' },
          { email: 'emailInvalidoNaoCadastrado1', senha: 'senhaInvalidaNaoCadastrada1', mensagem: 'Email e/ou senha inválidos' },
        ]

        exemplos.forEach((ex) => {
          it(`Então na tela Login deverá apresentar a mensagem ${ex.mensagem}`, () => {
            cy.fixture('login').then((loginFixture) => {
              cy.realizarLoginEntrar(loginFixture.invalido1[ex.email], loginFixture.invalido1[ex.senha])
            })

            cy.get(seletores.LOGIN.FORM_LOGIN)
              .should('be.visible')
              .should('contain', ex.mensagem)
          })
        })
      })
    })
  })
})