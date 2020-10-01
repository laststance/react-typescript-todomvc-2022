import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import NewTodoInput from './NewTodoInput'
import TodoList from './TodoList'
import UnderBar from './UnderBar'
import Copyright from './Copyright'
import { RouteComponentProps } from '@reach/router'
import { Layout } from './style'
import {
  AppState,
  recoilState,
  LocalStorageKey,
  Routes,
} from '../dataStructure'

interface Props {
  path: Routes
}

const App: React.FC<Props & RouteComponentProps> = ({ path }) => {
  const appState = useRecoilValue<AppState>(recoilState)

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
        <NewTodoInput />
        {appState.todoList.length ? (
          <>
            <TodoList path={path} />
            <UnderBar path={path} />
          </>
        ) : null}
      </section>
      <Copyright />
    </Layout>
  )
}

export default App
