import React from 'react'
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

test('should correct render default class state', () => {
  const App = () => {
    const [store] = useStore<Store>()
    return (
      <div>
        <Item todo={store.todoList[0]} />
      </div>
    )
  }
  const { container } = render(
    <Provider store={initialStore}>
      <App />
    </Provider>
  )

  // when not.completed & not.onEdit, SwitchStyle doesn't show .completed .editting selectors
  expect(container.querySelector('[class*="completed"]')).toBe(null)
  expect(container.querySelector('[class*="editing"]')).toBe(null)
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

  // click complete checkbox then should appear completed class
  fireEvent.click(getByTestId('todo-item-complete-check'))
  expect(
    (getByTestId('todo-item-complete-check') as HTMLInputElement).checked
  ).toBe(true)
  expect(container.querySelector('[class*="completed"]')).toBeTruthy()

  // should working as toggle
  fireEvent.click(getByTestId('todo-item-complete-check'))

  expect(
    (getByTestId('todo-item-complete-check') as HTMLInputElement).checked
  ).toBe(false)
  expect(container.querySelector('[class*="completed"]')).toBe(null)
})

test('should work edit mode toggle', () => {
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

  // by default, edit input form is not visible
  expect(getByTestId('todo-edit-input')).not.toBeVisible()

  // double click todo text label, then enable todo text edit code

  fireEvent.doubleClick(getByTestId('todo-body-text'))
  expect(container.querySelector('[class*="editing"]')).toBeTruthy()
  // @TODO in jsdom, dynamic .editing classCSSSelector doesn't apply. So tipically show/hide UI test are difficult.
  // @ref https://spectrum.chat/testing-library/general/testing-an-accordion~b004a9b1-b104-4eb1-a73b-43c60b1a3630?m=MTU1NDQ4NDIzMTQ5Ng==
  //expect(getByTestId('todo-edit-input')).toBeVisible()

  fireEvent.change(getByTestId('todo-edit-input'), {
    target: { value: 'cut tomato plus' }
  })
  //@TODO why fireEvent.keyPress() didn't work?
  // fireEvent.keyPress(getByTestId('todo-edit-input'), {
  //   key: 'Enter',
  //   code: 13
  // })

  expect(getByTestId('todo-body-text')).toHaveTextContent('cut tomato plus')
  // @TODO why fireEvent.keyPress() didn't work?
  //expect(container.querySelector('[class*="editing"]')).toBe(null)
  // @TODO in jsdom, dynamic .editing classCSSSelector doesn't apply. So tipically show/hide UI test are difficult.
  // @ref https://spectrum.chat/testing-library/general/testing-an-accordion~b004a9b1-b104-4eb1-a73b-43c60b1a3630?m=MTU1NDQ4NDIzMTQ5Ng==
  //expect(getByTestId('todo-edit-input')).not.toBeVisible()
})
