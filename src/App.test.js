import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'

import App from './App'
import { recoilState } from './dataStructure'

it('renders without crashing', () => {
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
  const div = document.createElement('div')

  const root = ReactDOM.createRoot(div)
  root.render(
    <RecoilRoot
      initializeState={({ set }) => {
        set(recoilState, todo)
      }}
    >
      <App path="/" />
    </RecoilRoot>
  )

  root.unmount()
})
