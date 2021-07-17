import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { AppState, recoilState } from './dataStructure'

import { MutableSnapshot, RecoilRoot } from 'recoil'

const defaultValue: AppState = {
  todoList: [],
}

export const renderWithRecoilRoot = (
  ui: React.ReactElement,
  initialRecoilStateValue: AppState = defaultValue
): RenderResult =>
  render(
    <RecoilRoot
      initializeState={({ set }: MutableSnapshot): void =>
        set(recoilState, initialRecoilStateValue)
      }
    >
      {ui}
    </RecoilRoot>
  )
