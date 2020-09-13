import React, { useEffect } from 'react'
import { useAppState } from '@laststance/use-app-state'
import NewTodoInput from './NewTodoInput'
import TodoList from './TodoList'
import UnderBar from './UnderBar'
import Copyright from './Copyright'
import { Routes, AppState } from '../index'
import { RouteComponentProps } from '@reach/router'
import { Container } from './style'

export enum LocalStorageKey {
  APP_STATE = 'APP_STATE',
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
    <Container>
      <section className="todoapp">
        <NewTodoInput />
        {appState.todoList.length ? (
          <>
            <TodoList path={path} />
            <UnderBar path={path} />
          </>
        ) : null}
      </section>
      <Copyright />
    </Container>
  )
}

export default App
