import React from 'react'

import NewTodoTextInput from '../../src/App/NewTodoInput'
import { Layout } from '../../src/App/style'

import { mountCypressWithRecoilRoot } from './mountCypressWithRecoilRoot'

it('Translate react-testing-library from src/App/NewTodoInput/index.test.tsx', () => {
  mountCypressWithRecoilRoot(
    <Layout>
      <NewTodoTextInput />
    </Layout>
  )
  const input = cy.findByTestId('new-todo-input-text')
  // Header text
  cy.findByText('todos').should('exist')

  // Placeholder
  cy.findByPlaceholderText('What needs to be done?').should('exist')

  // type 'tidying my room' then submit
  input
    .type('tidying my room')
    .should('have.value', 'tidying my room')
    .type('{enter}')
    .should('not.have.value')
})
