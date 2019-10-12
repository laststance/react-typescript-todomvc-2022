import React, { createRef } from 'react'
import { UUID } from '../../functions'
import { Todo, AppState } from '../../index'
import { useAppState } from '@ryotamurakami/react-appstate'
import { Layout } from './style'

function Header() {
  const [appState, setAppState] = useAppState<AppState>()
  const textInput = createRef<HTMLInputElement>()

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (textInput.current === null) return

    if (e.key === 'Enter' && textInput.current.value.length > 0) {
      const todo: Todo = {
        id: UUID(),
        bodyText: textInput.current.value,
        completed: false
      }

      setAppState({ todoList: [todo, ...appState.todoList] })

      textInput.current.value = ''
    }
  }

  return (
    <Layout>
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
    </Layout>
  )
}

export default Header
