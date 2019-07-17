import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Provider from 'muriatic'

const initialStore = {
  todoList: []
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={initialStore}>
      <App path="/" />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
