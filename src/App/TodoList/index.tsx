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
                return <Item key={t.id} todo={t} />
              }
            )}
        </ul>
      </section>
    </Container>
  )
}

export default TodoList
