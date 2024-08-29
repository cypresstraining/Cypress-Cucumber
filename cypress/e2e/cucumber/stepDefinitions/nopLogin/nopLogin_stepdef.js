import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
beforeEach(function(){
    cy.fixture('conduitLoginData').as('data')
})

Given('User is on the login page', function () {
    cy.visit('https://react-redux.realworld.io/');
    cy.contains('Sign in').click()
})

When('User login with valid credentials', function () {
    cy.get('input[type="email"]').type(this.data.validEmail)
    cy.get('input[type="password"]').type(this.data.validPassword);
    cy.get('button[type="submit"]').click()
    cy.contains('')
})

When('User click on the settings button', function () {
   cy.contains('Settings').click()
})

When('User click on the logout button', function () {
   cy.get('.btn.btn-outline-danger').click()
})

Then('User should be routed back to login page', function () {
    cy.title().should('eq', 'Conduit')
   // cy.url().should('contain','https://react-redux.realworld.io/')
})