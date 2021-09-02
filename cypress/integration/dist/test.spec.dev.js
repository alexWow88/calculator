"use strict";

describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true);
  });
});
describe('The Main Page', function () {
  it('successfully loads', function () {
    cy.visit('http://127.0.0.1:5502/index.html');
  });
});
describe('Basic operations', function () {
  it('7 + 2 equals 9', function () {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html'); //ACT

    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click(); //ASSERT

    cy.get('[data-cy=display-result]').should('have.text', '9');
  });
});
describe('Long operations', function () {
  it('9 + 3 - 10 * 60 / 5 equals 24', function () {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html'); //ACT

    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=three]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=times]').click();
    cy.get('[data-cy=six]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=equals]').click(); //ASSERT

    cy.get('[data-cy=display-result]').should('have.text', '24');
  });
});
describe('Long operations show in the second display', function () {
  it('9 + 3 - 10 * 60 / 5 show in the list display', function () {
    //ARRANGE
    cy.visit('http://127.0.0.1:5502/index.html'); //ACT

    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=three]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=times]').click();
    cy.get('[data-cy=six]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=five]').click(); //ASSERT

    cy.get('[data-cy=display-list]').should('have.text', '9+3-10*60/5');
  });
});