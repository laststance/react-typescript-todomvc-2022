import React from 'react'
import FilterLink from './FilterLink'
import { Routes, Todo, AppState } from '../../index'
import { useAppState } from '@laststance/use-app-state'
import { Layout } from './style'

interface Props {
  path: Routes
}

const UnderBar: React.FC<Props> = ({ path }) => {
  const [appState, setAppState] = useAppState<AppState>()
  const doneCount: number = appState.todoList.filter(t => t.completed === true).length /* eslint-disable-line prettier/prettier */
  const yetCount: number = appState.todoList.filter(t => t.completed === false).length /* eslint-disable-line prettier/prettier */

  function clearCompleted(): void {
    setAppState({
      todoList: appState.todoList.filter((t: Todo) => !t.completed),
    })
  }

  return (
    <Layout>
      <footer className="footer">
        <span className="todo-count">
          <strong data-cy="remaining-uncompleted-todo-count">{yetCount}</strong>{' '}
          item left
        </span>
        <FilterLink path={path} />

        {doneCount > 0 && (
          <button
            onClick={clearCompleted}
            className="clear-completed"
            data-cy="clear-completed-button"
          >
            Clear completed
          </button>
        )}
      </footer>
    </Layout>
  )
}

export default UnderBar
