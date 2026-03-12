

// --This is a parent command --
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

/// <reference types="cypress" />

Cypress.Commands.add('accessRegisterPage', () => {

  cy.visit('/')
      .get('.header-logo')
    
  cy.get('.fa-lock')
    .click()
  
  cy.url().should('include', '/register')

  cy.get('#user')
    .should('be.visible')

})