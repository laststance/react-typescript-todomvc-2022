import React from 'react'
import { render } from '@testing-library/react'
import Provider from '@laststance/use-app-state'
import TodoTextInput from './index'
import { AppState } from '../../index'
import '@testing-library/jest-dom'

const initialState: AppState = {
  todoList: [],
}

test('should be render <TodoTextInput/>', () => {
  const screen = render(
    <Provider initialState={initialState}>
      <TodoTextInput />
    </Provider>
  )

  // Header text
  expect(screen.getByText('todos')).toBeInTheDocument()
  // Text input
  expect(screen.getByTestId('new-todo-input-text')).toBeInTheDocument()
})
