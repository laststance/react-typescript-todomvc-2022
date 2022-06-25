import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import type { AppState } from '../dataStructure'
import { recoilState, LocalStorageKey } from '../dataStructure'

import Copyright from './Copyright'
import NewTodoInput from './NewTodoInput'
import { Layout } from './style'
import TodoList from './TodoList'
import UnderBar from './UnderBar'

const TodoMVC: React.FC = () => {
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
            <TodoList />
            <UnderBar />
          </>
        ) : null}
      </section>
      <Copyright />
    </Layout>
  )
}

export default TodoMVC
