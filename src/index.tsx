import { Router } from '@reach/router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import './index.css'
import App from './App'
import ErrorBoundary from './ErrorBoundary'
import { NotFound } from './NotFound'
import * as serviceWorker from './serviceWorkerRegistration'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
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
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
