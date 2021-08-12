context('Edit Todo', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
  })

  it('can edit todo text', () => {
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-body-text]')
      .should('contain', 'one')
      .click()
    cy.percySnapshot('Edit Mode')
      // should focus actual input element when click todo text label
      .focused()
      .should('have.value', 'one')
      .should('have.attr', 'data-cy', 'todo-edit-input')
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
      .click()
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
      .click()
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-edit-input]')
      .type('{leftarrow}{leftarrow}{leftarrow}{del}{del}{del}')
      .type('{enter}')

    // press enter key when input tag is blank, don't finish edit mode and still typing todo text
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-edit-input]')
      .should('to.be.focused')

    // don't accept only space charcter input. should behave as same as above blank case.(don't finish edit mode and still typing todo text)
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-edit-input]')
      .type('       ')
      .type('{enter}')

    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-edit-input]')
      .should('to.be.focused')

    // should remove item when doing blur action with blank value
    cy.get('body').click(100, 100)
    cy.get('[data-cy=todo-item]:nth-of-type(3)').should('not.exist')
  })
})
