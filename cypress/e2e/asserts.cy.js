/// <reference types="cypress" />

describe('Asserts', () => {

  it('Verificar se o elemento está visível', () => {
    cy.visit('/')

    cy.get('.fa-user')
    .click()

    cy.get('.account_form > h3')
      .should('be.visible')
      .should('contain', 'Login')
      .should('have.text', 'Login')

    cy.get('.account_form > h3')
      .then((element) => {
        expect(element.text()).to.equal('Login')
        expect(element.text()).to.be.visible
        expect(element.text()).not.disabled
      })
  })
})