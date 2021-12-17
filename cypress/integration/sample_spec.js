/// <reference types="cypress" />


describe('My first Test',()=>{

 beforeEach(() => {  
      cy.visit('https://demo.realworld.io')
  })


 it('visit to condult',()=>{


  cy.contains('Sign up').click()

  cy.get('[type=text]').type('test@12345')

  cy.wait(1000)
  cy.get('[type=email]').type('test12345@gmail.com')
cy.wait(1000)
  cy.get('[type=password]').type('java@123')
  cy.wait(1000)
  cy.get('[type=submit').click()
 })


 it('sign in',()=>{
  cy.contains('Sign in').click()
cy.get('[type=email]').type('test12345@gmail.com')
cy.get('[type=password]').type('java@123')
cy.get('[type=submit]').click()
  
 })
})

describe('Setting',()=>{
 it('setting',()=>{
  cy.visit('https://demo.realworld.io/__/#/tests/integration/sample_spec.js')
 })
})