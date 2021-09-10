import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { RecoilRoot } from 'recoil'
import './index.css'
import * as serviceWorker from './serviceWorkerRegistration'
import App from './App'
import ErrorBoundary from './ErrorBoundary'
import { NotFound } from './NotFound'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RecoilRoot>
        <Router>
          <App path="/" />
          <App path="/active" />
          <App path="/completed" />
          <NotFound default />
        </Router>
      </RecoilRoot>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
