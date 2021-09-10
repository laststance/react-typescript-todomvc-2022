import { fireEvent, screen } from '@testing-library/react'
import React from 'react'
import { useRecoilState } from 'recoil'

import type { AppState } from '../../../dataStructure'
import { recoilState } from '../../../dataStructure'
import { renderWithRecoilRoot } from '../../../testUtil'

import Item from './index'

const initialRecoilState: AppState = {
  todoList: [
    {
      id: '8btxpD9kDBlo',
      bodyText: 'cut tomato',
      completed: false,
    },
  ],
}

const App = () => {
  const [appState] = useRecoilState<AppState>(recoilState)
  if (appState.todoList.length === 0) return null
  return (
    <div>
      <Item todo={appState.todoList[0]} />
    </div>
  )
}

test('should each initialAppstate todo object value is set to Item element', () => {
  renderWithRecoilRoot(
    <Item todo={initialRecoilState.todoList[0]} />,
    initialRecoilState
  )

  expect(screen.getByTestId('todo-item')).toBeInTheDocument()

  expect(
    (screen.getByTestId('todo-item-complete-check') as HTMLInputElement).checked
  ).toBe(false)
  expect(screen.getByTestId('todo-body-text')).toHaveTextContent('cut tomato')
  expect(
    (screen.getByTestId('todo-edit-input') as HTMLInputElement).value
  ).toBe('cut tomato')
})

test('should set css classes correctly', () => {
  renderWithRecoilRoot(<App />, initialRecoilState)

  // when not.completed & not.onEdit, SwitchStyle doesn't show .completed .editting selectors
  expect(screen.getByTestId('todo-item')).not.toHaveClass('completed')
  expect(screen.getByTestId('todo-item')).not.toHaveClass('editing')
})

test('should work todo completed checkbox', () => {
  renderWithRecoilRoot(<App />, initialRecoilState)

  // click complete checkbox then should appear completed class
  fireEvent.click(screen.getByTestId('todo-item-complete-check'))
  expect(
    (screen.getByTestId('todo-item-complete-check') as HTMLInputElement).checked
  ).toBe(true)
  expect(screen.getByTestId('todo-item')).toHaveClass('completed')

  // should working as toggle
  fireEvent.click(screen.getByTestId('todo-item-complete-check'))
  expect(
    (screen.getByTestId('todo-item-complete-check') as HTMLInputElement).checked
  ).toBe(false)
  expect(screen.getByTestId('todo-item')).not.toHaveClass('completed')
})

test('should work edit mode and toggle show/hide', () => {
  renderWithRecoilRoot(<App />, initialRecoilState)

  // by default, edit input form is not visible
  expect(screen.getByTestId('todo-edit-input')).not.toBeVisible()
  // click todo text label, then focus and enable todo text edit code
  fireEvent.click(screen.getByTestId('todo-body-text'))
  expect(screen.getByTestId('todo-item')).toHaveClass('editing')
  expect(screen.getByTestId('todo-edit-input')).toBeVisible()
  expect(screen.getByTestId('todo-edit-input')).toHaveFocus()
  fireEvent.change(screen.getByTestId('todo-edit-input'), {
    target: { value: 'cut tomato plus' },
  })
  fireEvent.keyDown(screen.getByTestId('todo-edit-input'), { key: 'Enter' })

  expect(screen.getByTestId('todo-body-text')).toHaveTextContent(
    'cut tomato plus'
  )
  expect(screen.getByTestId('todo-item')).not.toHaveClass('editing')
  expect(screen.getByTestId('todo-edit-input')).not.toBeVisible()

  // click todo text label, then focus and enable todo text edit code
  fireEvent.click(screen.getByTestId('todo-body-text'))
  expect(screen.getByTestId('todo-item')).toHaveClass('editing')
  expect(screen.getByTestId('todo-edit-input')).toBeVisible()
  expect(screen.getByTestId('todo-edit-input')).toHaveFocus()
  fireEvent.change(screen.getByTestId('todo-edit-input'), {
    target: { value: 'cut tomato plus plus' },
  })
  fireEvent.keyDown(screen.getByTestId('todo-edit-input'), { key: 'Escape' })
  expect(screen.getByTestId('todo-body-text')).toHaveTextContent(
    'cut tomato plus plus'
  )
  expect(screen.getByTestId('todo-item')).not.toHaveClass('editing')
  expect(screen.getByTestId('todo-edit-input')).not.toBeVisible()
})

test('delete todo item', () => {
  renderWithRecoilRoot(<App />, initialRecoilState)

  // click delete button, then todo item is removed
  expect(screen.getByTestId('todo-item')).toBeInTheDocument()
  fireEvent.click(screen.getByTestId('delete-todo-btn'))
  expect(screen.queryByTestId('todo-item')).toBe(null)
})
