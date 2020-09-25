import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { RecoilRoot, atom, RecoilState } from 'recoil'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App, { LocalStorageKey } from './App'
import ErrorBoundary from './ErrorBoundary'
import { NotFound } from './NotFound'

export type Routes = '/' | '/active' | '/completed'

export interface Todo {
  id: string
  bodyText: string
  completed: boolean
}

export type TodoListType = Todo[]

export interface AppState {
  todoList: TodoListType
}

const BlankAppState: AppState = {
  todoList: [],
}

function LoadingAppStateFromLocalStorage(BlankAppState: AppState): AppState {
  const stringifiedJSON: string | null = window.localStorage.getItem(
    LocalStorageKey.APP_STATE
  )
  if (typeof stringifiedJSON === 'string') {
    const Loaded: AppState = JSON.parse(stringifiedJSON)
    return Loaded
  }

  return BlankAppState
}

export const initialAppState: RecoilState<AppState> = atom({
  key: 'initialAppState',
  default: LoadingAppStateFromLocalStorage(BlankAppState),
})

interface Props {
  path: Routes
}
const Controller: React.FC<Props> = ({ path }) => <App path={path} />

ReactDOM.render(
  <ErrorBoundary>
    <RecoilRoot>
      <Router>
        <Controller path="/" />
        <Controller path="/active" />
        <Controller path="/completed" />
        <NotFound default />
      </Router>
    </RecoilRoot>
  </ErrorBoundary>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
