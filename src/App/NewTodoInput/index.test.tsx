import React from 'react'
import NewTodoTextInput from './index'
import { renderWithReciolRoot } from '../../testUtils'

test('should be render <TodoTextInput/>', () => {
  const screen = renderWithReciolRoot(<NewTodoTextInput />)

  // Header text
  expect(screen.getByText('todos')).toBeInTheDocument()
  // Text input
  expect(screen.getByTestId('new-todo-input-text')).toBeInTheDocument()
})
