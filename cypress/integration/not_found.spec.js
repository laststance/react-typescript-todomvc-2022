context('Routing', () => {
  it('should show not found page', () => {
    // no exist uri
    cy.visit('http://localhost:3000/jiawojefpwielj0rijfpopo')

    cy.percySnapshot('Not Found')
    cy.get('[data-cy=not-found-page]')
      .should('exist')
      .should('contain', 'Page Not Found')
  })
})
