import Chainable = Cypress.Chainable;

export const getGreeting = (): Chainable<JQuery<HTMLHeadingElement>> => {
  return cy.get('h1');
};
