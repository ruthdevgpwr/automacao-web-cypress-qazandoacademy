/// <reference types="cypress" />

import userDataInvalid from '../fixtures/desafio_dados_invalidos.json'
import userDataValid from '../fixtures/desafio_dados_validos.json'

describe('Cadastro de usuário', () => {

  it('Validar cadastro com sucesso', () => {

    cy.visit('/')
      .get('.header-logo')    
    
    cy.get('.fa-lock').click()

    cy.get('#user').type(`${userDataValid.userName}`)
    cy.get('#email').type(`${userDataValid.userEmail}`)
    cy.get('#password').type(`${userDataValid.userPassword}`)

    console.log(userDataValid.userName)

    cy.get('#btnRegister').click()

    cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Cadastro realizado!')

    cy.get('.swal2-html-container')
      .should('be.visible')
      .should('have.text', `Bem-vindo ${userDataValid.userName}`)
    
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

    cy.get('#email').type(`${userDataValid.userEmail}`)
    cy.get('#password').type(`${userDataValid.userPassword}`)

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
      .type(`${userDataValid.userName}`)
    cy.get('#password').type(`${userDataValid.userPassword}`)

    cy.get('#btnRegister').click()

    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
      
  })

  it('Validar com email inválido', () => {

    cy.visit('/')
      .get('.header-logo')    
    
    cy.get('.fa-lock').click()

    
    cy.get('#user').type(`${userDataValid.userName}`)
    cy.get('#email').type(`${userDataInvalid.invalidEmail}`)
    cy.get('#password').type(`${userDataValid.userPassword}`)

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
      .type(`${userDataValid.userName}`)

    cy.get('#email')
    .type(`${userDataValid.userEmail}`)

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
      .type(`${userDataValid.userName}`)

    cy.get('#email')
      .should('be.visible')
      .type(`${userDataValid.userEmail}`)

    cy.get('#password')
      .should('be.visible')
      .type(`${userDataInvalid.senhaInvalida}`)

    cy.get('#btnRegister').click()

    cy.get('#errorMessageFirstName')
      .should('be.visible')
      .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
      
  })
})