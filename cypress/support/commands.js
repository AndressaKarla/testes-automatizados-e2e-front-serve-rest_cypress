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
Cypress.Commands.add('obterPorEmailEexcluirUsuarioPorId', (email) => {
  cy.request({
    url: Cypress.env('baseUri') + `/usuarios?email=${email}`,
    method: 'GET',
  }).then(response => {
    let retornoGet = response.body

    if ((retornoGet.quantidade) == 1) {
      let idUsuarioRetornado = retornoGet.usuarios[0]._id

      cy.request({
        url: Cypress.env('baseUri') + `/usuarios/${idUsuarioRetornado}`,
        method: 'DELETE',
      }).then((response) => {
        expect(response.status).to.equal(200)
      })
    }
  })
})

Cypress.Commands.add('obterPorEmailEincluirUsuarioAdmin', (nome, email, senha) => {
  cy.request({
    url: Cypress.env('baseUri') + '/usuarios',
    method: 'POST',
    headers: {
      'accept': 'application/json', 
      'content-type': 'application/json'
    },
    body: {
      "nome": nome,
      "email": email,
      "password": senha,
      "administrador": "true"
    }
  }).then((response) => {
    expect(response.status).to.equal(201)
  })
})