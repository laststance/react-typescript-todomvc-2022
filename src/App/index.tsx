import ErrorBoundary from '../ErrorBoundary'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoMVC from './TodoMVC'
import { NotFound } from '../NotFound'

const App: React.FC = () => (<ErrorBoundary>
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<TodoMVC />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RecoilRoot>
          </BrowserRouter>
  </ErrorBoundary>)


export default App
