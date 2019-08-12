import React from 'react'
import { Routes, Todo, Store } from '../../index'
import Item from '../Item'
import { useStore } from 'muriatic'
import { Layout } from './style'

interface Props {
  path: Routes
}

interface Props {
  path: Routes
}

function TodoList({ path }: Props) {
  const [store, setStore] = useStore<Store>()

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStore({
      todoList: store.todoList.map((t: Todo) => {
        return { ...t, completed: e.target.checked }
      })
    })

  return (
    <Layout>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={toggleAll}
          data-cy="toggle-all-btn"
          data-testid="toggle-all-btn"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list" data-testid="todo-list">
          {store.todoList
            .filter((t: Todo) => {
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
            .map((t: Todo) => {
              return <Item key={t.id} todo={t} />
            })}
        </ul>
      </section>
    </Layout>
  )
}

export default TodoList
