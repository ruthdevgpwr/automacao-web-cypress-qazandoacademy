/// <reference types="cypress" />

describe('Get Elements', () => {

  it('Selecionar elementos', () => {
    cy.visit('/login')
      .get('.header-logo')
    
    cy.get('#footer_one').as('rodape')
      .contains('Cart View Two')

    cy.get('@rodape')
      .find('img[alt="logo"]')
  })
})