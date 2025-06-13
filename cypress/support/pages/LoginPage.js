class LoginPage {
  // Selectors
  usernameInput = '#username';
  passwordInput = '#password';
  loginButton = 'button[type="submit"]';
  successMessage = '.flash.success';
  errorMessage = '.flash.error';
  
  // Navigation
  visit() {
    cy.visit('https://the-internet.herokuapp.com/login');
  }
  
  // Actions
  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
  }
  
  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }
  
  clickLogin() {
    cy.get(this.loginButton).click();
  }
  
  // Login helper method
  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
  }
  
  // Assertions
  verifySuccessMessage() {
    cy.get(this.successMessage)
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  }
  
  verifyErrorMessage(message) {
    cy.get(this.errorMessage)
      .should('be.visible')
      .and('contain', message);
  }
}

export default LoginPage;