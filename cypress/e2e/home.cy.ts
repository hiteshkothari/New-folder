describe('Shopping Cart App', () => {
  it('should load the home page and display products', () => {
    cy.visit('http://localhost:4200'); // Adjust URL if necessary
    cy.contains('Shopping Cart'); // Adjust to match actual heading
    cy.get('.product-card').should('have.length.greaterThan', 0); // adjust selector
    cy.get('.product-card').first().click();
    cy.url().should('include', '/view-product'); // Adjust to match actual product page URL
    cy.get('.info-section').should('exist'); // Adjust to match actual product title selector
    cy.get('.buy-btn').click();
    cy.get('.cart-item-count').should('contain', '1'); // Adjust to match actual cart item count selector

  });
});
