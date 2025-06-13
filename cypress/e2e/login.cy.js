// Import the LoginPage class
import LoginPage from '../support/pages/LoginPage';

// Test suite for login functionality
describe('Login Functionality Tests', () => {
  // Initialize page object
  const loginPage = new LoginPage();
  
  // Before each test, visit the login page
  beforeEach(() => {
    loginPage.visit();
  });
  
  // Test case 1: Successful login with valid credentials
  it('should login successfully with valid credentials', () => {
    // Use valid credentials defined in requirements
    loginPage.login('tomsmith', 'SuperSecretPassword!');
    
    // Verify success message appears
    loginPage.verifySuccessMessage();
    
    // Additional verification that we're on the secure page
    cy.url().should('include', '/secure');
  });
  
  // Test case 2: Failed login with invalid username
  it('should fail login with invalid username', () => {
    // Use invalid username
    loginPage.login('wronguser', 'SuperSecretPassword!');
    
    // Verify appropriate error message
    loginPage.verifyErrorMessage('Your username is invalid!');
  });
  
  // Test case 3: Failed login with invalid password
  it('should fail login with invalid password', () => {
    // Use invalid password
    loginPage.login('tomsmith', 'wrongpassword');
    
    // Verify appropriate error message
    loginPage.verifyErrorMessage('Your password is invalid!');
  });
  
  // Test case 4: Verify error messages appear correctly
  it('should display error message with empty credentials', () => {
    // Click login without entering credentials
    loginPage.clickLogin();
    
    // Verify error message appears
    loginPage.verifyErrorMessage('Your username is invalid!');
  });
});