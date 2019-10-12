import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Provider from '@ryotamurakami/react-appstate'

const initialAppState = {
  todoList: []
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider appState={initialAppState}>
      <App path="/" />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
