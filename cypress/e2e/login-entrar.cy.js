/// <reference types="cypress" />
import seletores from '../support/seletores'

/* login-entrar.cy.js
  Funcionalidade: Tela Login - Botão Entrar
    Como usuário da Tela Login do front do ServeRest
    Quero clicar no Botão Entrar
    Para validar o comportamento da funcionalidade
 */

describe('Validar Login usuário administrador', () => {
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