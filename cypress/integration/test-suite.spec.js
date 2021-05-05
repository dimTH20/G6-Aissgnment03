/// <reference types="Cypress" />

import * as loginFuncs from '../pages/loginPage.js'
import * as logoutFuncs from '../pages/logoutPage.js'

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

})