/// <reference types="Cypress" />

import * as loginFuncs from '../pages/loginPage.js'
import * as logoutFuncs from '../pages/logoutPage.js'
import * as roomsPage from '../pages/rooms-page.js'
import * as dashboardPage from '../pages/dashboard-page.js'



describe('Test suite', function(){
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
        loginFuncs.checkTitle
    })


it('Tests Successful login', function(){
    loginFuncs.testFullLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    logoutFuncs.performLogout('Login')
})

it('Tests unSuccessful login', function(){
    loginFuncs.testFailLogin(cy, 'tester01', ' ', 'Login')
})

it('Tests Navigate to rooms page and go back to dashboard', function(){
    loginFuncs.testFullLogin(cy, 'tester01', 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c', 'Tester Hotel Overview')
    
    dashboardPage.viewRooms("Rooms")
    cy.log("View rooms button was clicked, content confirmed")

    roomsPage.goBackToDashboard("Tester Hotel Overview")
    cy.log("Back button was clicked, content confirmed")

})

})