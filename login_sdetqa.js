// cypress/e2e/login_sdetqa/login_sdetqa.js
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('user launches the application', () => {
    cy.visit("https://sdetqaportal.blogspot.com/")
})

When('user login with valid credentials', () => {
    cy.title().should('eq', 'SDET-QA PORTAL')
})

Then('user verifies the title', () => {
    cy.title().should('eq', 'SDET-QA PORTAL')
})
