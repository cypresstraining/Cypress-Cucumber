class mycypressacademyCustomerLogin{

browseURL(){
    cy.visit('http://mycypressacademy-001-site1.atempurl.com/', {
        auth: {
          username: '11200631',
          password: '60-dayfreetrial',
        },
      })
    
}
clickLogin(){
    cy.get('.ico-login').click() 
    //connfirming that we are in login page 
    cy.url().should('eq','http://mycypressacademy-001-site1.atempurl.com/login?returnUrl=%2F')
    
}
performLogin(email,password){
cy.get('#Email').clear().type(email)
cy.get('#Password').clear().type(password) 
cy.get('#RememberMe').check()
cy.get('button[class="button-1 login-button"]').click()

}
clickMyaccount(){
    cy.contains('My account').click()
cy.url().should('eq','http://mycypressacademy-001-site1.atempurl.com/customer/info')

}
cllickLogout(){
    cy.contains('Log out').click()

}
VerifyLogout(){
cy.url().should('eq','http://mycypressacademy-001-site1.atempurl.com/')
cy.get('h2').should('contain','Welcome to our store')    

}


}

export default mycypressacademyCustomerLogin