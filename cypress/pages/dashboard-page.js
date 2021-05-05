/// <reference types ="cypress" />

// Elements
const LOGOUT_BTN = ".user > .btn"
const VIEW_ROOMS_BTN = ":nth-child(1) > .btn"

//functions/actions
//views rooms page
function viewRooms(confirmationContent) {
    cy.get(VIEW_ROOMS_BTN).click()
    cy.contains(confirmationContent)
}

//export functions/actions
exports.default = {
    viewRooms
}