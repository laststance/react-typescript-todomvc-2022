import type { MountReturn } from '@cypress/react'
import { mount } from '@cypress/react'
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

export const mountCypressWithRecoilRoot = (
  ui: React.ReactElement,
  initialRecoilStateValue: AppState = defaultValue
): Cypress.Chainable<MountReturn> =>
  mount(
    <RecoilRoot
      initializeState={({ set }: MutableSnapshot): void =>
        set(recoilState, initialRecoilStateValue)
      }
    >
      {ui}
    </RecoilRoot>
  )
