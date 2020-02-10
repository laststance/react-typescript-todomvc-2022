import React, { useEffect } from 'react'
import { useAppState } from '@laststance/use-app-state'
import Header from './Header'
import TodoList from './TodoList'
import Menu from './Menu'
import Copyright from './Copyright'
import { Routes, AppState } from '../index'
import { RouteComponentProps } from '@reach/router'
import { Layout } from './style'

export enum LocalStorageKey {
  APP_STATE = 'APP_STATE'
}

interface Props {
  path: Routes
}

const App: React.FC<Props & RouteComponentProps> = ({ path }) => {
  const [appState] = useAppState<AppState>()

  // if appState has changes, save it LocalStorage.
  useEffect((): void => {
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState) // convert JavaScript Object to string
    )
  }, [appState])

  return (
    <Layout>
      <section className="todoapp">
        <Header />
        {appState.todoList.length ? (
          <>
            <TodoList path={path} />
            <Menu path={path} />
          </>
        ) : null}
      </section>
      <Copyright />
    </Layout>
  )
}

export default App
