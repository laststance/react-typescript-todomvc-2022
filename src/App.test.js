import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import { InjectTestingRecoilState } from './testUtils'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <RecoilRoot>
      <InjectTestingRecoilState />
      <App path="/" />
    </RecoilRoot>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
