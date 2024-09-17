import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import nopLoginPage from '../../Pages/nopLoginPage'
beforeEach(function(){
    cy.fixture('nopLoginData').as('data')
})
let nopLoginPage1 =new nopLoginPage()
Given('User is on the nopcommerce login page', function () {
nopLoginPage1.browseURL()  
nopLoginPage1.clickOnLoginLink() 
})

When('nopcommerce login with valid credentials', function () {
    nopLoginPage1.enterEmail(this.data.adminEmail)
    nopLoginPage1.enterPassword(this.data.adminPassword)
    nopLoginPage1.selectRememberMe()
    nopLoginPage1.clickOnLogin()
})

When('User click on the nopcommerce logout button', function () {
nopLoginPage1.clickOnLogout()
})

Then('User should be routed back to nopcommerce page', function () {
   nopLoginPage1.verifyResults()
})