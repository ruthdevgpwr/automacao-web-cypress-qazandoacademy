/// <reference types="cypress" />

import { user } from "../support/factories/userFactory"

describe('Cadastro de usuário', () => {

  beforeEach('Acessando tela de cadastro', () => {

    //ACESSANDO A TELA DE CADASTRO
    cy.accessRegisterPage()
      
  })

  it('Validar cadastro com sucesso', () => {
      
    cy.fillName(user.dadosValidos.name)
    cy.fillEmail(user.dadosValidos.email)
    cy.fillPassword(user.dadosValidos.senha)
    cy.saveRegister()
    cy.checkRegisterSuccess(user.dadosValidos.name)
    
    cy.url().should('include', '/my-account')

  })
  it('Validar todos os campos vazios', () => {
     
    cy.saveRegister()
    cy.checkMessage('O campo nome deve ser prenchido')    

  })
  it('Validar campo com nome vazio', () => {

    //cy.get('#email').type(user.dadosValidos.email)
    cy.fillEmail(user.dadosValidos.email)
    cy.fillPassword(user.dadosValidos.senha)
    cy.saveRegister()
    cy.checkMessage('O campo nome deve ser prenchido')
      
  })
  it('Validar campo com email vazio', () => {

    cy.fillName(user.dadosValidos.name)
    cy.fillPassword(user.dadosValidos.senha)
    cy.saveRegister()
    cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
      
  })
  it('Validar com email inválido', () => {

    cy.fillName(user.dadosValidos.name)
    cy.fillEmail(user.dadosInvalidos.emailInvalido)
    cy.fillPassword(user.dadosValidos.senha)
    cy.saveRegister()
    cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
      
  })
  it('Validar campo com senha vazia', () => {

    cy.fillName(user.dadosValidos.name)
    cy.fillEmail(user.dadosValidos.email)
    cy.saveRegister()
    cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })
  it('Validar campo com senha inválida', () => {
    
    cy.fillName(user.dadosValidos.name)
    cy.fillEmail(user.dadosValidos.email)
    cy.fillPassword(user.dadosInvalidos.senhaInvalida)
    cy.saveRegister()
    cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
      
  })
})