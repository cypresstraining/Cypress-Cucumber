import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import CounduitLoginPage from '../../Pages/counduitLoginPage'
beforeEach(function(){
    cy.fixture('conduitLoginData').as('data') //loading the data from json file
})
const counduitLoginPage =new CounduitLoginPage() //create an object for the CounduitLoginPage class

Given('User is on the login page', function () {
  counduitLoginPage.browseURL() //open the URL from browseURL method
  counduitLoginPage.clickOnSign()//Clickn on Sign button through clickOnSign() method
})

When('User login with valid credentials', function () {
    counduitLoginPage.enterValidEmail(this.data.validEmail)
    counduitLoginPage.enterValidPassword(this.data.validPassword)
    counduitLoginPage.clickOnLoginButton()
    
})

When('User click on the settings button', function () {
    counduitLoginPage.clickOnSettings()
})

When('User click on the logout button', function () {
  counduitLoginPage.clickOnLogoutButton()
})

Then('User should be routed back to login page', function () {
    counduitLoginPage.verifyResults()
})