import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Provider from 'muriatic'
import '@testing-library/jest-dom/extend-expect'
import TodoList from './index'
import { Store } from '../../index'

const initialStore: Store = {
  todoList: [
    {
      id: 'TsHx9eEN5Y4A',
      bodyText: 'monster',
      completed: false
    },
    {
      id: 'ba91OwrK0Dt8',
      bodyText: 'boss black',
      completed: false
    },
    { id: 'QwejYipEf5nk', bodyText: 'caffe latte', completed: false }
  ]
}

afterEach(cleanup)

test('should render stored todo values', () => {
  const { getByTestId, getAllByTestId } = render(
    <Provider store={initialStore}>
      <TodoList path="/" />
    </Provider>
  )

  expect(getByTestId('todo-list')).toBeInTheDocument()
  expect(getByTestId('todo-list').children.length).toBe(3)
  expect(Array.isArray(getAllByTestId('todo-item'))).toBe(true)
  expect(getAllByTestId('todo-item')[0]).toHaveTextContent('monster')
  expect(getAllByTestId('todo-item')[1]).toHaveTextContent('boss black')
  expect(getAllByTestId('todo-item')[2]).toHaveTextContent('caffe latte')
})

test('should reflect store value change to render elements', () => {
  const { getByTestId, getAllByTestId } = render(
    <Provider store={initialStore}>
      <TodoList path="/" />
    </Provider>
  )

  // delete first todo
  fireEvent.click(getAllByTestId('delete-todo-btn')[0])
  expect(getByTestId('todo-list').children.length).toBe(2)
  expect(Array.isArray(getAllByTestId('todo-item'))).toBe(true)
  expect(getAllByTestId('todo-item')[0]).toHaveTextContent('boss black')
  expect(getAllByTestId('todo-item')[1]).toHaveTextContent('caffe latte')
})
