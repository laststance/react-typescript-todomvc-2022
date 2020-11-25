context('Check Todo', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
  })

  context('No Exist Checked', () => {
    it('remain task counter can display correct number', () => {
      cy.get('[data-cy=remaining-uncompleted-todo-count]').should(
        'contain',
        '3'
      )
    })
    it('does not show "Clear cmpleted" button on footer', () => {
      cy.get('[data-cy=clear-completed-button]').should('not.exist')
    })
  })

  it('working check toggle each todo', () => {
    // can check todo 'three' as comoleted
    cy.get('[data-cy=todo-item]:first-of-type')
      .should('have.text', 'three')
      .find('[data-cy=todo-item-complete-check]')
      .check()
      .should('have.checked')
    cy.get('[data-cy=remaining-uncompleted-todo-count]').should('contain', '2')
    // it should show "Clear cmpleted" button on footer
    cy.get('[data-cy=clear-completed-button]').should('be.visible')
    cy.percySnapshot('Checked Completed Checkbox')

    // can check todo 'two' as comoleted
    cy.get('[data-cy=todo-item]:nth-of-type(2)')
      .should('have.text', 'two')
      .find('[data-cy=todo-item-complete-check]')
      .check()
      .should('have.checked')
    //  it should show "Clear cmpleted" button on footer
    cy.get('[data-cy=clear-completed-button]').should('be.visible')

    // can un-check todo 'three' as un-completed
    cy.get('[data-cy=todo-item]:first-of-type')
      .should('have.text', 'three')
      .find('[data-cy=todo-item-complete-check]')
      .click()
      .should('not.have.checked')
  })
})
