/// <reference types="cypress" />
import seletores from '../support/seletores'

/*
  Funcionalidade: Tela Login - Opção Cadastre-se
    Como usuário da Tela Login do front do ServeRest
    Quero clicar na Opção Cadastre-se
    Para validar o comportamento da funcionalidade
*/

describe('Funcionalidade: Tela Login - Opção Cadastre-se', () => {
  before(() => {
    cy.fixture('usuario').then((usuarioFixture) => {
      cy.obterPorEmailEexcluirUsuarioPorId(usuarioFixture.admin.emailValido)
    })
  })

  context('Dado que eu acesse a tela de Login do front do ServeRest', () => {
    context('E que eu clique na opção Cadastre-se', () => {
      context('E que eu esteja na tela Cadastro', () => {
        beforeEach(() => {
          cy.visit('/login')

          cy.get(seletores.LOGIN.OPCAO_CADASTRE_SE)
            .should('be.visible')
            .click()

          cy.url().should('be.equal', `${Cypress.config('baseUrl')}/cadastrarusuarios`)
        })

        context('Esquema do Cenário: Validar Cadastro Administrador', () => {
          const exemplos = [
            { nome: 'nomeValido1', email: 'emailValido', senha: 'senhaValida1', mensagem: 'Cadastro realizado com sucesso' },
            { nome: 'nomeInvalidoVazio', email: 'emailInvalidoVazio', senha: 'senhaInvalidaVazia', mensagem: '×Nome é obrigatório×Email é obrigatório×Password é obrigatório' },
            { nome: 'nomeValido2', email: 'emailInvalidoDominioSemPonto', senha: 'senhaValida2', mensagem: 'Email deve ser um email válido' },
          ]

          exemplos.forEach((ex) => {
            context(`Quando eu informar os campos ${ex.nome}, ${ex.email}, ${ex.senha} e opcão Cadastrar como administrador`, () => {
              it(`Então na tela de Cadastro deverá apresentar a mensagem ${ex.mensagem}`, () => {
                cy.fixture('usuario').then((usuarioFixture) => {
                  cy.realizarLoginOpcaoCadastreSe(usuarioFixture.admin[ex.nome], usuarioFixture.admin[ex.email], usuarioFixture.admin[ex.senha])
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
  })
})