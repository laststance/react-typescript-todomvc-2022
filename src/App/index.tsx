import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import ErrorBoundary from '../ErrorBoundary'
import { NotFound } from '../NotFound'

import TodoMVC from './TodoMVC'

const App: React.FC = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<TodoMVC />} />
          <Route path="/active" element={<TodoMVC />} />
          <Route path="/completed" element={<TodoMVC />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </ErrorBoundary>
)

export default App
