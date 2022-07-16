context('Toggle All Button', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
  })
  it('can check all task', () => {
    cy.get('[data-cy=toggle-all-btn]').click()
    cy.get('[data-cy=remaining-uncompleted-todo-count]').should('contain', '0')

    // there is no side-effect to todo items value by toggle all button
    cy.get('[data-cy=todo-item]:first-of-type').should('have.text', 'three')
    cy.get('[data-cy=todo-item]:nth-of-type(2)').should('have.text', 'two')

    // can reverse todo state to un-completed after click toggle all button again
    cy.get('[data-cy=toggle-all-btn]').click()
    cy.get('[data-cy=remaining-uncompleted-todo-count]').should('contain', '3')
    // [state: 3 todo, 0 completed] it doesn't "Clear cmpleted" button on footer
    cy.get('[data-cy=clear-completed-button]').should('not.exist')
  })
})
