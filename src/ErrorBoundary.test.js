import React from 'react'
import { render } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'

import '@testing-library/jest-dom/extend-expect'

test('shlould render fallback page when react take undefined as a node', () => {
  const WrongComponent = () => undefined
  const { getByText } = render(
    <ErrorBoundary>
      <WrongComponent />
    </ErrorBoundary>
  )
  expect(getByText('Something Error Ooccurring')).toBeInTheDocument()
})
