import React from 'react'
import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import NewTodoTextInput from './index'
import { InjectTestingRecoilState } from '../../testUtils'

test('should be render <TodoTextInput/>', () => {
  const screen = render(
    <RecoilRoot>
      <InjectTestingRecoilState />
      <NewTodoTextInput />
    </RecoilRoot>
  )

  // Header text
  expect(screen.getByText('todos')).toBeInTheDocument()
  // Text input
  expect(screen.getByTestId('new-todo-input-text')).toBeInTheDocument()
})
