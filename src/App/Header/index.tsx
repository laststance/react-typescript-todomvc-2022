import React, { createRef } from 'react'
import { UUID } from '../../functions'
import { Todo, Store } from '../../index'
import { useStore } from 'muriatic'

function Header() {
  const [store, setStore] = useStore<Store>()
  const textInput = createRef<HTMLInputElement>()

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (textInput.current === null) return

    if (e.key === 'Enter' && textInput.current.value.length > 0) {
      const todo: Todo = {
        id: UUID(),
        bodyText: textInput.current.value,
        completed: false
      }

      setStore({ todoList: [todo, ...store.todoList] })

      textInput.current.value = ''
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        ref={textInput}
        onKeyPress={e => addTodo(e)}
        autoFocus
        data-cy="new-todo-input-text"
      />
    </header>
  )
}

export default Header
