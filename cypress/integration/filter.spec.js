context('Filter', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
  })

  it('should all filter show all todos', () => {
    cy.get('[data-cy=todo-item]').should('have.length', 3)
    // done the todo
    cy.get('[data-cy=todo-item]:first-of-type')
      .find('[data-cy=todo-item-complete-check]')
      .check()
    cy.get('[data-cy=todo-item]').should('have.length', 3)

    // check footer link behavior
    cy.location().should(loc => expect(loc.pathname).to.eq('/'))
    cy.get('[data-cy=active-filter]').click()
    cy.location().should(loc => expect(loc.pathname).to.eq('/active'))
    cy.get('[data-cy=all-filter]').click()
    cy.location().should(loc => expect(loc.pathname).to.eq('/'))
    cy.get('[data-cy=todo-item]').should('have.length', 3)
  })

  it('should active filter show un-completed todos and effect to url pathname', () => {
    cy.get('[data-cy=active-filter]').click()
    cy.location().should(loc => expect(loc.pathname).to.eq('/active'))
    cy.get('[data-cy=todo-item]').should('have.length', 3)
    // done the todo
    cy.get('[data-cy=todo-item]:first-of-type')
      .find('[data-cy=todo-item-complete-check]')
      .check()
    cy.get('[data-cy=todo-item]').should('have.length', 2)
  })

  it('should completed filter show completed todos and effect to url pathname', () => {
    cy.get('[data-cy=completed-filter]').click()
    cy.location().should(loc => expect(loc.pathname).to.eq('/completed'))
    cy.get('[data-cy=todo-item]').should('not.exist')
    // done the todo
    cy.get('[data-cy=all-filter]').click()
    cy.get('[data-cy=todo-item]:first-of-type')
      .find('[data-cy=todo-item-complete-check]')
      .check()
    cy.get('[data-cy=completed-filter]').click()
    cy.get('[data-cy=todo-item]').should('have.length', 1)
  })
})
