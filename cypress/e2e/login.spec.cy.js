import userData from '../fixtures/userData.json'

describe('Orange Login Test', () => {
 
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfobutton: "[href='/web/index.php/pim/viewMyDetails']",
    firstName: "[name='firstName']",
    lastName: "[name='lastName']",
    genericFiel: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    closeButton: ".--close",
    submitButton:"[type='submit']"

  }
  
  it.only('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfobutton).click()
    cy.get(selectorsList.firstName).clear().type('Mike')
    cy.get(selectorsList.lastName).clear().type('Collings')
    cy.get(selectorsList.genericFiel).eq(3).clear().type('2121')
    cy.get(selectorsList.genericFiel).eq(4).clear().type('2222')
    cy.get(selectorsList.genericFiel).eq(5).clear().type('2323')
    cy.get(selectorsList.dateField).eq(1).clear().type('2025-10-01')
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
  
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
  
})
