context('Mobile Real World Usecase', () => {
  beforeEach(() => {
    cy.submitTripleTodos()
    cy.viewport('iphone-6')
  })
  it('will try all function in one session', () => {
    cy.percySnapshot('Moble 3 Todo Items')
    // remain task counter can display correct number
    cy.get('[data-cy=remaining-uncompleted-todo-count]').should('contain', '3')
    // [state: 3 todo, 0 completed] it doesn't show "Clear cmpleted" button on footer
    cy.get('[data-cy=clear-completed-button]').should('not.exist')

    // can check todo 'three' as comoleted
    cy.get('[data-cy=todo-item]:first-of-type')
      .should('have.text', 'three')
      .find('[data-cy=todo-item-complete-check]')
      .check()
      .should('have.checked')
    cy.get('[data-cy=remaining-uncompleted-todo-count]').should('contain', '2')
    // [state: 3 todo, 1 completed] it should show "Clear cmpleted" button on footer
    cy.get('[data-cy=clear-completed-button]').should('be.visible')

    // can check todo 'two' as comoleted
    cy.get('[data-cy=todo-item]:nth-of-type(2)')
      .should('have.text', 'two')
      .find('[data-cy=todo-item-complete-check]')
      .check()
      .should('have.checked')
    // [state: 3 todo, 2 completed] it should show "Clear cmpleted" button on footer
    cy.get('[data-cy=clear-completed-button]').should('be.visible')

    // can un-check todo 'three' as un-completed
    cy.get('[data-cy=todo-item]:first-of-type')
      .should('have.text', 'three')
      .find('[data-cy=todo-item-complete-check]')
      .click()
      .should('not.have.checked')

    // can all task checked as completed by click toggle all button
    cy.get('[data-cy=toggle-all-btn]').click({ force: true }) // { force: true } reason @see https://github.com/laststance/create-react-app-typescript-todo-example-2021/issues/288
    cy.get('[data-cy=remaining-uncompleted-todo-count]').should('contain', '0')
    // there is no side-effect to todo items value by toggle all button
    cy.get('[data-cy=todo-item]:first-of-type').should('have.text', 'three')
    cy.get('[data-cy=todo-item]:nth-of-type(2)').should('have.text', 'two')
    // can reverse todo state to un-completed after click toggle all button again
    cy.get('[data-cy=toggle-all-btn]').click({ force: true }) // { force: true } reason @see https://github.com/laststance/create-react-app-typescript-todo-example-2021/issues/288
    cy.get('[data-cy=remaining-uncompleted-todo-count]').should('contain', '3')
    // [state: 3 todo, 0 completed] it doesn't "Clear cmpleted" button on footer
    cy.get('[data-cy=clear-completed-button]').should('not.exist')

    // can edit todo text
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-body-text]')
      .should('contain', 'one')
      .click()
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-edit-input]')
      .type(' of kind')
      .type('{enter}')
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-body-text]')
      .should('contain', 'one of kind')

    // can edit completed todo
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-item-complete-check]')
      .check()
      .should('have.checked')
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-body-text]')
      .should('contain', 'one of kind')
      .dblclick()
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-edit-input]')
      .type(' more')
      .type('{enter}')
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=todo-body-text]')
      .should('contain', 'one of kind more')

    // can delete mouse-hovering todo by push [x] button
    cy.get('[data-cy=todo-item]:nth-of-type(3)')
      .find('[data-cy=delete-todo-btn]')
      .click({ force: true }) // Actually this bth is hidden until invole :hover selector. but sypress struggling at the point
    // @see https://docs.cypress.io/api/commands/hover.html#Workarounds

    cy.get('[data-cy=remaining-uncompleted-todo-count]').should('contain', '2')
  })
})
