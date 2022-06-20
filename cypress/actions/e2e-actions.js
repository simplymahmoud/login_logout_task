/// <reference types="cypress" />

export class ProjectPage {

  navigate(){
    cy.visit('..//testautomation_web//index.html')
  }

  login(email, password) {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('fieldset > #login').click()
  }

  validateLoginpage() {
    cy.title().should('eq', 'Single Page Application')
    cy.get('[for="email"]').contains('User')
    cy.get('[for="password"]').contains('Password')
  }

  logout() {
    cy.get('.fa-user-circle').click()
    cy.get('span').click()
  }

  validateHomepage() {
    cy.title().should('eq', 'Single Page Application')
    cy.get('.home').contains('Home')
    cy.get('.products').contains('Products')
    cy.get('.contact').contains('Contact')
  }
  
  generateRandom() {
    var uuid = require("uuid")
    return uuid.v4()
  }
}
