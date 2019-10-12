import React, { useState } from 'react'
import { AppState, Todo } from '../../index'
import { useAppState } from '@ryotamurakami/react-appstate'
import { Layout } from './style'

interface Props {
  todo: Todo
}

interface State {
  onEdit: boolean
}

const Item = ({ todo }: Props) => {
  const [appState, setAppState] = useAppState<AppState>()
  const init: State = { onEdit: false }
  const [state, setState] = useState(init)

  const setOnEditTrue = () => {
    setState({ onEdit: true })
  }
  const setOnEditFalse = () => {
    setState({ onEdit: false })
  }

  const submitEditText = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      if (e.currentTarget.value.trim().length > 0) {
        setOnEditFalse()
      }
    }
  }

  const SwitchStyle = (t: Todo, onEdit: boolean): string => {
    switch (true) {
      case onEdit && t.completed:
        return 'completed editing'
      case onEdit && !t.completed:
        return 'editing'
      case !onEdit && t.completed:
        return 'completed'
      case !onEdit && !t.completed:
        return ''

      default:
        return ''
    }
  }

  const toggleCompleted = (clicked: Todo['id']): void => {
    setAppState({
      todoList: appState.todoList.map((t: Todo) => {
        if (t.id === clicked) {
          return { ...t, completed: !t.completed }
        } else {
          return t
        }
      })
    })
  }

  const removeItem = (terminate: Todo['id']): void => {
    setAppState({
      todoList: appState.todoList.filter((t: Todo) => t.id !== terminate)
    })
  }

  const handleTextInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    onEdit: Todo['id']
  ): void => {
    setAppState({
      todoList: appState.todoList.map((t: Todo) => {
        if (t.id === onEdit) {
          return { ...t, bodyText: e.target.value }
        } else {
          return t
        }
      })
    })
  }

  return (
    <Layout data-cy="todo-item">
      <li className={SwitchStyle(todo, state.onEdit)} data-testid="todo-item">
        <div className="view" data-testid="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCompleted(todo.id)}
            data-cy="todo-item-complete-check"
            data-testid="todo-item-complete-check"
          />
          <label
            onDoubleClick={setOnEditTrue}
            data-cy="todo-body-text"
            data-testid="todo-body-text"
          >
            {todo.bodyText}
          </label>
          <button
            className="destroy"
            onClick={() => removeItem(todo.id)}
            data-cy="delete-todo-btn"
            data-testid="delete-todo-btn"
          />
        </div>
        <input
          onBlur={setOnEditFalse}
          className="edit"
          autoFocus={state.onEdit ? true : false}
          value={todo.bodyText}
          onChange={e => handleTextInput(e, todo.id)}
          onKeyPress={e => submitEditText(e)}
          data-cy="todo-edit-input"
          data-testid="todo-edit-input"
        />
      </li>
    </Layout>
  )
}

export default Item
