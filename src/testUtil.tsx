import type { RenderResult } from '@testing-library/react'
import { render } from '@testing-library/react'
import React from 'react'
import type { MutableSnapshot } from 'recoil'
import { RecoilRoot } from 'recoil'

import type { AppState } from './dataStructure'
import { recoilState } from './dataStructure'

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
