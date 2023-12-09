/// <reference types="cypress" />
import seletores from './seletores'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('realizarLoginEntrar', (email = '', senha = '') => {
    cy.get(seletores.LOGIN.CAMPO_EMAIL).as('campoEmail')
    cy.get(seletores.LOGIN.CAMPO_SENHA).as('campoSenha')
    cy.get(seletores.LOGIN.BOTAO_ENTRAR).as('botaoEntrar')

    if (email !== '') {
        cy.get('@campoEmail')
            .should('be.visible')
            .click()
            .type(email, { log: false })
    }

    if (senha !== '') {
        cy.get('@campoSenha')
            .should('be.visible')
            .click()
            .type(senha, { log: false })
    }

    cy.get('@botaoEntrar')
        .should('be.visible')
        .click()
})