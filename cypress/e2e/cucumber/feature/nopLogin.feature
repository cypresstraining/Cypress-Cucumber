Feature: nopcommerce Login Functionality

  Scenario: Login and Logout with Valid Credentials
    Given User is on the login page
    When User login with valid credentials
    And User click on the profile button
    And User click on the logout button
    Then User should be routed back to login page
