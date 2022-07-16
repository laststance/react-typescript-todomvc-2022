context('Delete Todo', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
  })

  it('can delete mouse-hovering todo by push [x] button', () => {
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=delete-todo-btn]')
      .click({ force: true }) // Actually this bth is hidden until invole :hover selector. but sypress struggling at the point
    // @see https://docs.cypress.io/api/commands/hover.html#Workarounds

    cy.get('[data-cy=remaining-uncompleted-todo-count]').should('contain', '2')
  })
})
