import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'

import App from './App'
import { recoilState } from './dataStructure'

it('renders without crashing', () => {
  const div = document.createElement('div')

  const todo = {
    todoList: [
      {
        id: 'TsHx9eEN5Y4A',
        bodyText: 'monster',
        completed: false,
      },
      {
        id: 'ba91OwrK0Dt8',
        bodyText: 'boss black',
        completed: false,
      },
      {
        id: 'QwejYipEf5nk',
        bodyText: 'caffe latte',
        completed: false,
      },
    ],
  }

  ReactDOM.render(
    <RecoilRoot
      initializeState={({ set }) => {
        set(recoilState, todo)
      }}
    >
      <App path="/" />
    </RecoilRoot>,
    div
  )

  ReactDOM.unmountComponentAtNode(div)
})
