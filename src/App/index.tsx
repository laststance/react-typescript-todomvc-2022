import React, { Fragment } from 'react'
import { useStore } from 'muriatic'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import { Routes, Store } from '../index'
import { RouteComponentProps } from '@reach/router'
import { Layout } from './style'

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
    <Layout>
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
    </Layout>
  )
}

export default App
