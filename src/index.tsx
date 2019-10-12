import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import Provider from '@ryotamurakami/react-appstate'
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

let initialAppState: AppState = {
  todoList: []
}

const preserved: string | null = window.localStorage.getItem(
  LocalStorageKey.AppState
)
if (preserved !== null) {
  const decorded: AppState = JSON.parse(preserved)
  initialAppState = decorded
}

ReactDOM.render(
  <ErrorBoundary>
    <Provider appState={initialAppState}>
      <Router>
        <App path="/" />
        <App path="/active" />
        <App path="/completed" />
        <NotFound default />
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
