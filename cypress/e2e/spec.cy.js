const { CBCLoginPage } = require("../../pageObject/bcPage/loginPageBC");
const { CBCpage } = require("../../pageObject/bcPage/mainPageBC");
const { objLoginWrong, objPasswordWrong, objEmailIsEmpty } = require("../datas/loginData/loginData");

describe('Test. Login. Wrong', () => {
  
  beforeEach(() => {
    const objCB = new CBCpage()
    cy.visit(objCB.url);
    cy.contains(objCB.btnEnter).click();
  })
  /*
  it('Test 001. Get error when login is wrong' , () => {
    const objLoginBC = new CBCLoginPage(); 
    cy.get(objLoginBC.email).type(objLoginWrong.email)
    cy.get(objLoginBC.password).type(objLoginWrong.password + '{enter}')
    cy.get(objLoginBC.loginMessagesBlock).should('contain', objLoginBC.messagePasswordIsWrong)
  })
  
  it('Test 002. Get error when password is wrong', () => {
    const objLoginBC = new CBCLoginPage(); 
    cy.get(objLoginBC.email).type(objPasswordWrong.email)
    cy.get(objLoginBC.password).type(objPasswordWrong.password + '{enter}')
    cy.get(objLoginBC.loginMessagesBlock).should('contain', objLoginBC.messagePasswordIsWrong)
  })
*/

  it('Test 003. Get error when field Email is empty', () => {
    const objLoginBC = new CBCLoginPage(); 
    cy.get(objLoginBC.password).type(objPasswordWrong.password + '{enter}')
    cy.get(objLoginBC.loginMessagesBlock).should('contain', objLoginBC.messageEmailIsRequired)
  })
})




