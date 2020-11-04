import React from 'react'
import NewTodoTextInput from './index'
import { renderWithRecoilRoot } from '../../testUtils'

test('should be render <TodoTextInput/>', () => {
  const screen = renderWithRecoilRoot(<NewTodoTextInput />)

  // Header text
  expect(screen.getByText('todos')).toBeInTheDocument()
  // Text input
  expect(screen.getByTestId('new-todo-input-text')).toBeInTheDocument()
  expect(
    screen.getByPlaceholderText('What needs to be done?')
  ).toBeInTheDocument()
})
