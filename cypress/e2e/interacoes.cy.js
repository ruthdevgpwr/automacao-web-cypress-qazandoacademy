/// <reference types="cypress" />

describe('Interactions', () => {

  it('Click and type', () => {

    cy.visit('/login')

    cy.get('#user')
      .type('ruthdasp@gmail.com{enter}')
    
    cy.get('#password')
      .type('123456{enter}')

    cy.get('#btnLogin')
      .click()
    
    //cy.get('#swal2-title').then((element) => {
      //assert.equal(element.text(), 'Login realizado')
    
    cy.get('#swal2-title').should('have.text', 'Login realizado')
  })

  it('Select', () => {

    cy.visit('/')

    cy.get('.footer_one_widget')
      .contains('Checkout View Two')
      .click()
    
    cy.get('#country')
      .select('Colombia')
      
  })

  it('Checkbox and radiobuttons', () => {

    cy.visit('/')

    cy.get('.footer_one_widget')
      .contains('Checkout View One')
      .click()
    
    cy.get('#materialUnchecked')
      .check()
      .uncheck()
    
    cy.get('#css')
      .check()

      
  })

})