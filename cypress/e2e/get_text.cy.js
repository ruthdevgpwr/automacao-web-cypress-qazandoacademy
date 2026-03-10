/// <reference types="cypress" />

describe('Get Texts', () => {

  it('Deve obter o texto de um elemento', () => {
    cy.visit('/login')
    
    cy.get('.top_header_left > p')
      .then((element) => {
        console.log('Elemento:', element.text())
          element.hide()
      })
  })
})