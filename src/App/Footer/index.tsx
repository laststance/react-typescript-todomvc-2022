import React from 'react'
import FilterLink from './FilterLink'
import { Routes, Todo, Store } from '../../index'
import { useStore } from 'muriatic'

interface Props {
  path: Routes
}

const Footer = ({ path }: Props) => {
  const [store, setStore] = useStore<Store>()
  const doneCount: number = store.todoList.filter(t => t.completed === true).length /* eslint-disable-line prettier/prettier */
  const yetCount: number = store.todoList.filter(t => t.completed === false).length /* eslint-disable-line prettier/prettier */

  const clearComoleted = (): void => {
    setStore({ todoList: store.todoList.filter((t: Todo) => !t.completed) })
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong data-cy="remaining-uncompleted-todo-count">{yetCount}</strong>{' '}
        item left
      </span>
      <FilterLink path={path} />

      {doneCount > 0 && (
        <button
          onClick={clearComoleted}
          className="clear-completed"
          data-cy="clear-completed-button"
        >
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default Footer
