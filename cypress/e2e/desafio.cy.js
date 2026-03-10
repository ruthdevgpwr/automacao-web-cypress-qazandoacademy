/// <reference types="cypress" />

import { faker } from '@faker-js/faker'


  const name = faker.person.fullName()
  const email = faker.internet.email()
  const emailInvalido = faker.internet.email().replace('@', '')
  const senhaValida = faker.internet.password({ length: 6 })
  const senhaInvalida = faker.internet.password({ length: 3 })

describe('Cadastro de usuário', () => {

  it('Validar cadastro com sucesso', () => {

    cy.visit('/')
      .get('.header-logo')    
    
    cy.get('.fa-lock').click()

    cy.get('#user').type(name)
    cy.get('#email').type(email)
    cy.get('#password').type(senhaValida)

    console.log('name:',name)
    console.log('email:',email)

    cy.get('#btnRegister').click()

    cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Cadastro realizado!')

    cy.get('.swal2-html-container')
      .should('be.visible')
      .should('have.text', `Bem-vindo ${name}`)
    
    cy.url().should('include', '/my-account')

  })
  
  it('Validar todos os campos vazios', () => {
    cy.visit('/')
      .get('.header-logo')    
    
    cy.get('.fa-lock')
      .click()
      .url().should('include', '/register')
      .get('#user')
      .should('be.visible')
      .get('#email')
      .should('be.visible')
      .get('#password')
      .should('be.visible')
      .get('#btnRegister')
      .click()
      .get('#errorMessageFirstName')
      .should('be.visible')
      .should('have.text', 'O campo nome deve ser prenchido')
  })
  it('Validar campo com nome vazio', () => {

    cy.visit('/')
      .get('.header-logo')    
    
    cy.get('.fa-lock')
      .click()
      .url().should('include', '/register')
      .get('#user')
      .should('be.visible')

    cy.get('#email').type(email)
    cy.get('#password').type(senhaValida)

    cy.get('#btnRegister').click()

    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('have.text', 'O campo nome deve ser prenchido')
      
  })

  it('Validar campo com email vazio', () => {

    cy.visit('/')
      .get('.header-logo')    
    
    cy.get('.fa-lock').click()

    cy.get('#user')
      .should('be.visible')
      .type(name)
    cy.get('#password').type(senhaValida)

    cy.get('#btnRegister').click()

    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
      
  })

  it('Validar com email inválido', () => {

    cy.visit('/')
      .get('.header-logo')    
    
    cy.get('.fa-lock').click()

    
    cy.get('#user').type(name)
    cy.get('#email').type(emailInvalido)
    cy.get('#password').type(senhaValida)

    cy.get('#btnRegister').click()

    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
      
  })

  it('Validar campo com senha vazia', () => {

    cy.visit('/')
      .get('.header-logo')    
    
    cy.get('.fa-lock').click()

    cy.get('#user')
      .should('be.visible')
      .type(name)

    cy.get('#email')
    .type(email)

    cy.get('#btnRegister').click()

    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Validar campo com senha inválida', () => {

    cy.visit('/')
      .get('.header-logo')    
    
    cy.get('.fa-lock').click()

    cy.get('#user')
      .should('be.visible')
      .type(name) 

    cy.get('#email')
      .should('be.visible')
      .type(email)

    cy.get('#password')
      .should('be.visible')
      .type(senhaInvalida)

    cy.get('#btnRegister').click()

    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
      
  })
})