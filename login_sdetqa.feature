# cypress/e2e/login_sdetqa.feature
Feature: Login feature
Scenario: Login with valid credentials
    Given user launches the application
    When user login with valid credentials
    Then user verifies the title