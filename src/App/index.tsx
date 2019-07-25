import React, { Fragment } from 'react'
import { useStore } from 'muriatic'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import { Routes, Store } from '../index'
import { RouteComponentProps } from '@reach/router'

export const LocalStorageKey = {
  Store: 'Store'
}

interface Props {
  path: Routes
}

const App = ({ path }: Props & RouteComponentProps) => {
  const [store] = useStore<Store>()
  // preserve every store changes.
  window.localStorage.setItem(LocalStorageKey.Store, JSON.stringify(store))

  return (
    <Fragment>
      <section className="todoapp">
        <Header />
        {store.todoList.length ? (
          <Fragment>
            <TodoList path={path} />
            <Footer path={path} />
          </Fragment>
        ) : null}
      </section>
      <footer className="info">
        <p>
          Created by{' '}
          <a href="https://ryota-murakami.github.io/">Ryota Murakamai</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </Fragment>
  )
}

export default App
