class CounduitLoginPage{

    browseURL(){
    cy.visit('https://react-redux.realworld.io/');
    }
    clickOnSign(){
    cy.contains('Sign in').click()
    }
    enterValidEmail(validEmail){
        cy.get('input[type="email"]').type(validEmail)
    }
    enterValidPassword(validPassword){
        cy.get('input[type="password"]').clear().type(validPassword);

    }
    clickOnLoginButton(){
        cy.get('button[type="submit"]').click()
    }
    clickOnSettings(){
        cy.contains('Settings').click()

    }
    clickOnLogoutButton(){
        cy.get('.btn.btn-outline-danger').click()
    }
    verifyResults(){
   cy.title().should('eq', 'Conduit')
   cy.url().should('contain','https://react-redux.realworld.io/')
   cy.get('h1').should('have.text','conduit')
   cy.get('p').first().should('have.text','A place to share your knowledge.')
   cy.get('p').last().should('have.text','Popular Tags')
    }
}

export default CounduitLoginPage