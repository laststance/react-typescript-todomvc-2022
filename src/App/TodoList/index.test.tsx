import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Provider from '@ryotamurakami/react-appstate'
import '@testing-library/jest-dom/extend-expect'
import TodoList from './index'
import { AppState } from '../../index'

const initialAppState: AppState = {
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
    {
      id: 'QwejYipEf5nk',
      bodyText: 'caffe latte',
      completed: false
    }
  ]
}

test('should render appStated todo values', () => {
  const { getByTestId, getAllByTestId } = render(
    <Provider appState={initialAppState}>
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

test('should reflect appState value change to render elements', () => {
  const { getByTestId, getAllByTestId } = render(
    <Provider appState={initialAppState}>
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

test('should click toggle-all-button, then all item being comlete checked true and vice versa', () => {
  const { getByTestId, getAllByTestId } = render(
    <Provider appState={initialAppState}>
      <TodoList path="/" />
    </Provider>
  )

  // toggle on
  fireEvent.click(getByTestId('toggle-all-btn'))
  expect((getAllByTestId('todo-item-complete-check')[0] as HTMLInputElement).checked).toBe(true) /* eslint-disable-line prettier/prettier */
  expect((getAllByTestId('todo-item-complete-check')[1] as HTMLInputElement).checked).toBe(true) /* eslint-disable-line prettier/prettier */
  expect((getAllByTestId('todo-item-complete-check')[2] as HTMLInputElement).checked).toBe(true) /* eslint-disable-line prettier/prettier */

  // toggle off
  fireEvent.click(getByTestId('toggle-all-btn'))
  expect((getAllByTestId('todo-item-complete-check')[0] as HTMLInputElement).checked).toBe(false) /* eslint-disable-line prettier/prettier */
  expect((getAllByTestId('todo-item-complete-check')[1] as HTMLInputElement).checked).toBe(false) /* eslint-disable-line prettier/prettier */
  expect((getAllByTestId('todo-item-complete-check')[2] as HTMLInputElement).checked).toBe(false) /* eslint-disable-line prettier/prettier */
})
