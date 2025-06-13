# Login Functionality Automated Test Suite

This project contains automated tests for the login functionality of the Heroku App test site.

## Setup Instructions

1. Clone this repository
2. Install dependencies: `npm install`
3. Run tests in headless mode: `npm test`
4. Run tests in interactive mode: `npm run cypress:open`

## Framework Choice

I chose Cypress for this automation task because:
- It's easy to set up and use
- It has built-in waiting and automatic retries
- It provides a clean, readable syntax for writing tests
- It has a great developer experience with time-travel debugging
- It's well-suited for testing web applications

## Project Structure

- `cypress/e2e`: Contains test files
- `cypress/support/pages`: Contains Page Object Models
- `cypress.config.js`: Cypress configuration

## Test Cases

1. Successful login with valid credentials
2. Failed login with invalid username
3. Failed login with invalid password
4. Verification of error messages