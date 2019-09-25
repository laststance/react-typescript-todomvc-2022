import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import Provider from 'muriatic'
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

export interface Store {
  todoList: TodoListType
}

let initialStore: Store = {
  todoList: []
}

const preserved: string | null = window.localStorage.getItem(
  LocalStorageKey.Store
)
if (preserved !== null) {
  const decorded: Store = JSON.parse(preserved)
  initialStore = decorded
}

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={initialStore}>
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
