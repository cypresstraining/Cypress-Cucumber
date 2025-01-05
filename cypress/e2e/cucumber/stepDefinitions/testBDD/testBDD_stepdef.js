import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
// how we can import other classes related objects or methods the same way 
// we do import given , when and then 
Given('customer should be in website login page',function(){
    cy.visit('http://ramanasoft123-001-site1.anytempurl.com/login?returnUrl=%2F',{
        auth: {
            username: '11211719',
            password: '60-dayfreetrial',
                   }
    })
})
When('enter the valid username and password',function(){
    cy.get('#Email').clear().type('admin@yourstore.com')
    cy.get('#Password').clear().type('adminadmin')

})
When('click on Login button',function(){

cy.get('.button-1.login-button').click()
})
Then('Login should be successful',function(){
cy.get('.administration').should('exist')

})
Then('customer able to My account Link',function(){
cy.get('.ico-account').should('exist')

})

