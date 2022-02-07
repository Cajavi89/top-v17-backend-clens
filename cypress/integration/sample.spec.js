/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('my first e2e test', () => {
  beforeEach(() => {
    cy.visit('/api/clens');
  });
  it('successfuly renders the page header', () => {
    cy.contains('Clens DB!');
  });
});
