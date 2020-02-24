import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Item from './index'
import { Todo } from '../../../index'

let todo: Todo
let handleCompleteCheckbox = () => undefined
let removeItem = () => undefined
let handleTodoTextEdit = () => undefined
let TestApp: React.FC

describe('<Item/ > Component Tsesting', () => {
  beforeEach(() => {
    todo = {
      id: '8btxpD9kDBlo',
      bodyText: 'cut tomato',
      completed: false
    }
    handleCompleteCheckbox = jest.fn()
    removeItem = jest.fn()
    handleTodoTextEdit = jest.fn()

    TestApp = () => {
      return (
        <div>
          <Item
            todo={todo}
            removeItem={removeItem}
            handleTodoTextEdit={handleTodoTextEdit}
            handleCompleteCheckbox={handleCompleteCheckbox}
          />
        </div>
      )
    }
  })

  test('should be correct state at first render', () => {
    const { getByTestId } = render(<TestApp />)

    // when not.completed & not.onEdit, SwitchStyle doesn't show .completed .editting selectors
    expect(getByTestId('todo-item')).not.toHaveClass('completed')
    expect(getByTestId('todo-item')).not.toHaveClass('editing')
  })

  test('should be edit mode when DoubleClick todo text', () => {
    const { getByText, getByTestId } = render(<TestApp />)

    fireEvent.doubleClick(getByText('cut tomato'))
    expect(getByTestId('todo-item')).toHaveClass('editing')
  })

  test('should be call removeItem() when delete button is clicked', () => {
    const { getByTestId } = render(<TestApp />)

    fireEvent.click(getByTestId('delete-todo-btn'))
    expect(removeItem).toHaveBeenCalledTimes(1)
  })
})
