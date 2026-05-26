import { getFooter, getHeading, getNav } from '../support/app.po';

describe('shop homepage4', () => {
  beforeEach(() => cy.visit('/'));

  it('shows the app title in the header', () => {
    getHeading().should('contain.text', 'Nx Shop Demo');
  });

  it('shows a products link in the navigation', () => {
    getNav()
      .find('a')
      .contains('Products')
      .should('have.attr', 'href', '/products');
  });

  it('shows footer with copyright information', () => {
    getFooter().should('contain.text', '© 2025 Nx Shop Demo');
  });

  it('redirects from root to /products', () => {
    cy.location('pathname').should('eq', '/products');
  });
});
