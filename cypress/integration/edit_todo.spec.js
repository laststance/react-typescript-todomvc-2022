context('Edit Todo', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
  })

  it('can edit todo text', () => {
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-body-text]')
      .should('contain', 'one')
      .dblclick()
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-edit-input]')
      .type(' of kind')
      .type('{enter}')
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-body-text]')
      .should('contain', 'one of kind')
  })

  it('can edit completed todo', () => {
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-item-complete-check]')
      .check()
      .should('have.checked')
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-body-text]')
      .should('contain', 'one')
      .dblclick()
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-edit-input]')
      .type(' more')
      .type('{enter}')
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-body-text]')
      .should('contain', 'one more')
  })

  it('can not enter blank input', () => {
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-body-text]')
      .should('contain', 'one')
      .dblclick()
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-edit-input]')
      .type('{leftarrow}{leftarrow}{leftarrow}{del}{del}{del}')
      .type('{enter}')

    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-edit-input]')
      .should('to.be.focused')

  })
})
