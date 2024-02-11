/// <reference types="cypress" />

describe('Autenticação', () => {
  it('realiza login com sucesso com usuário admim', () => {
    cy.realizarLogin()

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/admin/home`)
    cy.contains('h1', 'Bem Vindo')
      .should('be.visible')
    cy.contains('.lead', 'Este é seu sistema para administrar seu ecommerce.')
      .should('be.visible')
  })

  it('exibe mensagem de erro ao não preencher usuário e senha', () => {
    cy.visit('/login')

    cy.contains('button', 'Entrar').click()

    cy.contains('[role="alert"]', 'Email é obrigatório')
      .should('be.visible')
    cy.contains('[role="alert"]', 'Password é obrigatório')
      .should('be.visible')
  })

  it('exibe mensagem de erro ao fornecer um email inválido', () => {
    cy.realizarLogin('usuario4@outlook', 'teste2')

    cy.contains('[role="alert"]', 'Email deve ser um email válido')
      .should('be.visible')
  })

  it('exibe mensagem de erro ao fornecer credenciais inválidas', () => {
    cy.realizarLogin('usuario5@gmail.com', 'teste3')

    cy.contains('[role="alert"]', 'Email e/ou senha inválidos')
      .should('be.visible')
  })
})
