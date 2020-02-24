import React, { ReactElement } from 'react'
import { Routes, Todo, AppState, TodoListType } from '../../index'
import Item from './Item'
import { useAppState } from '@laststance/use-app-state'
import { Container } from './style'

interface Props {
  path: Routes
}

const TodoList: React.FC<Props> = ({ path }) => {
  const [appState, setAppState] = useAppState<AppState>()

  function toggleAllCompletedCheck(e: React.ChangeEvent<HTMLInputElement>): void { /* eslint-disable-line prettier/prettier */
    const appliedCheckBox: TodoListType = appState.todoList.map((t: Todo) => {
      return { ...t, completed: e.target.checked }
    })
    setAppState({
      todoList: appliedCheckBox
    })
  }

  const handleCompleteCheckbox = (clicked: Todo['id']): void => {
    const toggled: TodoListType = appState.todoList.map(
      (t: Todo): Todo => {
        // change complated status for only clicked item
        if (t.id === clicked) {
          return { ...t, completed: !t.completed }
        } else {
          return t
        }
      }
    )

    setAppState({ todoList: toggled })
  }

  const removeItem = (terminate: Todo['id']): void => {
    const removed: TodoListType = appState.todoList.filter(
      (t: Todo): boolean => t.id !== terminate
    )

    setAppState({ todoList: removed })
  }

  const handleTodoTextEdit = (e: React.ChangeEvent<HTMLInputElement>, onEdit: Todo['id']): void => { /* eslint-disable-line prettier/prettier */
    const edited = appState.todoList.map(
      (t: Todo): Todo => {
        if (t.id === onEdit) {
          return { ...t, bodyText: e.target.value }
        } else {
          return t
        }
      }
    )

    setAppState({ todoList: edited })
  }

  return (
    <Container>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={toggleAllCompletedCheck}
          data-cy="toggle-all-btn"
          data-testid="toggle-all-btn"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list" data-testid="todo-list">
          {appState.todoList
            .filter((t: Todo): boolean => {
              switch (path) {
                case '/':
                  return true
                case '/active':
                  return t.completed === false
                case '/completed':
                  return t.completed === true
                default:
                  return true
              }
            })
            .map(
              (t: Todo): ReactElement => {
                return (
                  <Item
                    key={t.id}
                    todo={t}
                    handleCompleteCheckbox={handleCompleteCheckbox}
                    handleTodoTextEdit={handleTodoTextEdit}
                    removeItem={removeItem}
                  />
                )
              }
            )}
        </ul>
      </section>
    </Container>
  )
}

export default TodoList
