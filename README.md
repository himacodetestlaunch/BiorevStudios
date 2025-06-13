# Login Functionality Automated Test Suite

This project contains automated tests for the login functionality of the Heroku App test site.

## Overview
This automated test suite demonstrates my ability to create maintainable, scalable test automation using modern frameworks and best practices. The project showcases test strategy, code organization, and technical implementation skills.

Project Structure
BiorevStudios/
├── cypress/
│   ├── downloads/         # Downloaded files during test execution
│   ├── e2e/               # Test files
│   │   └── login.cy.js    # Login functionality tests
│   ├── fixtures/          # Test data files
│   │   └── example.json   # Example test data
│   └── support/           # Support files and utilities
│       ├── commands.js    # Custom Cypress commands
│       ├── e2e.js         # e2e configuration
│       └── pages/         # Page Object Models
│           └── LoginPage.js  # Login page object
├── node_modules/          # Node.js modules
├── cypress.config.js      # Cypress configuration
├── package-lock.json      # Package dependencies lock file
├── package.json           # Project configuration
└── README.md              # Project documentation


## Setup Instructions
- Clone this repository 
git clone https://github.com/himacodetestlaunch/BiorevStudios.git
cd BiorevStudios
- Install dependencies: `npm install`
- Run tests in headless mode: `npm test`
- Run tests in interactive mode: `npm run cypress:open`
Note: The commands.js and e2e.js files are auto-generated with the latest versions of Cypress. While no custom logic is included in them for this project, they’re required as entry points and can be extended to set global behaviors, commands, or pre-test hooks in larger test suites.

## Framework & Design Choice
 I chose Cypress framework due to:
- It's easy to set up and use
- It has built-in waiting and automatic retries
- It provides a clean, readable syntax for writing tests
- It has a great developer experience with time-travel debugging
- It's well-suited for testing web application

 Page Object Model Sample: 
 // cypress/support/pages/LoginPage.js
class LoginPage {
    visit() {
        cy.visit('/login');
    }
    
    fillUsername(username) {
        cy.get('#username').type(username);
    }
    
    fillPassword(password) {
        cy.get('#password').type(password);
    }
    
    clickLogin() {
        cy.get('#login-button').click();
    }
    
    getErrorMessage() {
        return cy.get('.error-message');
    }
}

export default new LoginPage();

## Test Cases
The following scenarios are automated in the suite:
- Successful login with valid credentials
- Failed login with invalid username
- Failed login with invalid password
- Verification of error messages

## Technical Highlights
- Tests follow the POM structure to improve reusability and reduce maintenance effort.
- Cypress configuration is customized (baseUrl, viewport, timeouts) to ensure reliable cross-browser behavior.
- The project can be extended with fixtures, custom commands, environment configs, and parallel execution in CI/CD.