import React, { useState, createRef, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import type { AppState, Todo, TodoListType } from '../../../dataStructure'
import { recoilState } from '../../../dataStructure'

import { Layout } from './style'

interface Props {
  todo: Todo
}

interface State {
  onEdit: boolean
}

const Item: React.FC<Props> = ({ todo }) => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState)
  const editInput = createRef<HTMLInputElement>()
  const init: State = { onEdit: false }
  const [state, setState] = useState(init)

  const onClick = (): void => {
    setState({ onEdit: true })
  }

  const onBlurEdit = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value.trim().length > 0) {
      setState({ onEdit: false })
    } else {
      removeItem(todo.id)
    }
  }

  const submitEditText = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      if (e.currentTarget.value.trim().length > 0) {
        setState({ onEdit: false })
      }
    }
  }

  // Control Todo's CSS based on complex user interaction
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

  const reverseCompleted = (id: Todo['id']): void => {
    const toggled: TodoListType = appState.todoList.map((t) => {
      // search clicked item by id...
      if (t.id === id) {
        // change complated status only clicked item
        return { ...t, completed: !t.completed }
        // return other item without any changes
      } else {
        return t
      }
    })

    setAppState({ todoList: toggled })
  }

  const removeItem = (terminate: Todo['id']): void => {
    const removed: TodoListType = appState.todoList.filter(
      (t: Todo): boolean => t.id !== terminate
    )

    setAppState({ todoList: removed })
  }

  const handleTodoTextEdit = (e: React.ChangeEvent<HTMLInputElement>, onEdit: Todo['id']): void => { /* eslint-disable-line prettier/prettier */
    const edited = appState.todoList.map((t: Todo): Todo => {
      if (t.id === onEdit) {
        return { ...t, bodyText: e.target.value }
      } else {
        return t
      }
    })

    setAppState({ todoList: edited })
  }

  useEffect(() => {
    // For fucus input element when double clicks text label. fix this https://github.com/laststance/create-react-app-typescript-todo-example-2021/issues/50
    if (state.onEdit === true && editInput.current !== null)
      editInput.current.focus()
  }, [editInput, state.onEdit])

  return (
    <Layout data-cy="todo-item">
      <li className={SwitchStyle(todo, state.onEdit)} data-testid="todo-item">
        <div className="view" data-testid="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => reverseCompleted(todo.id)}
            data-cy="todo-item-complete-check"
            data-testid="todo-item-complete-check"
          />

          {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
          <label
            onClick={onClick}
            data-cy="todo-body-text"
            data-testid="todo-body-text"
          >
            {todo.bodyText}
          </label>
          {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
          <button
            className="destroy"
            onClick={() => removeItem(todo.id)}
            data-cy="delete-todo-btn"
            data-testid="delete-todo-btn"
          />
        </div>
        <input
          ref={editInput}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlurEdit(e)}
          className="edit"
          value={todo.bodyText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTodoTextEdit(e, todo.id)} /* eslint-disable-line prettier/prettier */
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => submitEditText(e)} /* eslint-disable-line prettier/prettier */
          data-cy="todo-edit-input"
          data-testid="todo-edit-input"
        />
      </li>
    </Layout>
  )
}

export default Item
