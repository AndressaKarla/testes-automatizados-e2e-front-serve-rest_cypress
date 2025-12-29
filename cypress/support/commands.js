/// <reference types="cypress" />
import selectors from './selectors'

Cypress.Commands.add('realizarLogin', (email = '', senha = '') => {
  cy.get(selectors.LOGIN.BOTAO_ENTRAR).as('botaoEntrar')

  if (email !== '') {
    cy.get(selectors.LOGIN.CAMPO_EMAIL)
      .should('be.visible')
      .click()
      .type(email)
  }

  if (senha !== '') {
    cy.get(selectors.LOGIN.CAMPO_SENHA)
      .should('be.visible')
      .click()
      .type(senha, { log: false })
  }

  cy.get('@botaoEntrar')
    .should('be.visible')
    .click()
})

Cypress.Commands.add('cadastrarUsuario', (nome = '', email = '', senha = '') => {
  cy.get(selectors.CADASTRO_USUARIO.OPCAO_ADMIN).as('opcaoAdmin')

  if (nome !== '') {
    cy.get(selectors.CADASTRO_USUARIO.CAMPO_NOME)
      .should('be.visible')
      .click()
      .type(nome)
  }

  if (email !== '') {
    cy.get(selectors.LOGIN.CAMPO_EMAIL)
      .should('be.visible')
      .click()
      .type(email)
  }

  if (senha !== '') {
    cy.get(selectors.LOGIN.CAMPO_SENHA)
      .should('be.visible')
      .click()
      .type(senha, { log: false })
  }

  cy.get('@opcaoAdmin')
    .should('be.visible')
    .click()

  cy.get(selectors.CADASTRO_USUARIO.BOTAO_CADASTRAR)
    .should('be.visible')
    .click()
})

// App Actions
Cypress.Commands.add('obterPorEmailEexcluirUsuarioPorIdPelaAPI', (email) => {
  cy.request({
    method: 'GET',
    url: Cypress.env('baseUri') + `/usuarios?email=${email}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    failOnStatusCode: false
  }).then(response => {
    const retornoGet = response.body

    if ((retornoGet.quantidade) == 1) {
      const idUsuarioRetornado = retornoGet.usuarios[0]._id

      cy.request({
        method: 'DELETE',
        url: Cypress.env('baseUri') + `/usuarios/${idUsuarioRetornado}`,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eql(200)
      })
    }
  })
})

Cypress.Commands.add('cadastrarUsuarioPelaAPI', (nome, email, senha, admin) => {
  cy.request({
    method: 'POST',
    url: Cypress.env('baseUri') + '/usuarios',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: {
      "nome": nome,
      "email": email,
      "password": senha,
      "administrador": admin
    },
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eql(201)
  })
})