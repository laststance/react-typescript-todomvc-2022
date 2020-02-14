import React from 'react'
import { render } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'

import '@testing-library/jest-dom/extend-expect'

test('should render fallback page Error was thrown', () => {
  const InvalidComponent = () => undefined
  const { getByText } = render(
    <ErrorBoundary>
      <InvalidComponent />
    </ErrorBoundary>
  )
  expect(getByText('Something Error Ooccurring')).toBeInTheDocument()
})
