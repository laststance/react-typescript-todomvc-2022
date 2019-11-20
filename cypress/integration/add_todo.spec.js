context('Add Todo', () => {
  it('can add todo', () => {
    cy.visit('http://localhost:3000/')

    // can type text and submit
    cy.get('[data-cy=new-todo-input-text]')
      .type('can be typing')
      .should('have.value', 'can be typing')
      .type('{enter}')
      .should('not.have.value')

    // it is added a submited todo
    cy.get('[data-cy=todo-item]')
      .should('exist')
      .should('contain', 'can be typing')

    // can add 2 more todos
    cy.get('[data-cy=new-todo-input-text]')
      .type('two')
      .should('have.value', 'two')
      .type('{enter}')
      .should('not.have.value')
    cy.get('[data-cy=todo-item]')
      .should('exist')
      .should('contain', 'two')

    cy.get('[data-cy=new-todo-input-text]')
      .type('three')
      .should('have.value', 'three')
      .type('{enter}')
      .should('not.have.value')
    cy.get('[data-cy=todo-item]')
      .should('exist')
      .should('contain', 'three')
  })
})
