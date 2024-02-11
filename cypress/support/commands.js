/// <reference types="cypress" />

Cypress.Commands.add('realizarLogin', (
    email = Cypress.env('USUARIO'),
    senha = Cypress.env('SENHA')
) => {
    cy.visit('/login')
    cy.get('[data-testid="email"]')
        .should('be.visible')
        .type(email)

    cy.get('[data-testid="senha"]')
        .should('be.visible')
        .type(senha, { log: false })

    cy.contains('button', 'Entrar').click()
        .should('be.visible')
        .click()
})
