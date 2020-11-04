import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'cypress-react-unit-test'
import { AppState, recoilState } from './dataStructure'
import { RenderResult } from '@testing-library/react'
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

export const mountCypressWithRecoilRoot = (
  ui: React.ReactElement,
  initialRecoilStateValue: AppState = defaultValue
): void =>
  mount(
    <RecoilRoot
      initializeState={({ set }: MutableSnapshot): void =>
        set(recoilState, initialRecoilStateValue)
      }
    >
      {ui}
    </RecoilRoot>
  )
