import type { RenderResult } from '@testing-library/react'
import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import type { MutableSnapshot } from 'recoil'
import { RecoilRoot } from 'recoil'

import type { AppState } from './dataStructure'
import { recoilState } from './dataStructure'

const defaultValue: AppState = {
  todoList: [],
}

export const TestRenderer = (
  ui: React.ReactElement,
  initialRecoilStateValue: AppState = defaultValue
): RenderResult =>
  render(
    <BrowserRouter>
      <RecoilRoot
        initializeState={({ set }: MutableSnapshot): void =>
          set(recoilState, initialRecoilStateValue)
        }
      >
        {ui}
      </RecoilRoot>
    </BrowserRouter>
  )
