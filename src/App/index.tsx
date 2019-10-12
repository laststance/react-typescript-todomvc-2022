import React, { Fragment } from 'react'
import { useAppState } from '@ryotamurakami/react-appstate'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import { Routes, AppState } from '../index'
import { RouteComponentProps } from '@reach/router'
import { Layout } from './style'

export const LocalStorageKey = {
  AppState: 'AppState'
}

interface Props {
  path: Routes
}

const App = ({ path }: Props & RouteComponentProps) => {
  const [appState] = useAppState<AppState>()
  // preserve every appState changes.
  window.localStorage.setItem(
    LocalStorageKey.AppState,
    JSON.stringify(appState)
  )

  return (
    <Layout>
      <section className="todoapp">
        <Header />
        {appState.todoList.length ? (
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
