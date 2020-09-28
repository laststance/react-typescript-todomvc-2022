import React from 'react'
import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import TodoTextInput from './index'
import '@testing-library/jest-dom'
import { InjectTestingRecoilState } from '../../testUtils'

test('should be render <TodoTextInput/>', () => {
  const screen = render(
    <RecoilRoot>
      <InjectTestingRecoilState />
      <TodoTextInput />
    </RecoilRoot>
  )

  // Header text
  expect(screen.getByText('todos')).toBeInTheDocument()
  // Text input
  expect(screen.getByTestId('new-todo-input-text')).toBeInTheDocument()
})
