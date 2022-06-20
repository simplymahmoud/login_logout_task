 
/// <reference types="cypress" />

  export function navigate(){
    cy.visit('..//testautomation_web//index.html')
  }

  export function login(email, password) {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('fieldset > #login').click()
  }

  export function validateLoginpage() {
    cy.title().should('eq', 'Single Page Application')
    cy.get('[for="email"]').contains('User')
    cy.get('[for="password"]').contains('Password')
  }
  
  export function logout() {
    cy.get('.fa-user-circle').click()
    cy.get('span').click()
  }
  
  export function validateHomepage() {
    cy.title().should('eq', 'Single Page Application')
    cy.get('.home').contains('Home')
    cy.get('.products').contains('Products')
    cy.get('.contact').contains('Contact')
  }

  export function generateRandom() {
    var uuid = require("uuid")
    return uuid.v4()
  }