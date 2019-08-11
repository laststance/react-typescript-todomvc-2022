import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Provider, { useStore } from 'muriatic'
import '@testing-library/jest-dom/extend-expect'
import Item from './index'
import { Store } from '../../index'

const initialStore: Store = {
  todoList: [
    {
      id: '8btxpD9kDBlo',
      bodyText: 'cut tomato',
      completed: false
    },
    {
      id: 'jCgRR0W1avey',
      bodyText: 'sleep',
      completed: false
    },
    {
      id: '7zkdYTYu9xqn',
      bodyText: 'chill',
      completed: false
    }
  ]
}

afterEach(cleanup)

test('should each todo object value is set to Item element', () => {
  const { getByTestId } = render(
    <Provider store={initialStore}>
      <Item todo={initialStore.todoList[0]} />
    </Provider>
  )

  expect(getByTestId('todo-item')).toBeTruthy()

  expect(
    (getByTestId('todo-item-complete-check') as HTMLInputElement).checked
  ).toBe(false)
  expect(getByTestId('todo-body-text')).toHaveTextContent('cut tomato')
  expect((getByTestId('todo-edit-input') as HTMLInputElement).value).toBe(
    'cut tomato'
  )
})

test('should work "check" complete toggle button', () => {
  const App = () => {
    const [store] = useStore<Store>()
    return (
      <div>
        <Item todo={store.todoList[0]} />
      </div>
    )
  }

  const { getByTestId, container } = render(
    <Provider store={initialStore}>
      <App />
    </Provider>
  )

  // when not.completed & not.onEdit, SwitchStyle doesn't show .completed .editting selectors
  expect(container.querySelector('[class*="completed"]')).toBe(null)
  expect(container.querySelector('[class*="editting"]')).toBe(null)

  act(() => {
    // click complete checkbox
    fireEvent.click(getByTestId('todo-item-complete-check'))
  })

  expect(
    (getByTestId('todo-item-complete-check') as HTMLInputElement).checked
  ).toBe(true)

  expect(container.querySelector('[class*="completed"]')).toBeTruthy()
})
