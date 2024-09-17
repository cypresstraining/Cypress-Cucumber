import { Given, When, Then } from "cypress-cucumber-preprocessor/steps/index";
import CounduitLoginPage from "../../Pages/counduitLoginPage";
before(()=>{
    //write code here to run as a very first step and one time 
    cy.login('admin@yourstore.com','password')
})
beforeEach(()=>{
    //write code to run before each and every test
    cy.login('admin@yourstore.com','password')

})
const counduitLoginPage = new counduitLoginPage()
Given('is used to write the pre condition',()=>{

//write cypress commands here
cy.login('admin@yourstore.com','password')

})
When('',()=>{

    cy.login('admin@yourstore.com','password')
    //write code from POM 
    //write code from custom keywords


})

Then('is used to represent the expected result //assertion',()=>{
//write your assertions here 
cy.get('selecotr for welcome message').should('have.text','Successful')

})