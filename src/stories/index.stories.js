import React from 'react'
import Item from '../App/Item/index.tsx'
import Provider from 'muriatic'

export default { title: 'Item' }

const initialStore = {
  todoList: [
    {
      id: '498u305ri90',
      bodyText: 'apple',
      completed: true
    }
  ]
}

const todo = {
  id: '8btxpD9kDBlo',
  bodyText: 'cut tomato',
  completed: false
}

export const withTodo = () => (
  <Provider store={initialStore}>
    <Item todo={todo} />
  </Provider>
)
