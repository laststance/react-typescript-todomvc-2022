import React from 'react'
import { render } from '@testing-library/react'
import Provider from 'muriatic'
import '@testing-library/jest-dom/extend-expect'
import Item from './index'
import { Store, Todo } from '../../index'

const todo: Todo = {
  id: '8btxpD9kDBlo',
  bodyText: 'cut tomato',
  completed: false
}

const initialStore: Store = { todoList: [todo] }

test('should each todo object value is set to Item element', () => {
  const { getByTestId } = render(
    <Provider store={initialStore}>
      <Item todo={todo} />
    </Provider>
  )

  expect(getByTestId('todo-item')).toBeTruthy()
  // @ts-ignore Error:(25, 50) TS2339: Property 'checked' does not exist on type 'HTMLElement'.
  expect(getByTestId('todo-item-complete-check').checked).toBe(false)
  expect(getByTestId('todo-body-text')).toHaveTextContent('cut tomato')
  // @ts-ignore Error:(27, 41) TS2339: Property 'value' does not exist on type 'HTMLElement'.
  expect(getByTestId('todo-edit-input').value).toBe('cut tomato')
})
