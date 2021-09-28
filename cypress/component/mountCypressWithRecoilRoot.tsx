import type { MountReturn } from '@cypress/react'
import { mount } from '@cypress/react'
import React from 'react'
import type { MutableSnapshot } from 'recoil'
import { RecoilRoot } from 'recoil'

import { recoilState } from '../../src/dataStructure'
import type { AppState } from '../../src/dataStructure'

const defaultValue: AppState = {
  todoList: [],
}
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
